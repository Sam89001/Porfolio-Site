import '../css/site.css'
import '../css/index.css'
import '../css/projectsPage.css'

import GreenCircle from '../assets/Green Circle.png'
import DndCreatorImage from '../assets/Dnd Creator.png'

function ProjectsPage() {
  return (
    <div>
      <div className='d-flex justify-content-center projects-page-component-container'>
        <div className='component-content-container projects-page-content flex-column'>

          <h1 className='main-header'>Portfolio</h1>
          <p className='main-paragraph about-page-paragraph standard-bottom-padding'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation 
          ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
      </div>

      <div className='d-flex justify-content-center projects-page-component-container' style={{backgroundColor: 'var(--backgroundBlue)'}}>
        <div className='component-content-container projects-page-content ' style={{backgroundColor: 'var(--backgroundBlue)'}}>
          <div className='row h-100'>

            {/* Hideable Title*/}
            <div className='d-flex flex-row justify-content-between' style={{width: '100%'}}>

              <h1 className='projects-page-project-title projects-page-hideable-content'>Dnd Creator</h1>

              <div className='d-flex projects-page-social-media-image-container '>
                <div className='projects-page-social-media-image projects-page-hideable-content'>
                  <img className='img-fluid' src={GreenCircle} alt='Logo'/>
                </div>

                <div className='projects-page-social-media-image projects-page-hideable-content'>
                  <img className='img-fluid' src={GreenCircle} alt='Logo'/>
                </div>
              </div>

            </div>

            {/* Content */}
            <div className='col-lg-6 col-md-12 col-sm-12' style={{padding: '1em'}}> 
              <div className='d-flex' > 
                <img className='img-fluid' src={DndCreatorImage}></img>
              </div>
            </div>    

            <div className='col-lg-6 col-md-12 col-sm-12 d-flex flex-column' style={{padding: '1em'}}> 
              <h2 className='projects-page-small-project-title'>Test</h2>

              <p className='main-paragraph about-page-paragraph standard-bottom-padding'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation 
              ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>

              <div className='projects-page-sub-header' style={{marginTop: 'auto'}}>
                <h3>Tech Stack</h3>
              </div>

              <div className='d-flex flex-row projects-page-tech-stack-images-container'>
                <img className='img-fluid projects-page-tech-stack-images' src={GreenCircle} alt='Logo'/>
                <img className='img-fluid projects-page-tech-stack-images' src={GreenCircle} alt='Logo'/>
                <img className='img-fluid projects-page-tech-stack-images' src={GreenCircle} alt='Logo'/>
                <img className='img-fluid projects-page-tech-stack-images' src={GreenCircle} alt='Logo'/>
                <img className='img-fluid projects-page-tech-stack-images' src={GreenCircle} alt='Logo'/>
                <img className='img-fluid projects-page-tech-stack-images' src={GreenCircle} alt='Logo'/>

              </div>

            </div>   

          </div>   
        </div>
      </div>

      
    </div>
  )
}

export default ProjectsPage