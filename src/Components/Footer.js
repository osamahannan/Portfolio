import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer-header">Connect with me on!</div>
            
                    <div className="social-icon">
                        <a href="https://github.com/osamahannan" className="github social"><FaGithub/></a>
                        <a href="https://www.linkedin.com/in/osama-hannan-7337921a0/" className="linkedin social"><FaLinkedin/></a>
                        <a href="https://www.instagram.com/osamahannan5/" className="instagram social"><FaInstagram/></a>
                    </div>
            
            </footer>
        </> 
    );
}

export default footer;