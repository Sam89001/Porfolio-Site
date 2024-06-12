import '../css/footer.css'
import Logo from '../assets/SC.png'
import GithubLogo from '../assets/github-logo.svg'
import LinkedInLogo from '../assets/linkedin-logo.svg'

function Footer() {
  return (
    <div className='d-flex justify-content-center align-items-center w-100 footer-container'>
      <div className='d-flex justify-content-between align-items-center w-100 h-100 footer-content'>

        <div className='d-flex align-items-center' style={{height: '40%', paddingRight: '1rem'}}>
          <img className='img-fluid' src={Logo} alt='Logo' style={{height: '100%', paddingRight: '1rem'}}/>
          <p style={{margin: '0'}}>© 2024 Samuel Cole, All Rights Reserved</p>
        </div>

        <div className='d-flex' style={{height: '40%', paddingRight: '1rem'}}>
          <img className='img-fluid' src={GithubLogo} alt='Logo' style={{height: '100%', paddingRight: '0.5rem'}}/>
          <img className='img-fluid' src={LinkedInLogo} alt='Logo' style={{height: '100%'}}/>
        </div>

      </div>
    </div>
  )
}

export default Footer