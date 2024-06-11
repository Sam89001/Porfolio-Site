import { useState } from 'react'
import './css/index.css'
import Header from './components/Header.jsx'
import SplashPage from './components/SplashPage.jsx'
import AboutPage from './components/AboutPage.jsx'
import Padding from './components/Padding.jsx'
import ProjectsPage from './components/ProjectsPage.jsx'
import ContactPage from './components/ContactPage.jsx'


function App() {


  return (
      <div>
        <Header/>
        <div className='main-content'>
          <SplashPage/>
          <AboutPage/>
          <Padding/>
          <ProjectsPage/>
          <ContactPage/>
        </div>
        
      </div>
  )
}

export default App
