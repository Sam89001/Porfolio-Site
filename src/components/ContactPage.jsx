import '../css/site.css'
import '../css/index.css'
import '../css/contactPage.css'

function ContactPage() {
  return (
    <section className='d-flex justify-content-center contact-page-component-container' id="section4">
      <div className='component-content-container contact-page-content'>
        <div className='row h-100'>

          <div className='col-12'>
            <h1 className='main-header standard-bottom-padding'>Lets Connect!</h1>
          </div>

          {/* Text */}

          <div className='col-lg-6 col-md-12 col-sm-12 row'>

            {/* Individual columns for each item so they can collaps at medium screen sizes
             Likely col-12 for normal screens and col-4 for medium screen sizes and col-12 for small screen-sizes*/}

          </div>

          {/* Form */}

          <div className='col-lg-6 col-md-12 col-sm-12' >

          </div>

        </div>
      </div>
    </section>
  )
}

export default ContactPage