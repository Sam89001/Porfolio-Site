import '../css/site.css'
import '../css/splashPage.css'
import '../css/index.css'

import Logo from '../assets/Face Image 1.jpg'
import ProfileImage from '../assets/Face Image With Shapes.png'
import GreenCircle from '../assets/Green Circle.png'
import BlueRectangle from '../assets/Blue Rectangle.png'

function SplashPage() {
 return(
  <div className='d-flex justify-content-center splash-page-component-container'>
    <div className='component-content-container splash-page-content' >

      <div className='row h-100' >
        
        {/* Left Side Text + Buttons */}
        <div className='col-md-6 col-sm-12 d-flex flex-column'>

          {/* Main Title*/}
          <div className='d-flex justify-content-between align-items-end'>
            
            <h1 className='splash-page-main-header'>
              <span>Web</span><br/>
              <span>Developer</span>
            </h1>
            

            <div className='d-flex splash-page-social-media-image-container '>
              <div className='splash-page-social-media-image'>
                <img className='img-fluid' src={GreenCircle} alt='Logo'/>
              </div>

              <div className='splash-page-social-media-image'>
                <img className='img-fluid' src={GreenCircle} alt='Logo'/>
              </div>
            </div>
          </div>

          {/* Sub Title + Buttons */}
          <h2 className='splash-page-paragraph-header'>
             Hi! My name is 
             <span style={{fontWeight: '600'}}> Samuel Cole </span>
             , I'm a front-end developer based in the UK. Nice to meet you!
          </h2>

          <div className='d-flex flex-row'>
            <button className='black-white-button-styling splash-page-button' style={{marginRight: '20px'}}>Let's Work Together</button>
            <button className='black-white-button-styling splash-page-button'>View My Work</button>
          </div>

          {/* Tech Stack */}
          <div className='d-flex flex-column' style={{marginTop: 'auto'}}>
            <h3 className='splash-page-sub-header'>Tech Stack</h3>

            <div className='d-flex flex-row splash-page-tech-stack-images-container'>
              <img className='img-fluid splash-page-tech-stack-images' src={GreenCircle} alt='Logo'/>
              <img className='img-fluid splash-page-tech-stack-images' src={GreenCircle} alt='Logo'/>
              <img className='img-fluid splash-page-tech-stack-images' src={GreenCircle} alt='Logo'/>
              <img className='img-fluid splash-page-tech-stack-images' src={GreenCircle} alt='Logo'/>
              <img className='img-fluid splash-page-tech-stack-images' src={GreenCircle} alt='Logo'/>
              <img className='img-fluid splash-page-tech-stack-images' src={GreenCircle} alt='Logo'/>

            </div>
          </div>

        </div>

        {/* Right Side Image */}
        <div className='col-md-6 col-sm-12 d-flex justify-content-center' >
          <div className='d-flex splash-page-profile-image-container justify-content-center '>
            <img className='img-fluid' alt={'Test'} src={ProfileImage}/>
          </div>
        </div>


      </div>


    </div>
  </div>
 )
}

export default SplashPage