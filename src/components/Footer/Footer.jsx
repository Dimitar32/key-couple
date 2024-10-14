import React from 'react';
import './Footer.css';
import {
    FaFacebookF,
    FaInstagram,
    FaTiktok
} from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <p>Свържете се с нас: disneykeychains@gmail.com</p>
            <p>Тел: +359 879 330 389</p>
            <div className="social-links">
                <a
                    target="_blank"
                    href="https://www.instagram.com/become.pro2024"
                    aria-label="Facebook"
                >
                    <FaFacebookF />
                </a>

                <a
                    target="_blank"
                    href="https://www.instagram.com/become.pro2024"
                    aria-label="Instagram"
                >
                    <FaInstagram />
                </a>

                <a
                    target="_blank"
                    href="https://www.instagram.com/become.pro2024"
                    aria-label="TikTok"
                >
                    <FaTiktok />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
