import React,{ useRef } from 'react';
import {TfiEmail,TfiLinkedin} from 'react-icons/tfi';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zsjdemj', 'template_ynkd3dc', form.current, 'RANm1xZ06iTz7aaSu')
    
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Let's Talk Over a Coffee</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>

          <article className='contact__option'>
            <TfiEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>harinish986@gmail.com</h5>
            <a href='mailto:harinish986@gmail.com' target='_blank' rel="noopener noreferrer">Send a message</a>
          </article>

          <article className='contact__option'>
            <TfiLinkedin className='contact__option-icon'/>
            <h4>LinkedIN</h4>
            <h5>sri-harini-frontend-guru</h5>
            <a href='https://www.linkedin.com/in/sri-harini-frontend-guru/' target='_blank' rel="noopener noreferrer">Send a message</a>
          </article>

        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your full name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your message...'></textarea>
          <button type='submit' className='btn btn-primary'>Send</button>
        </form>
      </div>

    </section>
  )
}

export default Contact