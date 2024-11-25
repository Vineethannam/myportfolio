import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero-container">
        <div className="hero-content">
            <h2>Building Digital Experience That Inspire</h2>
            <p>
                Passionate Frontend Developer | Transforing Ideas into Seamless and Visually Stunning Web Solutions
            </p>
        </div>

        <div className="hero-img">
            <div>
                <div className="tech-icon">
                <img src="./assets/images/image2.png" alt="" />
                </div>
                <img src="./assets/images/Vineeth.jpg" alt="" />
            </div>

            <div>
                <div className="tech-icon">
                    <img src="./assets/images/image5.png" alt="" />
                </div>
                <div className="tech-icon">
                    <img src="./assets/images/image4.png" alt="" />
                </div>
                <div className="tech-icon">
                    <img src="./assets/images/image1.png" alt="" />
                </div>
                <div className="tech-icon">
                    <img src="./assets/images/image3.png" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
