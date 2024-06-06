import { useState } from 'react'
import './css/App.css'
import './css/index.css'
import Header from './components/Header.jsx'
import SplashPage from './components/SplashPage.jsx'
import AboutPage from './components/AboutPage.jsx'
import ProjectsPage from './components/ProjectsPage.jsx'

function App() {


  return (
      <div>
        <Header/>
        <div className='main-content'>
          <SplashPage/>
          <AboutPage/>
          <ProjectsPage/>
        </div>
        
      </div>
  )
}

export default App
