import '../css/site.css'
import '../css/index.css'
import '../css/contactPage.css'

import Email from '../assets/email-logo.svg'
import Phone from '../assets/phone-logo.svg'

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
      })
      .catch((error) => {
        console.error('error', response)
      })
  };

  return (
    <section className='d-flex justify-content-center contact-page-component-container' id="section4">
      <div className='component-content-container contact-page-content'>
        <div className='row h-100'>

          <div className='col-12'>
            <h1 className='main-header double-standard-bottom-padding'>Lets Connect!</h1>
          </div>

          {/* Text */}

          <div className='col-lg-6 col-md-12 col-sm-12 row'>

            {/* Individual columns for each item so they can collaps at medium screen sizes
             Likely col-12 for normal screens and col-4 for medium screen sizes and col-12 for small screen-sizes*/}

             <div className='col-lg-12 col-md-12 col-sm-4 col-xs-12 standard-bottom-padding'>
                <div className='d-flex flex-row' style={{maxHeight: '4rem', height: '100%'}}>
                  <img src={Email}/>
                  <div className='d-flex flex-column' >
                    <h2 style={{margin: '0'}}>Email Me:</h2>
                    <p style={{margin: '0'}}>Samscreativespace'@'gmail.com</p>
                  </div>
                </div>
             </div>

             <div className='col-lg-12 col-md-12 col-sm-4 col-xs-12 standard-bottom-padding'>
                <div className='d-flex flex-row' style={{maxHeight: '4rem', height: '100%'}}>
                  <img src={Phone}/>
                  <div className='d-flex flex-column' >
                    <h2 style={{margin: '0'}}>Call Me:</h2>
                    <p style={{margin: '0'}}>+44 7527 063 138</p>
                  </div>
                </div>
             </div>

             <div className='col-lg-12 col-md-12 col-sm-4 col-xs-12 standard-bottom-padding'>
                <div className='d-flex' style={{maxHeight: '4rem', height: '100%'}}>
                  <img src={Email}/>
                  <div className='d-flex flex-column' >
                    <h2 style={{margin: '0'}}>Email Me:</h2>
                    <p style={{margin: '0'}}>Samscreativespace'@'gmail.com</p>
                  </div>
                </div>
             </div>
        
          </div>

          {/* Form */}

          <div className='col-lg-6 col-md-12 col-sm-12 flex-column'>

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

              <input type='submit' value="Send"></input>

            </form>

            <Toaster /> 
          </div>

        </div>
      </div>
    </section>
  )
}

export default ContactPage