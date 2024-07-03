import '../css/site.css'
import '../css/index.css'
import '../css/aboutPage.css'

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

              <h1 className='main-header'>Hey! I'm Sam Cole</h1>
              <h2 className='sub-header standard-bottom-padding' style={{color: 'var(--blue)', fontWeight: '600'}}>Based in the UK</h2>

              <p className='main-paragraph about-page-paragraph standard-bottom-padding'>
                I am a front-end developer specializing in the MERN stack (MongoDB, ExpressJS, ReactJS, and NodeJS), and Bootstrap. I combine creativity 
                with functionality to craft user-friendly web interfaces that captivate. Let's collaborate and bring your digital vision to life!</p>

              {/* Hidden Hexagons Section*/}
              <div className='d-flex flex-row justify-content-between standard-bottom-padding w-100 about-page-hexagon-section-small'>

                <div className='d-flex justify-content-center align-items-center' style={{position: 'relative'}}>
                  <p className='text-center about-page-hexagon-text-small-screens d-flex justify-content-center align-items-center flex-column'>
                    <span className='about-page-hexagon-larger-text-small-screens'>1+</span>
                    Years of Experience
                  </p>
                  <img className='img-fluid about-page-hexagon-image-small' src={YellowHexagon}/>
                </div>

                <div className='d-flex justify-content-center align-items-center' style={{position: 'relative'}}>
                  <p className='text-center about-page-hexagon-text-small-screens d-flex justify-content-center align-items-center flex-column'>
                    <span className='about-page-hexagon-larger-text-small-screens'>2</span>
                    Active Projects
                  </p>
                  <img className='img-fluid about-page-hexagon-image-small' src={GreenHexagon}/>
                </div>

                <div className='d-flex justify-content-center align-items-center' style={{position: 'relative'}}>
                  <p className='text-center about-page-hexagon-text-small-screens d-flex justify-content-center align-items-center flex-column'>
                    <span className='about-page-hexagon-larger-text-small-screens'>2+</span>
                    Years of Experience
                  </p>
                  <img className='img-fluid about-page-hexagon-image-small' src={BlueHexagon}/>
                </div>

              </div>

              <button className='black-white-button-styling about-page-button' >Download My Resume</button>
            </div>

          </div>

          {/* Right Side Stats */}
          <div className='col-lg-6 col-md-12 col-sm-12 about-page-image-column about-page-hexagon-section'>
            <div className='w-100 h-75 d-flex justify-content-center flex-column align-items-center'>
              <div className='d-flex justify-content-center align-items-center w-100 h-50'>

                <div className='d-flex justify-content-center align-items-center w-50 h-100 about-page-hexagon-image-container'>
                  <p className='text-center about-page-hexagon-text d-flex justify-content-center align-items-center flex-column'>
                    <span className='about-page-hexagon-larger-text'>1+</span>
                    Year's of Experience
                  </p>
                  <img className='img-fluid h-100' src={YellowHexagon} alt="Yellow Hexagon" />
                </div>

              </div>
              <div className='d-flex w-100 h-50'>

                <div className='d-flex justify-content-center align-items-center w-50 h-100 about-page-hexagon-image-container' style={{ marginRight: '1.5rem' }}>   
                  <p className='text-center about-page-hexagon-text d-flex justify-content-center align-items-center flex-column'>
                    <span className='about-page-hexagon-larger-text'>2</span>
                    Active Projects
                  </p>

                  <img className='img-fluid h-100' src={GreenHexagon} alt="Green Hexagon"/>
                </div>

                <div className='d-flex justify-content-center align-items-center w-50 h-100 about-page-hexagon-image-container'>
                  <p className='text-center about-page-hexagon-text d-flex justify-content-center align-items-center flex-column'>
                    <span className='about-page-hexagon-larger-text'>2+</span>
                    Year's of Experience
                  </p>

                  <img className='img-fluid h-100' src={BlueHexagon} alt="Blue Hexagon" />
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