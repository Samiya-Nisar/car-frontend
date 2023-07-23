import React from 'react'
import Logo from '../Logo/Logo'

function Navbar() {
  const navToggleFunc = () => {
    const overlay = document.querySelector("[data-overlay]");
    const navbar = document.querySelector("[data-navbar]");
    const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");

    navToggleBtn.classList.toggle("active");
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  }
  return (
    <header className="header" data-header>
      <div className="container">
        <div onClick={navToggleFunc} className="overlay" data-overlay></div>
        <a href="#" className="logo"><Logo /></a>

        <nav className="navbar" data-navbar>
          <ul className="navbar-list">
            <li>
              <a onClick={navToggleFunc} href="#home" className="navbar-link" data-nav-link>Home</a>
            </li>

            <li>
              <a onClick={navToggleFunc} href="#featured-car" className="navbar-link" data-nav-link>Explore cars</a>
            </li>

            <li>
              <a onClick={navToggleFunc} href="#about" className="navbar-link" data-nav-link>About us</a>
            </li>

            <li>
              <a onClick={navToggleFunc} href="#blog" className="navbar-link" data-nav-link>News</a>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <div className="header-contact">
            <a href="tel:88002345678" className="contact-link">+91 9972 414200</a>
            <span className="contact-time">Mon - Sat: 9:00 am - 6:00 pm</span>
          </div>

          <a href="#featured-car" className="btn" aria-labelledby="aria-label-txt">
            <ion-icon name="car-outline"></ion-icon>
            <span id="aria-label-txt">Explore cars</span>
          </a>

          <button onClick={navToggleFunc} className="nav-toggle-btn" data-nav-toggle-btn aria-label="Toggle Menu">
            <span className="one"></span>
            <span className="two"></span>
            <span className="three"></span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar