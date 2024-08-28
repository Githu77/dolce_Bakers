import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Auth = ({ setIsLoggedIn }) => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
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
                response = await axios.post('http://localhost:8001/users/login', {
                    email: formData.email,
                    password: formData.password,
                });
            } else {
                response = await axios.post('http://localhost:8001/users/signup', {
                    username: formData.username,
                    email: formData.email,
                    password: formData.password,
                });
            }

            setMessage(response.data.message);
            if (response.data.success) {
                setIsLoggedIn(true);
                navigate('/home');
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
                <h2 className="auth-title">{isLogin ? 'Login' : 'Sign Up'}</h2>
                <form onSubmit={handleSubmit} className="auth-form">
                    {!isLogin && (
                        <div className="auth-input-group">
                            <label className="auth-label">Username:</label>
                            <input
                                type="text"
                                name="username"
                                value={formData.username}
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
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="auth-input"
                            required
                        />
                    </div>
                    <div className="auth-input-group">
                        <label className="auth-label">Password:</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
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

export default Auth;
