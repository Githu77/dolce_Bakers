import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const AdminAuth = ({ setIsAdminLoggedIn }) => {
    const [formData, setFormData] = useState({
        adminUsername: '',
        adminEmail: '',
        adminPassword: ''
    });

    const [isLogin, setIsLogin] = useState(true);
    const [message, setMessage] = useState('');

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let response;
            if (isLogin) {
                response = await axios.post('http://localhost:8001/admin/login', {
                    adminEmail: formData.adminEmail,
                    adminPassword: formData.adminPassword,
                });
            } else {
                response = await axios.post('http://localhost:8001/admin/signup', {
                    adminUsername: formData.adminUsername,
                    adminEmail: formData.adminEmail,
                    adminPassword: formData.adminPassword,
                });
            }
            
            console.log(response.data);
            setMessage(response.data.message);

            if (response.data.success) {
                setIsAdminLoggedIn(true);
                navigate('/admin/dashboard');
            }
        } catch (error) {
            setMessage(error.response?.data?.message || 'An error occurred');
        }
    };
    
    const toggleForm = () => {
        setIsLogin(!isLogin);
        setMessage('');
    };

    return (
        <div className='auth-overlay'>
        <div className="auth-container">
            <div className="auth-box">
                <h2 className="auth-title">{isLogin ? 'Admin Login' : 'Admin Sign Up'}</h2>
                <form onSubmit={handleSubmit} className="auth-form">
                    {!isLogin && (
                        <div className="auth-input-group">
                            <label className="auth-label">Username:</label>
                            <input
                                type="text"
                                name="adminUsername"
                                value={formData.adminUsername}
                                onChange={handleChange}
                                className="auth-input"
                                required={!isLogin}
                            />
                        </div>
                    )}
                    <div className="auth-input-group">
                        <label className="auth-label">Email:</label>
                        <input
                            type="email"
                            name="adminEmail"
                            value={formData.adminEmail}
                            onChange={handleChange}
                            className="auth-input"
                            required
                        />
                    </div>
                    <div className="auth-input-group">
                        <label className="auth-label">Password:</label>
                        <input
                            type="password"
                            name="adminPassword"
                            value={formData.adminPassword}
                            onChange={handleChange}
                            className="auth-input"
                            required
                        />
                    </div>
                    <button type="submit" className="auth-button">{isLogin ? 'Login' : 'Sign Up'}</button>
                </form>
                {message && <p className="auth-message">{message}</p>}
                <button onClick={toggleForm} className="auth-toggle-button">
                    {isLogin ? 'Switch to Sign Up' : 'Switch to Login'}
                </button>
            </div>
        </div>
        </div>
    );
};

export default AdminAuth;
