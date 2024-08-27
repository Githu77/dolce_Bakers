import React, { useState } from 'react';
import axios from 'axios';

const Auth = ({ setIsLoggedIn }) => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const [isLogin, setIsLogin] = useState(true);
    const [message, setMessage] = useState('');

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
            if (response.data.success) { // Assuming the API returns a success flag
                setIsLoggedIn(true);
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
        <div>
            <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
            <form onSubmit={handleSubmit}>
                {!isLogin && (
                    <div>
                        <label>Username:</label>
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required={!isLogin}
                        />
                    </div>
                )}
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
            </form>
            {message && <p>{message}</p>}
            <button onClick={toggleForm}>
                {isLogin ? 'Switch to Sign Up' : 'Switch to Login'}
            </button>
        </div>
    );
};

export default Auth;
