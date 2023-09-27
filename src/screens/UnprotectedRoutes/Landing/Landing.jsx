import React from 'react'
import './Landing.css'
import SignupForm from '../../../components/SignupForm/SignupForm.jsx'

export default function Landing() {
  return (
    <div className='Landing'>  
    <h2>Welcome!</h2>    
      <section className='signupFormDiv'>
        <SignupForm/>
      </section>
    </div>
  )
}
