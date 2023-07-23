import React from 'react'

const About = () => {
  return (
    <section className="section about" id="about">
        <div className="container">

            <div className="title-wrapper">
                <h2 className="h2 section-title">About Us</h2>
            </div>
            <br></br>

            <p className="hero-text">
                Welcome to CarFolio - your ultimate destination for everything automotive! We are passionate about cars and dedicated to providing you with comprehensive details about various car models and their exciting features.
            </p>

            <h3 className="h3 hero-title">Our Mission</h3>
            <p className="hero-text">
                At CarFolio, our mission is to empower car enthusiasts, drivers, and buyers with accurate and up-to-date information on the latest car models, performance, safety features, technology advancements, and more. We strive to be your go-to resource for making informed decisions about your automotive needs.
            </p>

            <h3 className="h3 hero-title">Why CarFolio?</h3>
            <p className="hero-text">
                CarFolio is not just another automobile website; we are a team of car aficionados who share a common love for cars and everything they represent. Here's what sets us apart:
                <ol>
                    <li><strong>1. In-Depth Car Insights:</strong> We go beyond the surface to provide you with in-depth insights into the world of automobiles. Our expert reviews, buying guides, and detailed specifications will help you understand every aspect of your dream car.</li>

                    <li><strong>2. User-Friendly Interface:</strong> Our website is designed with you in mind. With an intuitive and user-friendly interface, navigating through the vast array of car information becomes a seamless experience.</li>

                    <li><strong>3. Stay Updated:</strong> CarFolio is committed to keeping you updated with the latest trends and innovations in the automotive industry. From electric cars to autonomous driving, we bring you the future of mobility.</li>

                    <li><strong>4. Community-Driven Platform:</strong> We believe in the power of community. Join our growing community of car enthusiasts, share your experiences, and connect with like-minded individuals who share your passion for automobiles.</li>
                </ol>
            </p>

            <h3 className="h3 hero-title">Contact Us</h3>
            <p className="hero-text">
                We value your feedback and welcome any questions or suggestions you may have. Feel free to reach out to us via our contact form or drop us an email at <strong>contact@carfolio.com</strong>.<br></br>
                Thank you for choosing CarFolio as your trusted automotive companion. Let's embark on an exciting journey together as we explore the fascinating world of cars!<br></br>

                <span style={{textAlign:'center'}}>Happy driving!<br></br>The CarFolio Team</span>
            </p>

            
        </div>
      </section>
  )
}

export default About