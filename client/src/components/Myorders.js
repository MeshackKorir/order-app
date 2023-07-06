import React from 'react'

function Myorders({orders}) {
  return (
  <>
  <section id="login">
<div className="login_section">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="main_login">

        <h2 className="title">My Orders</h2>
        <div id="accordion">
 
 {/* Populate Data */}


 {orders.map((order) => (


  <div key={order.id} class="card">
    <div class="card-header" id="headingOne">
      <h5 class="mb-0">
        <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
         Order No: {order.id}   &nbsp;&nbsp;   Price: {order.price}      &nbsp;&nbsp;  Status : paid  
        </button>
      </h5>
    </div>

    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
    <table class="table table-sm table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    
 {order.orderitems.map((item) => (
    <tr>
      <th scope="row">1</th>
      <td>{item.id}</td>
      <td>{item.food_id}</td>
      <td>Button</td>
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
  </>
  )
}

export default Myorders