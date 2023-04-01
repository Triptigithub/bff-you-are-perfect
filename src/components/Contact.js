
import React from 'react';
import "./contact.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterest } from 'react-icons/fa';

function Footer() {
  return (

    
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="footer-widget">
              <h3>About Us</h3>
              <p>We are here to make sure that you are always happy. We can help you to stay safe and stay calm.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-widget">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-widget">
              <h3>Follow Us</h3>
              <ul className="social-icons">
                <li><a href="#"><FaFacebookF /></a></li>
                <li><a href="#"><FaTwitter /></a></li>
                <li><a href="#"><FaInstagram /></a></li>
                <li><a href="#"><FaPinterest /></a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-widget">
              <h3>Contact Us</h3>
              <ul className="contact-info">
                <li><i className="fas fa-map-marker-alt"></i> BPIT Main Street building-123</li>
                <li><i className="fas fa-phone"></i> (91) XXXXXXXX</li>
                <li><i className="fas fa-envelope"></i> info@example.com</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p>Copyright © 2023 
                <a href="#"> YOU ARE PERFECT</a> | All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
