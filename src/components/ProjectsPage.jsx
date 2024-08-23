import '../css/site.css'
import '../css/index.css'
import '../css/projectsPage.css'
import '../css/padding.css'

import intersectionObserver from '../javascript/intersectionObserver.jsx'
import GreenSquiggle from '../assets/Green Squiggle.png'


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

  /*
  {
    image: HyperlinkLogo,
    url: 'https://dndcreator.netlify.app'
  }
  */
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
  const options = {
    threshold: 0.1, // Adjust this value based on when you want the fade-in effect to trigger
  };

  const titleRef = intersectionObserver(options);
  const portfolioRef = intersectionObserver(options);
  const dndCreatorRef = intersectionObserver(options);

  return (
    <section style={{backgroundColor: 'var(--backgroundBlue)'}}>

      <div className='d-flex justify-content-center projects-page-component-container'>
        <div className='component-content-container projects-page-content flex-column' ref={titleRef}>

          <h1 className='main-header'>Portfolio</h1>
          <p className='main-paragraph about-page-paragraph double-standard-bottom-padding'>
            My coding projects showcase my passion and skills in web development and software creation. Using the MERN stack, 
            I've built dynamic and responsive web applications that demonstrate my proficiency in frontend technologies like React 
            and backend frameworks such as Node.js and Express. Explore how I've integrated MongoDB for robust database management, 
            delivering functional and user-friendly solutions tailored to various project needs. </p>
        </div>
      </div>

      {/* Dnd Creator */}
      <div ref={dndCreatorRef}>
        <Project 
          ProjectImage={DndCreatorImages} 
          TechStackImages={DndCreatorTechStack} 
          ProjectTitle={'Dnd Creator'} 
          BackgroundColour={'var(--backgroundBlue)'} 
          Logo={DndCreatorLinks}
          ProjectDescription={`Dnd Creator is an SPA CRUD tool that allows users to play and host sessions with character sheets created in Dnd Creator. 
          It features user accounts encrypted in a MongoDB database with bcrypt and JWT authentication for user session data, connected to a RESTful
          API with a NodeJS back-end to perform CRUD requests. For the front-end, it has a draggable grid system where the grid can be resized and 
          adjusted to fit pre-set or user-loaded images. Continually, DndCreator has other helpful tools, such as a calculator and dice roller, 
          that save the user's roll history.`}
        />
      </div>

      {/* Image & Padding */}
      <div className='d-flex justify-content-start'>
        <img className='img-fluid projects-page-squiggle' src={GreenSquiggle}></img>
      </div>

      {/* Portfolio */}
      <div ref={portfolioRef}>
        <Project 
          ProjectImage={PortfolioImages} 
          TechStackImages={PortfolioTechStack} 
          ProjectTitle={'Portfolio'} 
          BackgroundColour={'var(--backgroundBlue)'} 
          Logo={PortfolioLinks}
          ProjectDescription={`My portfolio website! Designed in Figma and run with Vite, my portfolio is a fully dynamic SPA designed for efficiency. 
          Images are optimised in WEBP or SVG format for fast loading; Vite runs quickly and efficiently; Bootstrap seamlessly adjusts 
          the SPA to mobile and tablet screen sizes; and EmailJS allows users to easily contact me.`}
        />
      </div>
    </section>
  );
}

export default ProjectsPage;
