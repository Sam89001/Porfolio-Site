import '../css/footer.css'
import Logo from '../assets/SC.png'
import GithubLogo from '../assets/github-logo.svg'
import LinkedInLogo from '../assets/linkedin-logo.svg'

function Footer() {
  return (
    <div className='d-flex justify-content-center align-items-center w-100 footer-container'>

      <div className='d-flex align-items-center h-100  w-100 footer-content justify-content-between'>
        
        <div className='d-flex flex-column h-100 align-items-center footer-text-column' >
          <h3 className='footer-title'>Rights</h3>
          <p className='footer-text'>© 2024 Samuel Cole, All Rights Reserved</p>
        </div>

        <div className='d-flex flex-column h-100 align-items-center footer-text-column' >
          <h3 className='footer-title'>Contact</h3>
          <p className='footer-text'>(+44) 7527 063 138</p>
          <p className='footer-text' >samscreativespace (@) gmail.com</p>
        </div>


        <div className='d-flex flex-column flex-end h-100 align-items-center footer-text-column'>
          <h3 className='footer-title'>Socials</h3>
          <a className='d-flex footer-text-hover-change'  
          href="https://github.com/Sam89001" 
          target="_blank" rel="noopener noreferrer">
          Github  
          </a>

          <a className='d-flex footer-text-hover-change' 
          href="https://www.linkedin.com/in/samuel-cole-586582229/" 
          target="_blank" 
          rel="noopener noreferrer">
          LinkedIn  
          </a>
        </div>

      </div>

    </div>

  )
}

export default Footer