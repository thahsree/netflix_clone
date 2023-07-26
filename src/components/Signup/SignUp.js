import React from 'react'
import './SignUp.css'

function SignUp() {
  return (
   <div className='signUpMain'>
     <div className='signUpParentDiv'>
      <form>
        <label>UserName</label>
        <br/>
        <input 
         className='input'
         type='text'
         id='fname'
         name='name'
         defaultValue="John"
        />
        <br/>
        <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="text"
            id="lname"
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
      </form>
    </div>
   </div>
  )
}

export default SignUp
