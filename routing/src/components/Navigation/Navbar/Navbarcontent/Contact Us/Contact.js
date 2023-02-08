import React from 'react'
import './Contact.css';
const Contact = () => {
  return (
    <>

<section id="contact">
        <div className="contact container">
            <div>
                <h1 className="contact-title">
                    Contact <span>Info</span>
                </h1>

            </div>
            <div className="contact-items">
                <div className="contact-item">
                    <div className="icon">
                        <img src="https://img.icons8.com/material-sharp/24/null/call-male.png" />
                    </div>
                    <div className="contact-info">
                        <h1>
                            Phone
                        </h1>
                        <h2>9977799311</h2>
                        <h2>9977799311</h2>

                    </div>
                </div>

                <div className="contact-item">
                    <div className="icon">
                        <img src="https://img.icons8.com/color/48/null/circled-envelope.png" />
                    </div>
                    <div className="contact-info">
                        <h1>
                            Email
                        </h1>
                        <h2>abc@outlook.com</h2>
                        <h2>xyz@gmail.com</h2>

                    </div>
                </div>


                <div className="contact-item">
                    <div className="contact-icon">
                        <img src="https://img.icons8.com/ios-filled/50/null/order-delivered.png" />
                    </div>
                    <div className="contact-info">
                        <h1>
                            Address
                        </h1>
                        <h2>dells,texas</h2>
                        <h2>melbourne,victoria</h2>

                    </div>
                </div>


            </div>
        </div>
    </section>

    
    </>
  )
}

export default Contact