import React from 'react';
import './footer.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-links">
                        <a href="/terminos-y-condiciones">Términos y Condiciones</a>
                        <a href="/atencion-al-cliente">Atención al Cliente</a>
                        <a href="/contacto">Contacto</a>
                    </div>
                    <div className="footer-social">
                        <a href="https://facebook.com/multify" target="_blank" rel="noopener noreferrer">
                            <FaFacebook />
                        </a>
                        <a href="https://twitter.com/multify" target="_blank" rel="noopener noreferrer">
                            <FaTwitter />
                        </a>
                        <a href="https://instagram.com/multify" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                    </div>
                    <p>&copy; 2024 MultiTask. Todos los derechos reservados.</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;
