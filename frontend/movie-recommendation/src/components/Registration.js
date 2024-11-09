// components/RegistrationForm.js
import React, { useState } from 'react';
import './LoginForm.css'; // Используем стили из LoginForm

function RegistrationForm({ onClose, onSuccessfulRegister }) {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validateUsername = (username) => {
        const regex = /^[a-zA-Z0-9]+$/; // Только буквы и цифры
        return regex.test(username);
    };

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Формат email
        return regex.test(email);
    };

    const validatePassword = (password) => {
        const hasUpperCase = /[A-Z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password); // Проверка на спецсимволы
        return hasUpperCase && hasNumber && hasSpecialChar;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let usernameError = '';
        let emailError = '';
        let passwordError = '';

        if (!validateUsername(formData.username)) {
            usernameError = 'Username must contain only letters and numbers.';
        }

        if (!validateEmail(formData.email)) {
            emailError = 'Email must be a valid address and include "@".';
        }

        if (!validatePassword(formData.password)) {
            passwordError = 'Password must include at least one uppercase letter, one number, and one special character.';
        }

        setErrors({
            username: usernameError,
            email: emailError,
            password: passwordError
        });

        // Если ошибок нет, данные валидны и можно продолжать
        if (!usernameError && !emailError && !passwordError) {
            alert('Registration Successful!');
            onSuccessfulRegister(); // Переход к следующему шагу после успешной регистрации
        }
    };

    return (
        <div className="login-form-overlay">
            <div className="login-form-container">
                <div className="login-form-header">
                    <h2>Register</h2>
                    <button className="close-button" onClick={onClose}>×</button>
                </div>
                <form onSubmit={handleSubmit} className="login-form">
                    <div className="form-group">
                        <label htmlFor="username">Имя пользователя</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            placeholder="Введите имя пользователя"
                            className="form-input"
                        />
                        {errors.username && <span className="error-message">{errors.username}</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Введите email"
                            className="form-input"
                        />
                        {errors.email && <span className="error-message">{errors.email}</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Пароль</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Введите пароль"
                            className="form-input"
                        />
                        {errors.password && <span className="error-message">{errors.password}</span>}
                    </div>
                    <div className="form-buttons">
                        <button type="submit" className="login-button">Зарегистрироваться</button>
                        <button type="button" onClick={onClose} className="register-button">Назад</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default RegistrationForm;
