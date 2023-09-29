// Contact.js
import React from 'react';
import './Contact.css'; // Import the CSS file for styling
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import MailIcon from "@mui/icons-material/Mail";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

function Contact() {
    return (
        <>
            <h1 class="stylish-h1">Contact Me</h1>
            <section className="contact">


                <div className="flex flex-col sm:flex-row justify-center items-center info">
                    <div>
                        <h3 className="text-xl">
                            {" "}
                            <PhoneIphoneIcon /> Call Me
                        </h3>
                        <p>+91 7350633397</p>

                        <br />
                        <h3 className="text-xl">
                            {" "}
                            <MailIcon /> Email
                        </h3>
                        <p>maheshpatil3397@gmail.com</p>
                        <br />
                        <h3 className="text-xl">
                            {" "}
                            <LocationOnIcon /> Location
                        </h3>
                        <p>Pune - Maharashtra</p>
                    </div>
                </div>
                <div className="contact-content">

                    <p>If you have any questions or would like to work together, please feel free to get in touch.</p>
                    <form>
                        <div className="form-group">
                            <input type="text" placeholder="Name" />
                        </div>
                        <div className="form-group">
                            <input type="email" placeholder="Email" />
                        </div>
                        <div className="form-group">
                            <textarea placeholder="Message" rows="5" />
                        </div>
                        <button type="submit" endIcon={<SendIcon />}>Send</button>
                    </form>
                </div>
            </section>
        </>
    );
}

export default Contact;
