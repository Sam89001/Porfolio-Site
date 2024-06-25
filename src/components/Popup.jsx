import React from 'react';
import '../css/popup.css';

import Template from '../assets/Dnd Creator 2.png';

function Popup({ isVisible, onClose, PopupProjectName, PopupProjectSubHeading, PopupProjectText }) {
  return (
    <div className={`popup ${isVisible ? 'show' : 'hide'} h-100 w-100`}>
      <div className='popup-style'>

        <div className='w-100 d-flex justify-content-end' style={{ backgroundColor: 'red', height: '7%', borderRadius: '20px 20px 0 0' }}>
          <button className='h-100' style={{ backgroundColor: 'lightblue', border: 'none', borderRadius: '0px 20px 0px 0px' }} onClick={onClose}>Close</button>
        </div>

        <section className='d-flex justify-content-center align-items-center' style={{ height: '93%', padding: '1em' }}>

          <div className='row w-100 h-100'>
            <div className='col-sm-12 col-md-8 d-flex justify-content-center align-items-center'>
              <img className='img-fluid' src={Template} alt="Template"/>
            </div>
            <div className='col-sm-12 col-md-4 d-flex flex-column'>
              <h1 className='popup-header'>{PopupProjectName}</h1>
              <h2 className='popup-subheader'>{PopupProjectSubHeading}</h2>
              <p>{PopupProjectText}</p>
            </div>
          </div>

        </section>
      </div>
    </div>
  );
}

export default Popup;

