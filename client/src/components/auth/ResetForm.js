import React, { useState } from 'react';

function ResetForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [errorMessage, setErrorMessage] = useState("");


  
  
  function handleSubmit(e) {
      
      
      const password = Math.floor(1000 + Math.random() * 9000);

const details = {
username: username,
password: password
}

console.log(details);

    e.preventDefault();
    fetch("/reset", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(details),
    })
      .then((r) => {
        if (r.ok) {
        //   r.json().then((user) => onLogin(user));
        setErrorMessage("Your new password is " + password + " and has been sent to your email, remember to change it");

        } else {
          setErrorMessage("An error occurred. Please try again.");
        }
      })
      .catch((error) => {
        setErrorMessage("An error occurred. Please try again.");
      });
  }

  return (
    <>
      <section id="login">
        <div className="login_section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="main_login">
                  <div className="login_left col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="login_box">
                      <h2 className="title">Reset Password</h2>
                      {errorMessage && (
                        <div
                          style={{
                            backgroundColor: "green",
                            color: "white",
                            padding: "10px",
                            marginBottom: "10px",
                            borderRadius: "5px",
                          }}
                        >
                          {errorMessage}
                        </div>
                      )}
                      <form onSubmit={handleSubmit}>
                        <div className="login_form">
                          <ul>
                            <li>
                              <label htmlFor="EmailAddress">Username</label>
                              <input
                                type="text"
                                className="form-control"
                                id="username"
                                autoComplete="off"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                              />
                            </li>
                            <li>
                              <button
                                type="submit"
                                className="loginbutton red_btn trans squre-btn hvr-ripple-out"
                                name="Login"
                              >
                                Reset
                              </button>
                            </li>
                          </ul>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="signup_right col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="login_box">
                      <h2 className="title">Login To check Your Orders</h2>
                      <h4 className="title_checklist">
                        Sign up today and you will be able to :
                      </h4>
                      <ul className="checklist">
                        <li className="checkbox">
                          <input
                            id="check1"
                            type="checkbox"
                            name="check"
                            value="Bike"
                          />
                          <label htmlFor="check1">
                            Speed your way through the checkout
                          </label>
                        </li>
                        <li className="checkbox">
                          <input
                            id="check2"
                            type="checkbox"
                            name="check"
                            value="Bike"
                          />
                          <label htmlFor="check2">
                            Track your orders easily
                          </label>
                        </li>
                        <li className="checkbox">
                          <input
                            id="check3"
                            type="checkbox"
                            name="check"
                            value="Bike"
                          />
                          <label htmlFor="check3">
                            Keep a record of all your purchases
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ResetForm;
