import '../css/site.css'
import '../css/index.css'
import '../css/projectsPage.css'

import GreenCircle from '../assets/Green Circle.png'
import DndCreatorImage from '../assets/Dnd Creator.png'
import RedSquiggle from '../assets/Red Squiggle.png'
import GreenSquiggle from '../assets/Green Squiggle.png'
import BlueSquiggle from '../assets/Blue Squiggle.webp'

import Project from '../components/Project.jsx'

function ProjectsPage() {
  return (
    <div>
      <div className='d-flex justify-content-center projects-page-component-container'>
        <div className='component-content-container projects-page-content flex-column'>

          <h1 className='main-header'>Portfolio</h1>
          <p className='main-paragraph about-page-paragraph triple-standard-bottom-padding'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation 
          ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
      </div>

      <Project ProjectImage={DndCreatorImage} Logo={GreenCircle} ProjectTitle={'Dnd Creator'} BackgroundColour={'var(--backgroundBlue)'}
      ProjectDescription=
      {'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}/>
      
      <div className='d-flex justify-content-end'>
        <img className='img-fluid projects-page-squiggle' src={RedSquiggle} ></img>
      </div>

      <Project ProjectImage={DndCreatorImage} Logo={GreenCircle} ProjectTitle={'Portfolio'} BackgroundColour={'var(--backgroundGrey)'}
      ProjectDescription=
      {'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}/>


      <div className='d-flex justify-content-start'>
        <img className='img-fluid projects-page-squiggle' src={GreenSquiggle}></img>
      </div>

      <Project ProjectImage={DndCreatorImage} Logo={GreenCircle} ProjectTitle={'Portfolio'} BackgroundColour={'var(--backgroundGrey)'}
      ProjectDescription=
      {'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}/>

      <div className='d-flex justify-content-start'>
        <img className='img-fluid projects-page-squiggle' src={BlueSquiggle} style={{transform: 'rotate(180deg)', marginLeft: '10em'}}></img>
      </div>

    </div>
  )
}

export default ProjectsPage