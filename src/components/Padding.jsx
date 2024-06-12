import '../css/padding.css'

import BlueSquiggle from '../assets/Blue Squiggle Left Rotated.png'
import GreenSquiggle from '../assets/Green Squiggle 2.webp'

function Padding() {
  return (
    <div className='d-flex flex-column' style={{ position: 'relative', height: '12rem' }} id="section3">
      <img className='img-fluid hide-squiggles' src={BlueSquiggle} style={{ position: 'absolute', left: '0', height: '100%', zIndex: '2' }} />
      <img className='img-fluid hide-squiggles' src={GreenSquiggle} style={{ position: 'absolute', right: '0', height: '100%', zIndex: '2' }} />
      <div style={{ height: '50%', backgroundColor: 'var(--backgroundBlue)' }} />
      <div style={{ height: '50%' }}/>
    </div>
  );
}

export default Padding