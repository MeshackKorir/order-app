import React, { useState } from 'react';
import App from '../App';

function Addfood({allorders, foods, updateFood, handleAddFood, handleUpdateFood}) {
        const [name, setName] = useState("");
        const [quantity, setQuantity] = useState("");
        const [description, setDescription] = useState("");
        const [price, setPrice] = useState("");
        const [message, setMessage] = useState("");
        const [isSuccess, setIsSuccess] = useState(false);
        const [editingFood, setEditingFood] = useState(null);
        const [editName, setEditName] = useState("");
        const [editQuantity, setEditQuantity] = useState("");
        const [editDescription, setEditDescription] = useState("");
        const [editPrice, setEditPrice] = useState("");


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

          handleAddFood({
            name,
            quantity,
            description,
            price,
          })
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

  function handleEditFood(food) {
    setEditingFood(food.id);
    setEditName(food.name);
    setEditQuantity(food.quantity);
    setEditDescription(food.description);
    setEditPrice(food.price);
  }
  


  function handleUpdateFood(e, id) {
    e.preventDefault();
    fetch(`/foods/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: editName,
        quantity: editQuantity,
        description: editDescription,
        price: editPrice,
      }),
    })
      .then((r) => {
        if (r.ok) {
          handleUpdateFood(id);
          setEditingFood(null);
          setIsSuccess(true);
          setMessage("Food updated successfully!");
        } else {
          setIsSuccess(false);
          setMessage("Failed to update food. Please try again.");
        }
      })
      .catch((error) => {
        // setIsSuccess(false);
        // setMessage("An error occurred. Please try again.");
      });
  }
  


  function handleDeleteFood(id) {
    fetch(`/foods/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          // Remove the deleted food from the foods state
          updateFood(id)

          setIsSuccess(true);
          setMessage('Food deleted successfully!');
        } else {
          setIsSuccess(false);
          setMessage('Failed to delete food. Please try again.');
        }
      })
      .catch((error) => {
        setIsSuccess(false);
        setMessage('An error occurred. Please try again.');
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

        <h2 className="title">All Orders</h2>
        <div id="accordion">
 
 {/* Populate Data */}


 {allorders.map((order) => (


  <div key={order.id} class="card">
    <div class="card-header" id="headingOne">
      <h5 class="mb-0">
      <button class="btn btn-link" data-toggle="collapse" data-target={`#collapse${order.id}`} aria-expanded="true" aria-controls={`collapse${order.id}`}>
  <strong></strong> <span class="text-primary"><strong>{order.id}</strong></span> &nbsp;&nbsp;
  <strong>User:</strong> <span  style={{textTransform:'capitalize'}} class="text-success"><strong>{order.user.username}</strong></span> &nbsp;&nbsp;
  <strong>Phone:</strong> <span class="text-dark"><strong>{order.user.phone}</strong></span> &nbsp;&nbsp;
  <strong>Amount:</strong> <span class="text-danger"><strong>Ksh {order.price}</strong></span> &nbsp;&nbsp;
  <strong>Status:</strong> <span class="text-warning"><strong>Pending</strong></span>
</button>

      </h5>
    </div>

    <div id={`collapse${order.id}`} class="collapse hide" aria-labelledby="headingOne" data-parent="#accordion">
    <table class="table table-sm table-dark">
  {/* <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Quantity</th>
      <th scope="col">Price</th>
    </tr>
  </thead> */}
  <tbody>
    
  {order.orderitems.map((item, index) => (
  <tr key={index}>
    <th scope="row">{index + 1}</th>
    {item.food != null && (
      <td>{item.food.name}</td>
    )}
    <td>{item.quantity}</td>
    <td>Ksh {item.price}</td>
  </tr>
))}

  </tbody>
</table>
    </div>
  </div>

))}


</div>

        </div>
          </div>
        </div>
      </div>
      </div>
    </section>

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


                <div className="login_left col-lg-6 col-md-6 col-sm-12 col-xs-12">
                
                {editingFood && (
 

                  <div className="login_box">
                    <h2 className="title">Edit Food</h2>
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


                        <form
                          onSubmit={(e) => handleUpdateFood(e, editingFood)}
                        >
                          <div className="edit_form_fields">
                            <ul>
                              <li>
                                <label htmlFor="editName">Name</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="editName"
                                  autoComplete="off"
                                  value={editName}
                                  onChange={(e) =>
                                    setEditName(e.target.value)
                                  }
                                  required
                                />
                              </li>
                              <li>
                                <label htmlFor="editPrice">Price</label>
                                <input
                                  type="number"
                                  className="form-control"
                                  id="editPrice"
                                  autoComplete="off"
                                  value={editPrice}
                                  onChange={(e) =>
                                    setEditPrice(e.target.value)
                                  }
                                  required
                                />
                              </li>
                              <li>
                                <label htmlFor="editQuantity">Quantity</label>
                                <input
                                  type="number"
                                  className="form-control"
                                  id="editQuantity"
                                  autoComplete="off"
                                  value={editQuantity}
                                  onChange={(e) =>
                                    setEditQuantity(e.target.value)
                                  }
                                  required
                                />
                              </li>
                              <li>
                                <label htmlFor="editDescription">
                                  Description
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="editDescription"
                                  autoComplete="off"
                                  value={editDescription}
                                  onChange={(e) =>
                                    setEditDescription(e.target.value)
                                  }
                                  required
                                />
                              </li>
                              <li>
                                <button
                                  type="submit"
                                  className="loginbutton red_btn trans squre-btn hvr-ripple-out"
                                  name="updatefood"
                                >
                                  Update Food
                                </button>
                                &nbsp;&nbsp;
                                <button
                                  type="button"
                                  className="loginbutton red_btn trans squre-btn hvr-ripple-out"
                                  name="cancel"
                                  onClick={() => setEditingFood(null)}
                                >
                                  Cancel
                                </button>
                              </li>
                            </ul>
                          </div>
                        </form>
                


                  </div>
 )}



                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


 <section id="login">
<div className="login_section">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="main_login">

        <h2 className="title">Foods Available</h2>

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
        <div id="accordion">
 
 {/* Populate Data */}


<table class="table table-striped table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Description</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
      <th scope="col">Actions</th>

    </tr>
  </thead>
  <tbody>
  {foods.map((food) => (
  <tr key={food.id}>
    <th scope="row">{food.id}</th>
    <td>{food.name}</td>
    <td>{food.description}</td>
    <td>Ksh {food.price}</td>
    <td>{food.quantity}</td>
    <td>
     
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={() => handleEditFood(food)}
          >
            Edit
          </button>{" "}
          <button
            className="btn btn-danger btn-sm"
            onClick={() => handleDeleteFood(food.id)}
          >
            Delete
          </button>
    </td>
  </tr>
))}



</tbody>
</table>

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
