import '../css/site.css'
import '../css/index.css'
import '../css/aboutPage.css'

import ProfileImage from '../assets/Face Image With Shapes 2.png'

function AboutPage() {
  return (
    <div className='d-flex justify-content-center about-page-component-container'>
      <div className='component-content-container about-page-content'>

        <div className='row h-100' >
          {/* Left Side Text + Buttons */}
          <div className='col-md-6 col-sm-12 '>

            <div className='d-flex flex-column' style={{width: '80%'}}>

              <h1 className='main-header'>Hey! I'm Sam</h1>

              <p className='main-paragraph about-page-paragraph standard-bottom-padding'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
              sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            
              <div className='d-flex flex-row justify-content-between standard-bottom-padding'>
                <div className='d-flex justify-content-center flex-column'>
                  <h2 className='text-center about-page-stats-larger'>1+</h2>
                  <h2 className='text-center about-page-stats-smaller'>Years of <br/> experience</h2>
                </div>

                <div className='d-flex justify-content-center flex-column'>
                  <h2 className='text-center about-page-stats-larger'>2</h2>
                  <h2 className='text-center about-page-stats-smaller'>Active <br/> Projects</h2>
                </div>

                <div className='d-flex justify-content-center flex-column'>
                  <h2 className='text-center about-page-stats-larger'>1+</h2>
                  <h2 className='text-center about-page-stats-smaller'>Years of <br/> experience</h2>
                </div>

              </div>

              <button className='black-white-button-styling about-page-button' >Download My Resume</button>
            </div>

          
          
          </div>

          {/* Right Side Image */}
          <div className='col-md-6 col-sm-12 d-flex flex-column'>
            <div className='d-flex about-page-profile-image-container justify-content-center '>
              <img className='img-fluid' alt={'Test'} src={ProfileImage}/>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default AboutPage