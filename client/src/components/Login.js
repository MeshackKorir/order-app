import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import LoginForm from './auth/LoginForm';
import RegisterForm from './auth/RegisterForm';

function Login({ onLogin }) {
    const [showLogin, setShowLogin] = useState(true);



  return (
    <>
      {showLogin ? (
<>
<LoginForm onLogin={onLogin} />
<p>
            Don't have an account? &nbsp;
            <span onClick={() => setShowLogin(false)}>
              Sign Up
            </span>
          </p>

</>
   ) : (
<>
<RegisterForm onLogin={onLogin}/> 

<p>
            Don't have an account? &nbsp;
            <span onClick={() => setShowLogin(true)}>
              Login
            </span>
          </p>

</>
  )}

  
    
    </>
  )
}

export default Login