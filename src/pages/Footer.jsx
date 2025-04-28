import React from 'react';
import "./css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>We connect alumni and students, creating opportunities to inspire, collaborate, and grow together.</p>
        </div>

        <div className="footer-section location">
          <h2>Location</h2>
          <p>XYZ University Campus<br />123 College Street<br />City, State, 12345</p>
        </div>

        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <p>Email: alumni@xyzuniversity.com</p>
          <p>Phone: +1 234 567 890</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 Alumni Meet. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer;
