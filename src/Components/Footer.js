/* eslint-disable jsx-a11y/anchor-is-valid */
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
                        <a href="https://github.com/osamahannan" target ="_blank" rel="noreferrer" className="github social"><FaGithub/></a>
                        <a href="https://www.linkedin.com/in/osama-hannan-7337921a0/" target ="_blank" rel="noreferrer" className="linkedin social"><FaLinkedin/></a>
                        <a href="https://www.instagram.com/osamahannan5/" target ="_blank" rel="noreferrer" className="instagram social"><FaInstagram/></a>
                    </div>
            
            </footer>
        </> 
    );
}

export default footer;