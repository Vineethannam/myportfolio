import React from 'react'
import './ContactForm.css'

const ContactForm = () => {
  return (
    <div className='contact-form-content'>
      <form action="/">
        <div className="name-container">
          <input type="text" name = "firstname" placeholder='First Name' />
          <input type="text" name = "lastname" placeholder='Last Name' />
        </div>

        <input type="text" name = "email" placeholder='Email' />
        <textarea name="message" rows={3} placeholder='Message' />

        <button>SEND</button>
      </form>
      
    </div>
  )
}

export default ContactForm
