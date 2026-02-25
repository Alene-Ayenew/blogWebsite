import React from 'react'
import {Link} from'react-router-dom'
function Login() {
  return (
    <div className='auth'>
      <h1>Login</h1>
      <form action="">
        <input type="text" name="" id="" placeholder='username'/>
        <input type="password" name="" placeholder='password' id="" />
        <button>Login</button>
        <p>This is an error</p>
        <span>Don't have account ? <Link to="/register">Register</Link> </span>
      </form>
    </div>
  )
}

export default Login