// ThemeToggle.js
import React from 'react';
import './ThemeToggle.css';

function ThemeToggle({ isDarkTheme, toggleTheme }) {
    return (
        <label className="switch">
            <input type="checkbox" checked={isDarkTheme} onChange={toggleTheme} />
            <span className="slider round">
                <span className="sun-icon">🌙</span>
                <span className="moon-icon">☀️</span>
            </span>
        </label>
    );
}

export default ThemeToggle;
