import '../css/padding.css'

import BlueSquiggle from '../assets/Red Squiggle 2 Shorter.webp'
import YellowSquiggle from '../assets/Yellow Squiggle 2.webp'

function SplashPagePadding() {
  return(
    <div className='d-flex flex-column' style={{ position: 'relative', height: '12rem'}} id="section2">
      <img className='img-fluid hide-squiggles' src={BlueSquiggle} style={{position: 'absolute', left: '0', height: '100%', zIndex: '2'}}/>
      <img className='img-fluid hide-squiggles' src={YellowSquiggle} style={{position: 'absolute', right: '0', height: '100%', zIndex: '2'}}/>
      <div style={{height: '50%'}}/>
      <div style={{height: '50%', backgroundColor: 'var(--backgroundGreen)'}}/>
    </div>
  )
}

export default SplashPagePadding