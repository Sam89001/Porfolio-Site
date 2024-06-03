import '../css/navbar.css'

import Logo from '../assets/SC.png'

function Header() {
  return(
    <div className='d-flex justify-content-center align-items-center w-100 navbar-container' >
      <div className='d-flex justify-content-center align-items-center w-100 h-100 navbar-content'>

        <div className='d-flex w-50 h-100 justify-content-start align-items-center'>
          <img className='img-fluid' src={Logo} alt='Logo' style={{height: '80%'}}/>

          <nav className='w-100' style={{backgroundColor: 'transparent'}}>
            <ul className="nav">
              <li className="nav-item">
                <a className="nav-link" href="#section1">Test 1</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#section2">Test 2</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#section3">Test 3</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#section4">Test 4</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#section5">Test 5</a>
              </li>
            </ul>
          </nav>

        </div>

        <div className='d-flex w-50 justify-content-end align-items-center'>
          <button className='navbar-button'>Download Resume</button>
        </div>

      </div>
    </div>

  )
}

export default Header