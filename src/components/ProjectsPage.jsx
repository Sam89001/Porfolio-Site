import '../css/site.css'
import '../css/index.css'
import '../css/projectsPage.css'
import '../css/padding.css'

import GreenCircle from '../assets/Green Circle.png'
import RedSquiggle from '../assets/Red Squiggle.png'
import GreenSquiggle from '../assets/Green Squiggle.png'
import GreenSquigglePadding from '../assets/Green Squiggle Padding.webp'
import BlueSquiggle from '../assets/Blue Squiggle.webp'
import YellowSquiggle from '../assets/Yellow Squiggle.webp'

import DndCreatorImage from '../assets/Dnd Creator.png'
import DndCreatorImage2 from '../assets/Dnd Creator 2.png'
import DndCreatorImage3 from '../assets/Dnd Creator 3.png'
import PortfolioImage from '../assets/Portfolio 1.png'
import PortfolioImage2 from '../assets/Portfolio 2.png'
import PortfolioImage3 from '../assets/Portfolio 3.png'

import HtmlLogo from '../assets/html-5-logo.svg'
import CssLogo from '../assets/css-logo.svg'
import BootstrapLogo from '../assets/bootstrap-logo.svg'
import JavascriptLogo from '../assets/javascript-logo.svg'
import ReactLogo from '../assets/react-logo.svg'
import NodeLogo from '../assets/nodejs-logo.svg'
import MongoLogo from '../assets/mongodb-logo.svg'
import ViteLogo from '../assets/vitejs-logo.svg'

const DndCreatorImages = [DndCreatorImage, DndCreatorImage2, DndCreatorImage3]
const DndCreatorTechStack = [HtmlLogo, CssLogo, BootstrapLogo, JavascriptLogo, ReactLogo, NodeLogo, MongoLogo]
const PortfolioTechStack = [HtmlLogo, CssLogo, BootstrapLogo, JavascriptLogo, ViteLogo, ReactLogo ]
const PortfolioImages = [PortfolioImage, PortfolioImage2, PortfolioImage3]

import Project from '../components/Project.jsx'

function ProjectsPage() {
  return (
    <section>
      <div className='d-flex justify-content-center projects-page-component-container'>
        <div className='component-content-container projects-page-content flex-column'>

          <h1 className='main-header'>Portfolio</h1>
          <p className='main-paragraph about-page-paragraph double-standard-bottom-padding'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation 
          ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
      </div>

      {/* Dnd Creator*/}

      <Project ProjectImage={DndCreatorImages} TechStackImages={DndCreatorTechStack} ProjectTitle={'Dnd Creator'} 
      BackgroundColour={'var(--backgroundBlue)'} Logo={GreenCircle}
      ProjectDescription={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`}/>
      
      {/* Image & Padding*/}

      <div className='d-flex justify-content-end'>
        <img className='img-fluid projects-page-squiggle' src={RedSquiggle} ></img>
      </div>

      {/* Portfolio*/}

      <Project ProjectImage={PortfolioImages} TechStackImages={PortfolioTechStack} ProjectTitle={'Portfolio'} 
      BackgroundColour={'var(--backgroundBlue)'} Logo={GreenCircle}
      ProjectDescription=
      {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`}/>

      {/* Image & Padding*/}

      <div className='d-flex justify-content-start'>
        <img className='img-fluid projects-page-squiggle' src={GreenSquiggle}></img>
      </div>

      {/* Random Project*/}

      <Project ProjectImage={DndCreatorImages} TechStackImages={DndCreatorTechStack} ProjectTitle={'Portfolio'}
       BackgroundColour={'var(--backgroundBlue)'} Logo={GreenCircle}
      ProjectDescription=
      {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`}/>

      {/* Image & Padding*/}

      <div className='d-flex justify-content-between' style={{width: '100%'}}>
        <img className='img-fluid projects-page-squiggle' src={BlueSquiggle} style={{transform: 'rotate(180deg)', marginLeft: '10em'}}/>
        <img className='img-fluid projects-page-squiggle hide-squiggles' src={YellowSquiggle} />
      </div>

      <div className='d-flex flex-column' style={{ position: 'relative', height: '7.5rem' }}>
        <img className='img-fluid hide-squiggles' src={GreenSquigglePadding} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', height: '100%', zIndex: 2 }} />
        <div style={{ height: '71%' }}></div>
        <div style={{ height: '29%', backgroundColor: 'var(--backgroundBlue)' }}></div>
      </div>


    </section>
  )
}

export default ProjectsPage