import React from 'react'
import Logo from '../Logo/Logo'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#" className="logo">
              <Logo />
            </a>

            <p className="footer-text">
              We are passionate about cars and dedicated to providing you with comprehensive details about various car models and their exciting features
            </p>
          </div>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Company</p>
            </li>

            <li>
              <a href="#" className="footer-link">About us</a>
            </li>

            <li>
              <a href="#" className="footer-link">Pricing plans</a>
            </li>

            <li>
              <a href="#" className="footer-link">Our blog</a>
            </li>

            <li>
              <a href="#" className="footer-link">Contacts</a>
            </li>
          </ul>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Support</p>
            </li>

            <li>
              <a href="#" className="footer-link">Help center</a>
            </li>

            <li>
              <a href="#" className="footer-link">Ask a question</a>
            </li>

            <li>
              <a href="#" className="footer-link">Privacy policy</a>
            </li>

            <li>
              <a href="#" className="footer-link">Terms & conditions</a>
            </li>
          </ul>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Neighborhoods</p>
            </li>

            <li>
              <a href="#" className="footer-link">Bengaluru</a>
            </li>

            <li>
              <a href="#" className="footer-link">Mumbai</a>
            </li>

            <li>
              <a href="#" className="footer-link">Chennai</a>
            </li>

            <li>
              <a href="#" className="footer-link">Delhi</a>
            </li>

            <li>
              <a href="#" className="footer-link">Kerala</a>
            </li>

            <li>
              <a href="#" className="footer-link">Hyderabad</a>
            </li>

            <li>
              <a href="#" className="footer-link">Bhopal</a>
            </li>

            <li>
              <a href="#" className="footer-link">Gujarat</a>
            </li>
          </ul>
        </div>

        <div className="footer-bottom">
          <ul className="social-list">
            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-skype"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" className="social-link">
                <ion-icon name="mail-outline"></ion-icon>
              </a>
            </li>
          </ul>

          <p className="copyright">&copy; 2023 <a href="#">CarFolio</a>. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer