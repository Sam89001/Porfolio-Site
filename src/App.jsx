import { useState } from 'react'
import './css/App.css'
import './css/index.css'
import Header from './components/Header.jsx'
import SplashPage from './components/SplashPage.jsx'

function App() {


  return (
      <div>
        <Header/>
        <div className='main-content'>
          <SplashPage/>
        </div>
      </div>
  )
}

export default App
