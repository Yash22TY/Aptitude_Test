<<<<<<< HEAD
import React from 'react';
import './Footer.css';
import { FaInstagram, FaYoutube, FaLinkedin, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Aptitude Test App. All rights reserved.</p>
        <div className="footer-icons">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>
        <p>Made by <strong>Yash Nalawade</strong></p>
      </div>
    </footer>
  );
}

export default Footer;
=======
import React from 'react';
import './Footer.css';
import { FaInstagram, FaYoutube, FaLinkedin, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Aptitude Test App. All rights reserved.</p>
        <div className="footer-icons">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>
        <p>Made by <strong>Yash Nalawade</strong></p>
      </div>
    </footer>
  );
}

export default Footer;
>>>>>>> 42f78361ced614b42bedf5bae1314bb6c7577a25
