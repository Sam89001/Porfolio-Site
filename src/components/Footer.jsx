import '../css/footer.css'
import Logo from '../assets/SC.png'
import GithubLogo from '../assets/github-logo.svg'
import LinkedInLogo from '../assets/linkedin-logo.svg'

function Footer() {
  return (
    <div className='d-flex justify-content-center align-items-center w-100 footer-container'>
      <div className='d-flex align-items-center h-100 footer-content justify-content-between' style={{width: '100%'}}>
        
        <div className='d-flex' >
          <p className='footer-text'>© 2024 Samuel Cole, All Rights Reserved</p>
        </div>

        <div className='d-flex w-100 footer-logos-container'>
          <a className='d-flex justify-content-end' href="https://github.com/Sam89001" target="_blank" rel="noopener noreferrer">
            <img className='img-fluid footer-logo-image' src={GithubLogo} alt='Logo' style={{ paddingRight: '0.5rem' }} />
          </a>

          <a className='d-flex justify-content-end' href="https://www.linkedin.com/in/samuel-cole-586582229/" target="_blank" rel="noopener noreferrer">
            <img className='img-fluid footer-logo-image' src={LinkedInLogo} alt='Logo'/>
          </a>
        </div>

      </div>
    </div>

  )
}

export default Footer