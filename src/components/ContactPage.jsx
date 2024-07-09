import '../css/site.css'
import '../css/index.css'
import '../css/contactPage.css'

import Email from '../assets/email-logo.svg'
import Phone from '../assets/phone-logo.svg'
import Computer from '../assets/computer-logo.svg'

import Github from '../assets/github-logo.svg'
import Linkedin from '../assets/linkedin-logo.svg'

import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

function ContactPage() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const [emailCounter, setEmailCounter] = useState(0)
  
  
  const sendEmail = (e) => {
    e.preventDefault();
  
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    var nameField = document.getElementById('namefield')
    var emailField = document.getElementById('emailfield')
    var messageField = document.getElementById('messagefield')
  
    const template = {
      from_name: name,
      from_email: email,
      to_name: 'SamCS',
      message: message
    }

    //Basic Validation
  
    if (!name.length || !email.length || !message.length) {
      toast.error('Please make sure name, email and message boxes are filled.');
      return;
    } else if (emailCounter >= 3) {
      toast.error('You have reached the limit of sending emails.');
      return;
    }

    //Sending Email
  
    emailjs.send(serviceId, templateId, template, publicKey)
      .then((response) => {
        console.log('success', response);
        setName('');
        setEmail('');
        setMessage('');
        nameField.value=('')
        emailField.value=('')
        messageField.value=('')
        toast.success('Email sent!');
        setEmailCounter(prevCounter => prevCounter + 1); 
      })
      .catch((error) => {
        toast.error('Error sending email');
        console.error('error', error);
      });
  };

  return (
    <section className='d-flex justify-content-center contact-page-component-container' id="section4">
      <div className='component-content-container contact-page-content'>
        <div className='row d-flex h-100 justify-content-center'>

          <div className='col-12'>
            <h1 className='main-header'>Lets Connect!</h1>
            <h2 className='sub-header double-standard-bottom-padding' style={{color: 'var(--green)'}}>Message me</h2>
          </div>

          {/* Form */}

          <div className='col-12 d-flex w-100' style={{marginBottom: '2rem'}}>
            

            <form className='w-100' onSubmit={sendEmail}>

              <div className='d-flex flex-row w-100'>

                <div className='contact-page-input-container w-50'>
                  <label className='contact-page-label'>Name <span className='contact-page-label-star'>*</span>
                  </label>
                  <input className='d-flex contact-page-input-field' 
                  id='namefield'
                  placeholder='John Smith' 
                  type="text" 
                  style={{width: '98%', border: 'solid 2px var(--red)'}}
                  onChange={(e) => { setName(e.target.value)}}
                  />
                </div>
                
                <div className='d-flex flex-column justify-content-end w-50 contact-page-input-container'>
                  <label className='contact-page-label'>Email <span className='contact-page-label-star'>*</span>
                  </label>
                  <input className='d-flex contact-page-input-field' 
                  id='emailfield'
                  placeholder='JohnSmith@SmithJohn.com' 
                  type="email"
                  style={{width: '98%', border: 'solid 2px var(--yellow)'}}
                  onChange={(e) => { setEmail(e.target.value)}} />
                </div>

              </div>

              <div className='contact-page-input-container w-100'>
                <label className='contact-page-label'>Message <span className='contact-page-label-star'>*</span>
                </label>
                <textarea className='d-flex contact-page-input-message-field w-100' 
                id='messagefield'
                placeholder='Your Message'
                style={{border: 'solid 2px var(--blue)'}} 
                onChange={(e) => { setMessage(e.target.value)}} />
              </div>

              <div className='contact-page-form-button-container'>
                <input className='contact-page-form-button' type='submit' value="Send Message >"/>
              </div>

            </form>

            <Toaster 
              toastOptions={{ 
                className: 'toast-notification', 
                style: {
                  fontFamily: 'Josefin Sans, sans-serif',
                  fontSize: '1.5rem',
                  backgroundColor: 'var(--textGrey)',
                  color: '#fff',
                  padding: '10px 20px',
                  borderRadius: '4px',
                  zIndex: '9999',
                } 
              }}
            />

          </div>

        </div>
      </div>
    </section>
  )
}

export default ContactPage