import React from 'react'
import '../css/contact.css'
import LocationLogo from '../images/locationLogo.png'
import EmailLogo from '../images/emailLogo.png'

function Contact() {
  return (
    <div className='contact'>
      <div className='contact-text'>CONTACT</div>
      <div className='contact-display'>
        <div className='location'>
          <img src={LocationLogo} />
          <div className='location'>Location <br/> Pasig Philippines</div>
        </div>

        <div className='email'>
          <img src={EmailLogo} />
          <div>E-Mail <br/> carillo.aaronjoseph@gmail.com </div>
        </div>
      </div>
    </div>
  )
}

export default Contact