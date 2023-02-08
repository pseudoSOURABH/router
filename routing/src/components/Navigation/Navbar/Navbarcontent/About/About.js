import React from 'react'
import './About.css';
import about_image from '../../../../Images/resume_pic.jpg';

const About = () => {
  return (
    <>
     
      <section id="about">
        <div className="about container">
            <div className="col-left">
                <div className="about-img">
                <img src={about_image} alt="img" />
                </div>
            </div>
            <div className="col-right">
                <h1 className="about-title">
                    ABOUT <span>US</span>
                </h1>
                <h2>TECH DEVELOPER</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A iusto totam sequi officia maxime at
                    corrupti impedit deleniti consequaj Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Maiores, quaerat.tur possimus?</p>
                <a href="#" className="cta">Download Resume</a>

            </div>
        </div>
    </section>
    </>
  )
}

export default About