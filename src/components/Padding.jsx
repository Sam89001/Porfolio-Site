import BlueSquiggle from '../assets/Blue Squiggle Left Rotated.png'

function Padding() {
  return(
    <div className='d-flex flex-column' style={{ position: 'relative', height: '15rem'}}>
      <img className='img-fluid' src={BlueSquiggle} style={{position: 'absolute', height: '100%', zIndex: '2'}}/>
      <div style={{height: '50%', backgroundColor: 'var(--backgroundBlue)'}}></div>
      <div style={{height: '50%'}}/>
    </div>
  )
}

export default Padding