import React from 'react'
import {Link} from'react-router-dom'
function Register() {
  return (
    <div className='auth'>
      <h1>Register</h1>
      <form action="">
        <input type="text" name="" id="" placeholder='username'  required/>
        <input type="email" name="" id="" placeholder='email' required />
        <input type="password" name="" placeholder='password' id="" required />
        <button>Register</button>
        <p>This is an error</p>
        <span>Already have an account ? <Link to="/login">Login</Link> </span>
      </form>
    </div>
  )
}

export default Register