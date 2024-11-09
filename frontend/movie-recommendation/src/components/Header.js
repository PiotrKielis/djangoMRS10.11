// Header.js
import React from 'react';
import ThemeToggle from './ThemeToggle';
import './Header.css';

function Header({ onLoginClick, toggleTheme, isDarkTheme }) {
    return (
        <header className="header">
            <div className="middle-section">
                <div className="logo-container" onClick={() => window.location.reload()}>
                    <span role="img" aria-label="home" className="home-icon">
                        {/* Минималистичная SVG иконка домика с обводкой, цвет зависит от темы */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke={isDarkTheme ? "#ffffff" : "#000000"} // Цвет меняется в зависимости от темы
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-home"
                        >
                            <path d="M3 9L12 2l9 7"></path>
                            <path d="M9 22V12h6v10"></path>
                            <path d="M22 9V21a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V9"></path>
                        </svg>
                    </span>
                </div>
                <ThemeToggle isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
                <button className="nav-button" onClick={onLoginClick}>
                    <span role="img" aria-label="log in">🔑</span>
                </button>
            </div>
        </header>
    );
}

export default Header;
