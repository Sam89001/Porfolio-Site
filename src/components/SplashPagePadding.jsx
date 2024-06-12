import BlueSquiggle from '../assets/Red Squiggle 2 Shorter.webp'

function SplashPagePadding() {
  return(
    <div className='d-flex flex-column' style={{ position: 'relative', height: '12rem'}}>
      <img className='img-fluid' src={BlueSquiggle} style={{position: 'absolute', height: '100%', zIndex: '2'}}/>
      <div style={{height: '50%'}}></div>
      <div style={{height: '50%', backgroundColor: 'var(--backgroundBlue)'}}/>
    </div>
  )
}

export default SplashPagePadding