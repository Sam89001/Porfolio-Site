import '../css/padding.css'

import BlueSquiggle from '../assets/Blue Squiggle Left Rotated.png'
import GreenSquiggle from '../assets/Green Squiggle 2.webp'

function TopPadding() {
  return (
    <div className='d-flex justify-content-end' id='section1'>
      <img className='img-fluid top-padding-squiggle' src={BlueSquiggle} ></img>
    </div>
  );
}

export default TopPadding