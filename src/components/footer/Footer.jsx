import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Ajay Pradhan
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#testimonial">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://fb.com/ajapradhan02">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com/ajay.pradhan02">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/in/ajay-pradhan-0211">
          <FaLinkedinIn />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Ajay Pradhan, All right reserved </small>
      </div>
    </footer>
  );
};

export default Footer;
