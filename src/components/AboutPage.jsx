import '../css/site.css'
import '../css/index.css'
import '../css/aboutPage.css'

import ProfileImage from '../assets/Face Image With Shapes 2.webp'
import BlueHexagon from '../assets/Hexagon_Blue.webp'
import YellowHexagon from '../assets/Hexagon_Yellow.webp'
import GreenHexagon from '../assets/Hexagon_Green.webp'

function AboutPage() {
  return (
    <section className='d-flex justify-content-center about-page-component-container'>
      <div className='component-content-container about-page-content'>

        <div className='row h-100' >
          {/* Left Side Text + Buttons */}
          <div className='col-lg-6 col-md-12 col-sm-12 about-page-text-column'>

            <div className='d-flex flex-column about-page-text-section-width'>

              <h1 className='main-header standard-bottom-padding'>Hey! I'm Sam</h1>

              <p className='main-paragraph about-page-paragraph standard-bottom-padding'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            
              <div className='d-flex flex-row justify-content-between standard-bottom-padding w-100'>
                <div className='d-flex' style={{position: 'relative', maxHeight: '200px'}}>
                  <img src={BlueHexagon}/>
                </div>

              </div>

              <button className='black-white-button-styling about-page-button' >Download My Resume</button>
            </div>

          </div>

          {/* Right Side Stats */}
          <div className='col-lg-6 col-md-12 col-sm-12 about-page-image-column'>

            <div className='w-100 h-100 d-flex justify-content-center flex-column align-items-center'>

              <div className='d-flex justify-content-center align-items-center w-100 h-50'>

                <div className='d-flex justify-content-center align-items-center w-50 h-100 about-page-hexagon-image-container'>
                  <p className='text-center about-page-hexagon-text d-flex justify-content-center align-items-center flex-column'>
                    <span className='about-page-hexagon-larger-text'>1+</span>
                    Years of Experience
                  </p>
                  <img className='img-fluid image-container' src={YellowHexagon} alt="Yellow Hexagon" />
                </div>

              </div>

              <div className='d-flex w-100 h-50'>

                <div className='d-flex justify-content-center align-items-center w-50 h-100 about-page-hexagon-image-container' style={{ marginRight: '1.5rem' }}>   
                  <p className='text-center about-page-hexagon-text d-flex justify-content-center align-items-center flex-column'>
                    <span className='about-page-hexagon-larger-text'>2</span>
                    Active Projects
                  </p>

                  <img className='img-fluid image-container' src={GreenHexagon} alt="Green Hexagon"/>
                </div>

                <div className='d-flex justify-content-center align-items-center w-50 h-100 about-page-hexagon-image-container'>
                  <p className='text-center about-page-hexagon-text d-flex justify-content-center align-items-center flex-column'>
                    <span className='about-page-hexagon-larger-text'>2+</span>
                    Years of Experience
                  </p>

                  <img className='img-fluid image-container' src={BlueHexagon} alt="Blue Hexagon" />
                </div>
              </div>

            </div>
            
          </div>

        </div>

      </div>
    </section>
  )
}

export default AboutPage