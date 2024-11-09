// Footer.js
import React from 'react';
import './Footer.css';

function Footer({ onAboutClick, onContactClick }) {
    return (
        <footer className="footer">
            <div className="footer-content">
                <button className="footer-button" onClick={onAboutClick}>About</button>
                <button className="footer-button" onClick={onContactClick}>Contact</button>
                <p>© 2024 Movie Recommendation Service</p>
            </div>
        </footer>
    );
}

export default Footer;
