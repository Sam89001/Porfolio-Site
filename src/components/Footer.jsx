import '../css/footer.css'
import Logo from '../assets/SC.png'

function Footer() {
  return (
    <div className='d-flex justify-content-center align-items-center w-100 footer-container'>
      <div className='d-flex justify-content-between align-items-center w-100 h-100 footer-content'>

        <div className='d-flex' style={{height: '50%', paddingRight: '1em'}}>
          <img className='img-fluid' src={Logo} alt='Logo' style={{height: '100%', paddingRight: '1em'}}/>
          <p>© 2024 Samuel Cole, All Rights Reserved</p>
        </div>

        <div className='d-flex' style={{height: '50%', paddingRight: '1em'}}>
          <img className='img-fluid' src={Logo} alt='Logo' style={{height: '100%', paddingRight: '1em'}}/>
          <img className='img-fluid' src={Logo} alt='Logo' style={{height: '100%', paddingRight: '1em'}}/>
        </div>

      </div>
    </div>
  )
}

export default Footer