import React, { useRef } from 'react'
import bull from '../assets/bulletin.svg'
import "../components/page3.css"
import emailjs from '@emailjs/browser';

const Page3 = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_8qzj5hb', 'template_qohda94', form.current, {
        publicKey: '_ukuzyxi4MTozFUtW',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert('Email sent !');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <>
    <section className="contact">
        <div className="head">
            <img src={bull}></img>
            <h2>Contact</h2>
        </div>
        <div className="mainform">
            <form className="contact-form" ref={form}  onSubmit={sendEmail}>
                <input type="text" className="name" placeholder='Your Name' name='from_name'/>
                <input type="email" className="email" placeholder='Your Email' name='from_email'/>
                <textarea name="message" className="message" rows="5" placeholder='Your Message' ma></textarea>
                <button type='submit' value="Send" className='submitbtn'>Submit</button>
            </form>
        </div>
    </section>
    </>
  )
}

export default Page3