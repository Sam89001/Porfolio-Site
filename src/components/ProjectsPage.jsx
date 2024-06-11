import '../css/site.css'
import '../css/index.css'
import '../css/projectsPage.css'

import GreenCircle from '../assets/Green Circle.png'
import DndCreatorImage from '../assets/Dnd Creator.png'
import RedSquiggle from '../assets/Red Squiggle.webp'
import GreenSquiggle from '../assets/Green Squiggle.webp'

import Project from '../components/Project.jsx'

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

      <Project ProjectImage={DndCreatorImage} Logo={GreenCircle} ProjectTitle={'Dnd Creator'} BackgroundColour={'var(--backgroundBlue)'}
      ProjectDescription=
      {'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}/>
      
      <div className='d-flex justify-content-end'>
        <img className='img-fluid' src={RedSquiggle} style={{maxHeight: '7.5em', height: '100%'}}></img>
      </div>

      <Project ProjectImage={DndCreatorImage} Logo={GreenCircle} ProjectTitle={'Portfolio'} BackgroundColour={'var(--backgroundGrey)'}
      ProjectDescription=
      {'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}/>


      <div className='d-flex justify-content-start'>
        <img className='img-fluid' src={GreenSquiggle} style={{maxHeight: '7.5em', height: '100%'}}></img>
      </div>

      <Project ProjectImage={DndCreatorImage} Logo={GreenCircle} ProjectTitle={'Portfolio'} BackgroundColour={'var(--backgroundGrey)'}
      ProjectDescription=
      {'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}/>

      <div className='d-flex justify-content-end'>
        <img className='img-fluid' src={RedSquiggle} style={{maxHeight: '7.5em', height: '100%'}}></img>
      </div>

    </div>
  )
}

export default ProjectsPage