import React from 'react';
import '../css/navbar.css';
import Logo from '../assets/SC.png';

function PopoutNavbar({ isVisible, onClose }) {
  return (
    <div className={`d-flex w-75 h-100 flex-column popout-navbar ${isVisible ? 'show' : 'hide'}`}>
      {/* Top Section */}
      <div className='d-flex w-100 justify-content-between' style={{ backgroundColor: 'green', height: '15%' }}>
        <div className='d-flex justify-content-center align-items-center' style={{ backgroundColor: 'purple', width: '30%' }}>
          <button className='h-100 w-100 popout-close-button' onClick={onClose}></button>
        </div>
        <div className='h-100 d-flex' style={{ backgroundColor: 'purple', width: '30%' }}>
          <img className='img-fluid' src={Logo} style={{ padding: '30% 20% 30% 20%' }} alt='Logo' />
        </div>
      </div>

      {/* Middle Section */}
      <div className='d-flex w-100 h-100 align-items-center' style={{ backgroundColor: 'blue', paddingBottom: '80%' }}>
        <ul>
          <li>
            <a className='popout-link'>
              <h2 className='popout-link-text'>Home</h2>
            </a>
          </li>
          <li>
            <a className='popout-link'>
              <h2 className='popout-link-text'>About</h2>
            </a>
          </li>
          <li>
            <a className='popout-link'>
              <h2 className='popout-link-text'>Projects</h2>
            </a>
          </li>
          <li>
            <a className='popout-link'>
              <h2 className='popout-link-text'>Contact</h2>
            </a>
          </li>
        </ul>
      </div>

      {/* Bottom Section */}
      <div className='d-flex w-100 align-items-center' style={{ backgroundColor: 'yellow', height: '15%', marginTop: 'auto' }}></div>
    </div>
  );
}

export default PopoutNavbar;

