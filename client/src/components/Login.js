import React, { useState } from "react";
import LoginForm from "./auth/LoginForm";
import RegisterForm from "./auth/RegisterForm";
import ResetForm from "./auth/ResetForm";

function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);
  const [showReset, setShowReset] = useState(true);

  return (
    <>
      {showLogin && showReset ? (
        <>
          <LoginForm onLogin={onLogin} />
          <p>
            Don't have an account? &nbsp;
            <span
              onClick={() => {
                setShowReset(false);
                setShowLogin(false);
              }}
            >
              Sign Up
            </span>
          </p>
          <p>
            Forgot your password? &nbsp;
            <span
              onClick={() => {
                setShowReset(true);
                setShowLogin(false);
              }}
            >
              Reset
            </span>
          </p>
        </>
      ) : showReset && !showLogin ? (
        <>
          <ResetForm onLogin={onLogin} />
          <p>
            Don't have an account? &nbsp;
            <span onClick={() => setShowLogin(true)}>Login</span>
          </p>
        </>
      ) : (
        <>
          <RegisterForm onLogin={onLogin} />
          <p>
            Already have an account? &nbsp;
            <span onClick={() => setShowLogin(true)}>Login</span>
          </p>
          <p>
            Forgot your password? &nbsp;
            <span onClick={() => setShowReset(true)}>Reset</span>
          </p>
        </>
      )}
    </>
  );
}

export default Login;
