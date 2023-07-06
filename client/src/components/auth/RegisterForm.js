import React, { useState } from 'react';

function RegisterForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        phone,
        address,
        password,
        password_confirmation: passwordConfirmation,
      }),
    })
      .then((r) => {
        if (r.ok) {
          r.json().then((user) => onLogin(user));
        } else {
          setErrorMessage("Your passwords do not match");
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
                      <h2 className="title">Sign in</h2>
                      {errorMessage && (
                        <div
                          style={{
                            backgroundColor: "red",
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
                              <label htmlFor="username">Username</label>
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
                              <label htmlFor="email">Email</label>
                              <input
                                type="email"
                                className="form-control"
                                id="email"
                                autoComplete="off"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                              />
                            </li>
                            <li>
                              <label htmlFor="phone">Phone Number</label>
                              <input
                                type="number"
                                className="form-control"
                                id="phone"
                                autoComplete="off"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                              />
                            </li>
                            <li>
                              <label htmlFor="address">Address</label>
                              <input
                                type="text"
                                className="form-control"
                                id="address"
                                autoComplete="off"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                              />
                            </li>
                            <li>
                              <label htmlFor="password">Password</label>
                              <input
                                className="form-control"
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                autoComplete="current-password"
                              />
                            </li>
                            <li>
                              <label htmlFor="password_confirmation">
                                Password Confirmation
                              </label>
                              <input
                                className="form-control"
                                type="password"
                                id="password_confirmation"
                                value={passwordConfirmation}
                                onChange={(e) =>
                                  setPasswordConfirmation(e.target.value)
                                }
                                autoComplete="current-password"
                              />
                            </li>
                            <li className="half checkbox">
                              <input
                                id="check4"
                                type="checkbox"
                                name="check"
                                value="Bike"
                              />
                              <label htmlFor="check4">Remember Me</label>
                            </li>
                            <li className="half text-right">
                              <a href="#" className="trans">
                                Forgotten Password?
                              </a>
                            </li>
                            <li>
                              <button
                                type="submit"
                                className="loginbutton red_btn trans squre-btn hvr-ripple-out"
                                name="Login"
                              >
                                Register
                              </button>
                            </li>
                          </ul>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="signup_right col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="login_box">
                      <h2 className="title">Register and Be Part of Us</h2>
                      <h4 className="title_checklist">
                        Sign up today and you will be able to:
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

export default RegisterForm;
