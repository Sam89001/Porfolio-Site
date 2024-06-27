import '../css/site.css'
import '../css/index.css'
import '../css/projectsPage.css'
import '../css/padding.css'

import RedSquiggle from '../assets/Red Squiggle.png'
import GreenSquiggle from '../assets/Green Squiggle.png'
import GreenSquigglePadding from '../assets/Green Squiggle Padding.webp'
import BlueSquiggle from '../assets/Blue Squiggle.webp'
import YellowSquiggle from '../assets/Yellow Squiggle.webp'

import DndCreatorImage from '../assets/Dnd Creator.webp'
import DndCreatorImage2 from '../assets/Dnd Creator 2.webp'
import DndCreatorImage3 from '../assets/Dnd Creator 3.webp'
import PortfolioImage from '../assets/Portfolio 1.webp'
import PortfolioImage2 from '../assets/Portfolio 2.webp'
import PortfolioImage3 from '../assets/Portfolio 3.webp'

import GithubLogo from '../assets/github-logo.svg'
import HyperlinkLogo from '../assets/hyperlink-logo.svg'

import HtmlLogo from '../assets/html-5-logo.svg'
import CssLogo from '../assets/css-logo.svg'
import BootstrapLogo from '../assets/bootstrap-logo.svg'
import JavascriptLogo from '../assets/javascript-logo.svg'
import ReactLogo from '../assets/react-logo.svg'
import NodeLogo from '../assets/nodejs-logo.svg'
import MongoLogo from '../assets/mongodb-logo.svg'
import ViteLogo from '../assets/vitejs-logo.svg'
import FigmaLogo from '../assets/figma-logo.svg'

const DndCreatorImages = [DndCreatorImage, DndCreatorImage2, DndCreatorImage3]
const DndCreatorTechStack = [FigmaLogo, HtmlLogo, CssLogo, BootstrapLogo, JavascriptLogo, ReactLogo, NodeLogo, MongoLogo]
const DndCreatorLinks = [
  {
    image: GithubLogo,
    url: 'https://github.com/Sam89001/DNDcreator'
  },
  {
    image: HyperlinkLogo,
    url: 'https://dndcreator.netlify.app'
  }
];
const PortfolioLinks = [
  {
    image: GithubLogo,
    url: 'https://github.com/Sam89001/Porfolio-Site'
  }
];

const PortfolioImages = [PortfolioImage, PortfolioImage2, PortfolioImage3]
const PortfolioTechStack = [FigmaLogo, HtmlLogo, CssLogo, BootstrapLogo, JavascriptLogo, ViteLogo, ReactLogo ]

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
      BackgroundColour={'var(--backgroundBlue)'} 
      Logo={DndCreatorLinks}
      ProjectDescription={`Dnd Creator is an SPA CRUD tool that allows users to play and host sessions with character sheets created in Dnd Creator. 
      It features user accounts encrypted in a MongoDB database with bcrypt and JWT authentication for user session data, connected to a RESTful
       API with a NodeJS back-end to perform CRUD requests. For the front-end, it has a draggable grid system where the grid can be resized and 
       adjusted to fit pre-set or user-loaded images. Continually, DndCreator has other helpful tools, such as a calculator and dice roller, 
       that save the user's roll history.`}
      />
      
      {/* Image & Padding*/}

      <div className='d-flex justify-content-end'>
        <img className='img-fluid projects-page-squiggle' src={RedSquiggle} ></img>
      </div>

      {/* Portfolio*/}

      <Project ProjectImage={PortfolioImages} TechStackImages={PortfolioTechStack} ProjectTitle={'Portfolio'} 
      BackgroundColour={'var(--backgroundBlue)'} Logo={PortfolioLinks}
      ProjectDescription=
      {`My portfolio website! Designed in Figma and run with Vite, my portfolio is a fully dynamic SPA designed for efficiency. 
      Images are optimised in WEBP or SVG format for fast loading; Vite runs quickly and efficiently; Bootstrap seamlessly adjusts 
      the SPA to mobile and tablet screen sizes; and EmailJS allows users to easily contact me.`}/>

      {/* Image & Padding*/}

      <div className='d-flex justify-content-start'>
        <img className='img-fluid projects-page-squiggle' src={GreenSquiggle}></img>
      </div>

      {/* Random Project*/}

      {/*

      <Project ProjectImage={DndCreatorImages} TechStackImages={DndCreatorTechStack} ProjectTitle={'Buggy'}
       BackgroundColour={'var(--backgroundBlue)'} Logo={DndCreatorLinks}
      ProjectDescription=
      {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`}/>

      <div className='d-flex justify-content-between' style={{width: '100%'}}>
        <img className='img-fluid projects-page-squiggle' src={BlueSquiggle} style={{transform: 'rotate(180deg)', marginLeft: '10em'}}/>
        <img className='img-fluid projects-page-squiggle hide-squiggles' src={YellowSquiggle} />
      </div>

      

      <div className='d-flex flex-column' style={{ position: 'relative', height: '7.5rem' }}>
        <img className='img-fluid hide-squiggles' src={GreenSquigglePadding} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', height: '100%', zIndex: 2 }} />
        <div style={{ height: '71%' }}></div>
        <div style={{ height: '29%', backgroundColor: 'var(--backgroundBlue)' }}></div>
      </div>

        */}
        
    </section>
  )
}

export default ProjectsPage