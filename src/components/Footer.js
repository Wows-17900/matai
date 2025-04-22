import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <div className="footer-links">
            <a href="https://www.ntu.edu.sg" target="_blank" rel="noopener noreferrer">NTU Singapore</a>
            <a href="https://www.ntu.edu.sg/scse" target="_blank" rel="noopener noreferrer">School of Computer Science and Engineering</a>
            <a href="https://www.ntu.edu.sg/mae" target="_blank" rel="noopener noreferrer">School of Mechanical & Aerospace Engineering</a>
            <a href="https://www.ntu.edu.sg/mse" target="_blank" rel="noopener noreferrer">School of Materials Science & Engineering</a>
            <a href="https://www.a-star.edu.sg/" target="_blank" rel="noopener noreferrer">A*STAR Singapore</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} MATAI Project. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
