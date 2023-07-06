import React, { useState } from 'react';
import App from '../App';

function Addfood() {
  // if (!user) return <App/>;
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/foods", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        quantity,
        description,
        price,
      }),
    })
      .then((r) => {
        if (r.ok) {
          setIsSuccess(true);
          setMessage("Food added successfully!"); 
        } else {
          setIsSuccess(false);
          setMessage("Failed to add food. Please try again."); 
        }
      })
      .catch((error) => {
        setIsSuccess(false);
        setMessage("An error occurred. Please try again."); 
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
                    <h2 className="title">Add Food</h2>
                    {message && (
  <div
    style={{
      backgroundColor: isSuccess ? "green" : "red",
      color: "white",
      padding: "10px",
      marginBottom: "10px",
      borderRadius: "5px",
    }}
  >
    {message}
  </div>
)}

                    <form onSubmit={handleSubmit}>
                      <div className="login_form">
                        <ul>
                          <li>
                            <label htmlFor="name">Name</label>
                            <input
                              type="text"
                              className="form-control"
                              id="name"
                              autoComplete="off"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              required
                            />
                          </li>
                          <li>
                            <label htmlFor="price">Price</label>
                            <input
                              type="number"
                              className="form-control"
                              id="price"
                              autoComplete="off"
                              value={price}
                              onChange={(e) => setPrice(e.target.value)}
                              required
                            />
                          </li>
                          <li>
                            <label htmlFor="quantity">Quantity</label>
                            <input
                              type="number"
                              className="form-control"
                              id="quantity"
                              autoComplete="off"
                              value={quantity}
                              onChange={(e) => setQuantity(e.target.value)}
                              required
                            />
                          </li>
                          <li>
                            <label htmlFor="description">Description</label>
                            <input
                              type="text"
                              className="form-control"
                              id="description"
                              autoComplete="off"
                              value={description}
                              onChange={(e) => setDescription(e.target.value)}
                              required
                            />
                          </li>
                          <li>
                            <button
                              type="submit"
                              className="loginbutton red_btn trans squre-btn hvr-ripple-out"
                              name="addfood"
                            >
                              Add Food
                            </button>
                          </li>
                        </ul>
                      </div>
                    </form>
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

export default Addfood;
