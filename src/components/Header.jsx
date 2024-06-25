import React, { useState } from 'react';
import '../css/navbar.css';
import Logo from '../assets/SC.png';
import HamburgerMenu from '../assets/Hamburger Menu.webp';
import PopoutNavbar from './PopoutNavbar';

import DownloadableFile from '../assets/Samuel Cole Resume.pdf'

function Header() {
  const [isPopoutOpen, setIsPopoutOpen] = useState(false);

  const togglePopout = () => {
    setIsPopoutOpen(!isPopoutOpen);
  };

  const handleDownload = async () => {
    const url = DownloadableFile; 
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = blobUrl;
      link.setAttribute('download', 'Samuel Cole Resume.pdf');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error fetching or downloading file:', error);
    }
  };
    
  return (
    <div className='d-flex justify-content-center align-items-center w-100 navbar-container'>
      <div className='d-flex justify-content-center align-items-center w-100 h-100 navbar-content'>
        <div className='d-flex w-50 h-100 justify-content-start align-items-center'>
          <img className='img-fluid navbar-logo' src={Logo} alt='Logo' style={{ height: '80%' }} />
          <img
            className='img-fluid navbar-hamburger-menu'
            src={HamburgerMenu}
            alt='Menu'
            style={{ height: '80%' }}
            onClick={togglePopout} 
          />

          <nav className='w-100 navbar-links'>
            <ul className='nav'>
              <li className='navbar-item'>
                <a className='navbar-link' href='#section1'>
                  Home
                </a>
              </li>
              <li className='navbar-item'>
                <a className='navbar-link' href='#section2'>
                  About
                </a>
              </li>
              <li className='navbar-item'>
                <a className='navbar-link' href='#section3'>
                  Projects
                </a>
              </li>
              <li className='navbar-item'>
                <a className='navbar-link' href='#section4'>
                  Contact Me
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className='d-flex w-50 justify-content-end align-items-center'>
          <button className='navbar-button black-white-button-styling' onClick={handleDownload}>Download Resume</button>
        </div>
      </div>

      
      <PopoutNavbar isVisible={isPopoutOpen} onClose={togglePopout} />
    </div>
  );
}

export default Header;
