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
          <button class="btn btn-link" data-toggle="collapse" data-target={`#collapse${order.id}`} aria-expanded="true" aria-controls={`collapse${order.id}`}>
              <strong></strong> <span class="text-primary"><strong>{order.id}</strong></span> &nbsp;&nbsp;
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
  </>
  )
}

export default Myorders