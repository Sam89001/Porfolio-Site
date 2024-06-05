import '../css/site.css'
import '../css/splashPage.css'
import '../css/index.css'

import Logo from '../assets/Face Image 1.jpg'
import GreenCircle from '../assets/Green Circle.png'
import BlueRectangle from '../assets/Blue Rectangle.png'

function SplashPage() {
 return(
  <div className='d-flex justify-content-center splash-page-component-container'>
    <div className='component-content-container splash-page-content' >

      <div className='row'>
        
        {/* Left Side Text + Buttons */}
        <div className='col-md-6 col-sm-12 d-flex flex-column'>

          {/* Main Title*/}
          <div className='d-flex justify-content-between align-items-end'>
            
            <h1 className='splash-page-main-header'>
              <span>Web</span><br/>
              <span>Developer</span>
            </h1>
            

            <div className='d-flex splash-page-social-media-image-container'>
              <div className='splash-page-social-media-image'>
                <img className='img-fluid' src={GreenCircle} alt='Logo'/>
              </div>

              <div className='splash-page-social-media-image'>
                <img className='img-fluid' src={GreenCircle} alt='Logo'/>
              </div>
            </div>
          </div>

          {/* Sub Title + Buttons */}
          <h2 className='splash-page-sub-header'>
             Hi! My name is 
             <span style={{fontWeight: '400'}}> Samuel Cole </span>
             , I'm a front-end developer based in the UK. Nice to meet you!
          </h2>

          <div className='d-flex flex-row'>
            <button className='black-white-button-styling splash-page-button' style={{marginRight: '20px'}}>Let's Work Together</button>
            <button className='black-white-button-styling splash-page-button'>View My Work</button>
          </div>

          {/* Tech Stack */}
          <div className='d-flex flex-column align-items-end' style={{marginTop: 'auto'}}>
            <div>
              <h3>Tech Stack</h3>
            </div>
            {/* Your tech stack content goes here */}
          </div>

        </div>

        {/* Right Side Image */}
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