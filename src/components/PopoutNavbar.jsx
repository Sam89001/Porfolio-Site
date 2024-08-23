import React from 'react';
import '../css/navbar.css';

import CloseButton from '../assets/Close Button.webp'
import Logo from '../assets/SC.png';
import GithubLogo from '../assets/github-logo.svg'
import LinkedInLogo from '../assets/linkedin-logo.svg'

function PopoutNavbar({ isVisible, onClose }) {
  return (
    <div className={`d-flex w-75 h-100 flex-column popout-navbar ${isVisible ? 'show' : 'hide'}`}>
      {/* Top Section */}
      <div className='d-flex w-100 justify-content-between' style={{ height: '10%', paddingBottom: '0.5rem' }}>
        <div className='d-flex justify-content-center align-items-center' style={{  width: '30%', padding: '3%' }}>
          <button className='h-100 w-100 popout-close-button' onClick={onClose}>
            <img className='img-fluid' src={CloseButton}/>
          </button>
        </div>
        <div className='h-100 d-flex justify-content-end' style={{ width: '30%' }}>
          <img className='img-fluid' src={Logo} style={{ padding: '15% 5% 15% 5%' }} alt='Logo' />
        </div>
      </div>

      {/* Middle Section */}
      <div className='d-flex w-100 h-100 align-items-center' style={{ paddingBottom: '20%' }}>
        <ul className='popout-list' style={{listStyle: 'none', width: '100%'}}>

          <li className='popout-list-item'>
            <a className='popout-link' href='#'>
              <h2 className='popout-link-text'>Home</h2>
            </a>
          </li>

          <li className='popout-list-item'>
            <a className='popout-link' href='#section2'>
              <h2 className='popout-link-text'>About</h2>
            </a>
          </li>

          <li className='popout-list-item'>
            <a className='popout-link' href='#section3'>
              <h2 className='popout-link-text'>Projects</h2>
            </a>
          </li>

          <li className='popout-list-item'>
            <a className='popout-link' href='#section4'>
              <h2 className='popout-link-text'>Contact</h2>
            </a>
          </li>

        </ul>
      </div>

      {/* Bottom Section */}
      <div className='d-flex w-100 align-items-center' style={{ height: '15%', marginTop: 'auto' }}>
        <div className='d-flex h-100 w-100 align-items-center' style={{paddingLeft: '1rem'}}>

          <a href="https://github.com/Sam89001" target="_blank" rel="noopener noreferrer">
            <img className='popout-socials-image' src={GithubLogo} style={{marginRight: '1rem'}}/>
          </a>

          <a href="https://www.linkedin.com/in/samuel-cole-586582229/" target="_blank" rel="noopener noreferrer">
            <img className='popout-socials-image' src={LinkedInLogo} />
          </a>

        </div>
      </div>

    </div>
  );
}

export default PopoutNavbar;

