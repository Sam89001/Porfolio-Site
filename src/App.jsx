import { useState } from 'react'
import './css/index.css'
import Header from './components/Header.jsx'
import SplashPage from './components/SplashPage.jsx'
import AboutPage from './components/AboutPage.jsx'
import Padding from './components/Padding.jsx'
import SplashPagePadding from './components/SplashPagePadding.jsx'
import ProjectsPage from './components/ProjectsPage.jsx'
import ContactPage from './components/ContactPage.jsx'
import Footer from './components/Footer.jsx'


function App() {


  return (
      <div>
        <Header/>
        <div className='main-content'>
          <SplashPage/>
          <SplashPagePadding/>
          <AboutPage/>
          <Padding/>
          <ProjectsPage/>
          <ContactPage/>
        </div>
        <Footer/>
        
      </div>
  )
}

export default App
