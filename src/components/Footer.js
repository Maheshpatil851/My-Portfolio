import React from "react";

import  './Footer.css'


const Footer = () => {
  return (
    
    <footer className="footer">
      <div className="footer-icons">
        <a href="https://www.facebook.com/profile.php?id=100009809431398" className="icon-link">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://twitter.com/MaheshPatil851?t=KFrI5kc4Z9-DNK70F5BVDA&s=08" className="icon-link">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.instagram.com/Maheshpatil851/" className="icon-link">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/in/mahesh-patil-b194a0227" className="icon-link">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="https://github.com/Maheshpatil851" className="icon-link">
          <i className="fab fa-github"></i>
        </a>
      </div>

      <div className="footer-info">
        <p>Contact: maheshpatil@gmail.com</p>
        <p>Phone: 7350633397</p>
      </div>

      <p className="footer-copyright">&copy; 2023 Mahesh Patil. All rights reserved.</p>
    </footer>
  

  );
};

export default Footer;
