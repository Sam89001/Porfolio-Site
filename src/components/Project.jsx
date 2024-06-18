import '../css/site.css'
import '../css/index.css'
import '../css/projectsPage.css'

import GreenCircle from '../assets/Green Circle.png'
import LeftArrow from '../assets/Arrow Icon Left.svg'
import RightArrow from '../assets/Arrow Icon Right.svg'

import React, { useState } from 'react';


function Project({ ProjectTitle, ProjectImage, Logo, TechStackImages, BackgroundColour, ProjectDescription }) {

  //Tracks state based on num of items in array
  //Clicking arrow decreases or increases index
  //Index num indicates which image to point to
  const [index, setIndex] = useState(0)

  function NextImage() {
    setIndex((prevIndex) => (prevIndex + 1) % ProjectImage.length);
  }

  function PreviousImage() {
    setIndex((prevIndex) => (prevIndex - 1 + ProjectImage.length) % ProjectImage.length);
  }

  return (
    <div className='d-flex justify-content-center projects-page-component-container' style={{backgroundColor: BackgroundColour, paddingBottom: '2em'}}>
      <div className='component-content-container projects-page-content ' style={{backgroundColor: BackgroundColour}}>
            <div className='row h-100'>

              {/* Hideable Title*/}
              <div className='d-flex flex-row justify-content-between' style={{width: '100%'}}>

                <h1 className='projects-page-project-title projects-page-hideable-content'>{ProjectTitle}</h1>

                <div className='d-flex projects-page-social-media-image-container '>
                  <div className='projects-page-social-media-image projects-page-hideable-content'>
                    <img className='img-fluid' src={Logo} alt='Logo'/>
                  </div>

                  <div className='projects-page-social-media-image projects-page-hideable-content'>
                    <img className='img-fluid' src={Logo} alt='Logo'/>
                  </div>
                </div>

              </div>

              {/* Image */}
              <div className='col-lg-6 col-md-12 col-sm-12' > 
                <div style={{height: '100%'}}>
                  <div className='d-flex flex-row' style={{width: '100%', position: 'relative'}}>

                    <div className='project-navarrow-container' onClick={PreviousImage} style={{left: 0}}>
                      <img className='img-fluid' src={LeftArrow}/>
                    </div>

                    <img className='img-fluid' src={ProjectImage[index]} alt="Project Image" style={{cursor: 'pointer'}}/>

                    <div className='project-navarrow-container' onClick={NextImage} style={{right: 0}}>
                      <img className='img-fluid' src={RightArrow}/>
                    </div>

                  </div>
                </div>
              </div>    

              {/* Text */}
              <div className='col-lg-6 col-md-12 col-sm-12 d-flex flex-column'> 
                <h2 className='projects-page-small-project-title'>{ProjectTitle}</h2>

                <p className='project-page-project-paragraph standard-bottom-padding'>{ProjectDescription}</p>

                <div className='projects-page-sub-header' style={{marginTop: 'auto'}}>
                  <h3>Tech Stack</h3>
                </div>

                <div className='d-flex flex-row projects-page-tech-stack-images-container'>
                  {TechStackImages.map((url, index) => (
                    <img className='img-fluid projects-page-tech-stack-images' key={index} src={url} alt={`Logo ${index + 1}`} />
                  ))}
                </div>

              </div>   

            </div>   
      </div>
    </div>
    )
}

export default Project