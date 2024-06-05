import '../css/site.css'
import '../css/splashPage.css'

import Logo from '../assets/Face Image 1.jpg'
import GreenCircle from '../assets/Green Circle.png'
import BlueRectangle from '../assets/Blue Rectangle.png'

function SplashPage() {
 return(
  <div className='d-flex justify-content-center splash-page-component-container'>
    <div className='component-content-container splash-page-content' >

      <div className='row'>

        <div className='col-md-6 col-sm-12'>

          <div className='d-flex justify-content-space-between'>
            <div className='d-flex'>
              <h1 className='splash-page-main-header'>
                <span>Web</span><br/>
                <span>Developer</span>
              </h1>
            </div>

            <div className='d-flex' style={{width: '10%'}}>

              <div className='d-flex splash-page-social-media-image'>
                <img className='img-fluid ' src={GreenCircle} alt='Logo'/>
              </div>

              <div className='d-flex splash-page-social-media-image'>
                <img className='img-fluid splash-page-social-media-image' src={GreenCircle} alt='Logo'/>
              </div>
              
            </div>

          </div>
          
          <div>
            <h2>
              Hi! My name is Samuel Cole, I'm a front-end developer based in the UK. Nice to meet you!
            </h2>
          </div>

          <div>
            <button className='black-white-button-styling splash-page-button'>Let's Work Together</button>
            <button className='black-white-button-styling splash-page-button'>View My Work</button>
          </div>

          <div>
            <div>
              <h3>Tech Stack</h3>
            </div>
            <div>

            </div>
          </div>
        </div>

        <div className='col-md-6 col-sm-12 d-flex justify-content-center' style={{position: 'relative'}}>
          <div className='d-flex justify-content-center' style={{height: '60%', width: '90%', }}>

            <div className='d-flex justify-content-center splash-page-profile-image-container' style={{flex: '1'}}>
              <img className='img-fluid splash-page-profile-image' src={Logo} alt='Logo'/>
            </div>
          
            <div className='d-flex flex-column splash-page-shapes-container'> 
              <div className='d-flex' style={{height: '35%'}}>
                <img className='img-fluid h-100' src={BlueRectangle} alt='Logo' />
              </div>

              <div className='d-flex justify-content-end align-items-end' style={{height: '65%'}}>
                <img className='img-fluid h-100' src={GreenCircle} alt='Logo'/>
              </div>
            </div>

          </div>
        </div>


      </div>


    </div>
  </div>
 )
}

export default SplashPage