// components/RegistrationForm.js
import React, { useState } from 'react';
import './LoginForm.css'; // Используем единые стили для единообразного интерфейса

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

    // Функция для изменения значений в форме
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Валидация имени пользователя: только буквы и цифры
    const validateUsername = (username) => {
        const regex = /^[a-zA-Z0-9]+$/;
        return regex.test(username);
    };

    // Валидация email: проверка на наличие символов "@"
    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    // Валидация пароля: наличие заглавной буквы, цифры и спецсимвола
    const validatePassword = (password) => {
        const hasUpperCase = /[A-Z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
        return hasUpperCase && hasNumber && hasSpecialChar;
    };

    // Обработка отправки формы
    const handleSubmit = (e) => {
        e.preventDefault();

        let usernameError = '';
        let emailError = '';
        let passwordError = '';

        // Проверка ошибок для каждого поля
        if (!validateUsername(formData.username)) {
            usernameError = 'Имя пользователя должно содержать только буквы и цифры.';
        }

        if (!validateEmail(formData.email)) {
            emailError = 'Введите корректный email с символом "@".';
        }

        if (!validatePassword(formData.password)) {
            passwordError = 'Пароль должен содержать хотя бы одну заглавную букву, одну цифру и один спецсимвол.';
        }

        // Устанавливаем ошибки в состоянии
        setErrors({
            username: usernameError,
            email: emailError,
            password: passwordError
        });

        // Если ошибок нет, вызываем обработчик успешной регистрации
        if (!usernameError && !emailError && !passwordError) {
            onSuccessfulRegister(); // Переход к следующим шагам после успешной регистрации
        }
    };

    return (
        <div className="login-form-overlay">
            <div className="login-form-container">
                <div className="login-form-header">
                    <h2>Регистрация</h2>
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
