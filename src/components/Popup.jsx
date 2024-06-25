import React from 'react';
import '../css/popup.css';

import Template from '../assets/Dnd Creator 2.webp';

function Popup({ isVisible, onClose, PopupProjectName, PopupProjectSubHeading, PopupProjectText }) {
  return (
    <div className={`popup ${isVisible ? 'show' : 'hide'} h-100 w-100`}>
      <div className='popup-style'>

        <div className='w-100 d-flex justify-content-end' style={{ height: '7%', borderRadius: '20px 20px 0 0' }}>
          <button className='h-100' style={{ backgroundColor: 'lightblue', border: 'none', borderRadius: '0px 20px 0px 0px' }} onClick={onClose}>Close</button>
        </div>

        <section className='d-flex justify-content-center popup-content'>

          <div className='row w-100'>

            <div className='col-sm-12 col-md-12 col-lg-12 col-xl-8 d-flex justify-content-center align-items-center'>
              <img className='popup-image img-fluid' src={Template} alt="Template"/>
            </div>

            <div className='col-sm-12 col-md-12 col-lg-12 col-xl-4 d-flex flex-column'>
              <h1 className='popup-header'>{PopupProjectName}</h1>
              <h2 className='popup-subheader'>Test Subheader{PopupProjectSubHeading}</h2>

              <div className='d-flex flex-column flex-grow-1'>
                <p className='popup-paragraph'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque 
                  ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia 
                  voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi 
                  tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem 
                  ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea 
                  voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?{PopupProjectText}</p>
              </div>

              <div className='w-100 d-flex flex-row justify-content-end align-items-end mt-auto'>
                <button className='btn btn-secondary mx-2'>Back</button>
                <button className='btn btn-primary mx-2'>Next</button>
              </div>

            </div>
            
          </div>

        </section>
      </div>
    </div>
  );
}

export default Popup;

