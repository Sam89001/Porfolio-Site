import React from 'react';
import '../css/popup.css';

import Logo from '../assets/SC.png';
import GithubLogo from '../assets/github-logo.svg'
import LinkedInLogo from '../assets/linkedin-logo.svg'

function Popup({ isVisible, onClose }) {
  
  return (
    <div className={`popup ${isVisible ? 'show' : 'hide'}`}>
      <div className='w-100 d-flex justify-content-end' style={{backgroundColor: 'red', height: '7%'}}>
        <button className='h-100' style={{backgroundColor: 'lightblue'}} onClick={onClose}>Close</button>
      </div>
      
    </div>
  )
}

export default Popup