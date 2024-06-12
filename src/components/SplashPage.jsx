import '../css/site.css'
import '../css/splashPage.css'
import '../css/index.css'
import '../css/padding.css'

import ProfileImage from '../assets/Face Image With Shapes.webp'
import GithubLogo from '../assets/github-logo.svg'
import LinkedInLogo from '../assets/linkedin-logo.svg'
import HtmlLogo from '../assets/html-5-logo.svg'
import CssLogo from '../assets/css-logo.svg'
import BootstrapLogo from '../assets/bootstrap-logo.svg'
import JavascriptLogo from '../assets/javascript-logo.svg'
import ReactLogo from '../assets/react-logo.svg'
import NodeLogo from '../assets/nodejs-logo.svg'
import MongoLogo from '../assets/mongodb-logo.svg'

import React, { useEffect } from 'react';

function SplashPage() {

  useEffect(() => {
    const profileImage = document.querySelector('.splash-page-profile-image-container img');
    const mainHeader = document.querySelector('.splash-page-main-header');
    const subHeader = document.querySelector('.splash-page-paragraph-header');
    const button1 = document.querySelector('.splash-page-work-together-button');
    const button2 = document.querySelector('.splash-page-view-work-button');
    const techStack = document.querySelector('.splash-page-tech-stack-images-container');
    
    
    const addAnimationWithDelay = (element, animationClass, delay) => {
      setTimeout(() => {
        element.classList.add('fade-in', animationClass);
      }, delay);
    };
    
    const addInitialPosition = (element, initialClass) => {
      element.classList.add(initialClass);
    };
    
    addInitialPosition(mainHeader, 'initial-position');
    addInitialPosition(subHeader, 'initial-position');
    addInitialPosition(button1, 'initial-position');
    addInitialPosition(button2, 'initial-position');
    addAnimationWithDelay(mainHeader, 'slide-right', 0);
    addAnimationWithDelay(subHeader, 'slide-right', 100); 
    addAnimationWithDelay(button1, 'slide-right', 200); 
    addAnimationWithDelay(button2, 'slide-right', 300); 
    addAnimationWithDelay(profileImage, 'slide-left fade-in', 0); // Adjusted delay for profile image
  }, []);

  

 return(
  <section className='d-flex justify-content-center splash-page-component-container'>
    <div className='component-content-container splash-page-content' >

      <div className='row h-100' >
        
        {/* Left Side Text + Buttons */}
        <div className='col-lg-6 col-md-12 d-flex flex-column custom-col'>

          {/* Main Title*/}
          <div className='d-flex justify-content-between align-items-end'>
            
            <h1 className='splash-page-main-header' >
              <span>Web</span><br/>
              <span>Developer</span>
            </h1>
            

            <div className='d-flex splash-page-social-media-image-container'>

              <div className='splash-page-social-media-image'>
                <a href="https://github.com/Sam89001" target="_blank" rel="noopener noreferrer">
                  <img className='img-fluid' src={GithubLogo} alt='GitHub Logo' />
                </a>
              </div>

              <div className='splash-page-social-media-image'>
                <a href="https://www.linkedin.com/in/samuel-cole-586582229/" target="_blank" rel="noopener noreferrer">
                  <img className='img-fluid' src={LinkedInLogo} alt='Logo'/>
                </a>
              </div>

            </div>
          </div>

          {/* Sub Title + Buttons */}
          <h2 className='splash-page-paragraph-header double-standard-bottom-padding'>
             Hi! My name is 
             <span style={{fontWeight: '600'}}> Samuel Cole </span>
             , I'm a front-end developer based in the UK. Nice to meet you!
          </h2>

          <div className='d-flex flex-row'>
            <a className='splash-page-work-together-button black-white-button-styling splash-page-button' 
            style={{marginRight: '20px'}} href="#section4">Let's Work Together</a>

            <a className='splash-page-view-work-button black-white-button-styling splash-page-button'
            href="#section3">View My Work</a>
          </div>

          {/* Tech Stack */}
          <div className='d-flex flex-column' style={{marginTop: 'auto'}}>
            <h3 className='splash-page-sub-header'>Tech Stack</h3>

            <div className='d-flex flex-row splash-page-tech-stack-images-container'>
              <img className='img-fluid splash-page-tech-stack-images' src={HtmlLogo} alt='Logo'/>
              <img className='img-fluid splash-page-tech-stack-images' src={CssLogo} alt='Logo'/>
              <img className='img-fluid splash-page-tech-stack-images' src={BootstrapLogo} alt='Logo'/>
              <img className='img-fluid splash-page-tech-stack-images' src={JavascriptLogo} alt='Logo'/>
              <img className='img-fluid splash-page-tech-stack-images' src={ReactLogo} alt='Logo'/>
              <img className='img-fluid splash-page-tech-stack-images' src={NodeLogo} alt='Logo'/>
              <img className='img-fluid splash-page-tech-stack-images' src={MongoLogo} alt='Logo'/>
            </div>
          </div>

        </div>

        {/* Right Side Image */}
        <div className='col-6 splash-page-image-column' >
          <div className='d-flex splash-page-profile-image-container justify-content-center splash-page-image-column'>
            <img className='img-fluid splash-page-image-column' alt={'Test'} src={ProfileImage}/>
          </div>
        </div>

      </div>


    </div>
  </section>
 )
}

export default SplashPage