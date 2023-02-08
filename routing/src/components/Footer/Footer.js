import React from 'react'
import './Footer.css';
const Footer = () => {
  return (
    <div>
        <section id="footer">
        <div className="footer container">
            <div className="brand">
                <h1>Let's </h1>
                <h1>CODE</h1>
                <h2>A Programming Revolution</h2>
                <div className="social-icon">
                    <div className="social-item">
                        <a href="#"> <img src="https://img.icons8.com/fluency/48/null/facebook-new.png" /></a>


                    </div>
                    <div className="social-item">
                        <a href="#"><img src="https://img.icons8.com/color/48/null/instagram-new--v1.png" /></a>
                    </div>
                    <div className="social-item">
                        <a href="#"><img src="https://img.icons8.com/ios/50/null/whatsapp--v1.png" /></a>
                    </div>
                    <div className="social-item">

                        <a href="#"><img src="https://img.icons8.com/color/48/null/twitter--v1.png" /></a>
                    </div>
                </div>

                <p>Copyright @2022 Let's CODE. All rights reserved.</p>

            </div>

        </div>
    </section>
    </div>
  )
}

export default Footer