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
  
  
  const sendEmail = (e) => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const template = {
      from_name: name,
      from_email: email,
      to_name: 'SamCS',
      message: message
    }

    emailjs.send(serviceId, templateId, template, publicKey)
      .then((response) => {
        console.log('success', response);
        setName('');
        setEmail('');
        setMessage('');
        toast.success('Email sent!')
      })
      .catch((error) => {
        toast.error('Error send email')
        console.error('error', response)
      })
  };

  return (
    <section className='d-flex justify-content-center contact-page-component-container' id="section4">
      <div className='component-content-container contact-page-content'>
        <div className='row d-flex h-100 justify-content-center'>

          <div className='col-12'>
            <h1 className='main-header double-standard-bottom-padding'>Lets Connect!</h1>
          </div>

          {/* Text */}

          <div className='col-lg-6 col-md-12 col-sm-12 row' style={{marginBottom: '2rem'}}>

            {/* Email */}

             <div className='col-12' style={{padding: '0px 0px 2rem 0px'}}>
                <div className='d-flex'>
                  <div className='d-flex flex-column' >
                    <h2 className='contact-page-social-title'>Email Me:</h2>
                    <p className='contact-page-social-content'>Samscreativespace'@'gmail.com</p>
                  </div>
                </div>
             </div>

            {/* Phone */}

             <div className='col-12' style={{padding: '0px 0px 2rem 0px'}}>
                <div className='d-flex' >
                  <div className='d-flex flex-column' >
                    <h2 className='contact-page-social-title' >Call Me:</h2>
                    <p className='contact-page-social-content'>+44 7527 063 138</p>
                  </div>
                </div>
             </div>

             {/* Socials */}

             <div className='col-12' style={{padding: '0px 0px 2rem 0px'}}>
                <div className='d-flex' >

                  <div className='d-flex flex-column' >
                    <h2 className='contact-page-social-title' >Socials:</h2>

                    <div className='d-flex flex-column' >

                      <div className='d-flex flex-row' style={{marginBottom: '5px'}}>
                        <a className='d-flex' href='https://github.com/Sam89001' target="_blank" rel="noopener noreferrer" style={{width: '5%'}}>
                          <img className='img-fluid' src={Github} />
                        </a>

                        <a className='contact-page-social-media-link-container' href='https://github.com/Sam89001' target="_blank" rel="noopener noreferrer"> 
                          <p className='contact-page-social-media-link'>github.com/Sam89001</p>
                        </a>
                      </div>

                      <div className='d-flex flex-row'>
                        <a className='d-flex' href='https://www.linkedin.com/in/samuel-cole89001/' target="_blank" rel="noopener noreferrer" style={{width: '5%'}}>
                          <img className='img-fluid' src={Linkedin} />
                        </a>

                        <a className='contact-page-social-media-link-container' href='https://github.com/Sam89001' target="_blank" rel="noopener noreferrer"> 
                          <p className='contact-page-social-media-link'>linkedin.com/in/samuel-cole89001</p>
                        </a>
                      </div>
                      
                    </div>
                    
                  </div>
                </div>
             </div>
        
          </div>

          {/* Form */}

          <div className='col-lg-6 col-md-12 col-sm-12 flex-column d-flex' style={{marginBottom: '2rem'}}>
            

            <form onSubmit={sendEmail}>

              <div className='contact-page-input-container'>
                <label className='contact-page-label'>Name <span className='contact-page-label-star'>*</span>
                </label>
                <input className='d-flex contact-page-input-field' 
                placeholder='John Smith' 
                type="text" 
                onChange={(e) => { setName(e.target.value)}}
                />
              </div>
              
              <div className='contact-page-input-container'>
                <label className='contact-page-label'>Email <span className='contact-page-label-star'>*</span>
                </label>
                <input className='d-flex contact-page-input-field' 
                placeholder='JohnSmith@SmithJohn.com' 
                type="email"
                onChange={(e) => { setEmail(e.target.value)}} />
              </div>

              <div className='contact-page-input-container'>
                <label className='contact-page-label'>Message <span className='contact-page-label-star'>*</span>
                </label>
                <textarea className='d-flex contact-page-input-message-field' 
                placeholder='Your Message' 
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