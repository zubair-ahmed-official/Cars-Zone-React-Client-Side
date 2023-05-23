// import React from 'react';
import { useContext } from 'react'
import './ContactUS.css'
import { AuthContext } from '../Providers/AuthProviders'
import AOS from 'aos';
import 'aos/dist/aos.css';
const ContactUS = () => {
    const {user} = useContext(AuthContext)
    AOS.init();
    return (
        
        <div  className='Contact' data-aos="zoom-in-up">
        <h2 id='contact'className='ContactHeading'>Contact Us</h2>
        <div className='contactFlex'>
        <form action="https://formsubmit.co/saad03261@gmail.com" method="POST">
            <p>Your Name:</p>
            <input className='inputContact'  type="text" name="name" placeholder=" Name" defaultValue={user?.displayName} required /><br />
            <p>Your Email:</p>
            <input className='inputContact'  type="email" name="email" placeholder=" E-Mail" defaultValue={user?.email} required /><br />
            <p>Your Message:</p>
            <textarea className='inputTextArea'  placeholder=" Your message" name="message" required></textarea><br />
            <button type="submit" className="loginBtn">Send &nbsp;&nbsp;<i
                className="rotate fa-regular fa-paper-plane"></i></button>
        </form>
        <div>
            <img className='contactImg' src='https://i.ibb.co/fXqjWpb/aditya-rathod-tc-rukx-VBXQ-unsplash.jpg'></img>
        </div>
        </div>
    </div>
    );
};

export default ContactUS;