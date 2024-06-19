import React from 'react';
import '../css/navbar.css';
import Logo from '../assets/SC.png';

import GithubLogo from '../assets/github-logo.svg'
import LinkedInLogo from '../assets/linkedin-logo.svg'

function PopoutNavbar({ isVisible, onClose }) {
  return (
    <div className={`d-flex w-75 h-100 flex-column popout-navbar ${isVisible ? 'show' : 'hide'}`}>
      {/* Top Section */}
      <div className='d-flex w-100 justify-content-between' style={{ height: '15%', borderBottom: '1px solid var(--textGrey)' }}>
        <div className='d-flex justify-content-center align-items-center' style={{  width: '30%' }}>
          <button className='h-100 w-100 popout-close-button' onClick={onClose}>X</button>
        </div>
        <div className='h-100 d-flex' style={{ width: '30%' }}>
          <img className='img-fluid' src={Logo} style={{ padding: '30% 20% 30% 20%' }} alt='Logo' />
        </div>
      </div>

      {/* Middle Section */}
      <div className='d-flex w-100 h-100 align-items-center' style={{ paddingBottom: '30%' }}>
        <ul className='popout-list' style={{listStyle: 'none'}}>

          <li className='popout-list-item'>
            <a className='popout-link' href='#section1'>
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
        <div className='d-flex w-100 h-100'style={{padding: '3rem 3rem 3rem 2rem'}}>
          <img className='img-fluid' src={GithubLogo} style={{marginRight: '1rem'}}/>
          <img className='img-fluid' src={LinkedInLogo} />
        </div>
      </div>

    </div>
  );
}

export default PopoutNavbar;

