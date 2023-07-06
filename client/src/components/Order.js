import React, { useState  } from 'react'

function Order({foods , user, updateCart}) {
    const [cartItems, setCartItems] = useState([]);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalPrice += item.price;
      updateCart(totalPrice)
    });
    return totalPrice;
  };

  const handleAddToCart = (food) => {
    setCartItems((prevCartItems) => [...prevCartItems, food]);
  };

  const handleSubmitOrder = () => {
    const order = {
      user_id: user.id, 
      quantity: cartItems.length,
      price: calculateTotalPrice(),
    };

    fetch('/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ order }), 
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        const orderId = data.id; 
        const orderItems = cartItems.map((item) => ({
          order_id: orderId,
          food_id: item.id,
          quantity: 1, 
          price: item.price,
        }));

        fetch('/orderitems', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ order_items: orderItems }), 
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setIsSuccess(true);
            setMessage('Order successfully created. Pay using M-Pesa to complete the order.');
          })
          .catch((error) => {
            console.error(error);
            setIsSuccess(false);
            setMessage('An error has occurred while creating the order.');
          });
      })
      .catch((error) => {
        console.error(error);
        setIsSuccess(false);
        setMessage('An error has occurred while creating the order.');
      });

    setCartItems([]);
  };

      
  
  return (
 <>
     <section>
            <div className="Our_menu">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="main_Ourmenu">
                                <h2 className="title">Pizza</h2>
                                <div className="content_menu bottom_pitch">
                                    <div className="main_bpitch">
                                        <ul className="nav nav-tabs" role="tablist">
                                            <li className="nav-item pizza">
                                                <a className="nav-link active trans" data-toggle="tab" href="#pizza" title="Pizza">
                                                    <span className="icon">Pizza</span>
                                                </a>
                                            </li>
                                            <li className="nav-item burger1">
                                                <a className="nav-link trans" data-toggle="tab" href="#burger1" title="Burgers">
                                                    <span className="icon">Burgers</span>
                                                </a>
                                            </li>
                                            <li className="nav-item salads">
                                                <a className="nav-link trans" data-toggle="tab" href="#salad" title="Salads">
                                                    <span className="icon">Salads</span>
                                                </a>
                                            </li>
                                            <li className="nav-item fries">
                                                <a className="nav-link trans" data-toggle="tab" href="#fries" title="Fries">
                                                    <span className="icon">Fries</span>
                                                </a>
                                            </li>
                                            <li className="nav-item drinks">
                                                <a className="nav-link trans" data-toggle="tab" href="#drinks" title="Drinks">
                                                    <span className="icon">Drinks</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="tab-content">

                                    <div id="pizza" className=" tab-pane active">
                                        <div className="content_row">
                                            <div className="left_cntbar">
                                                <div className="pizza_items">
                                                    <div className="row">
                                                       
                                                    {/* populate data    */}
                                                       {foods.map((food) => (
                                                        <div key={food.id} className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                                            <div className="P_itmesbox">
                                                                <div className="PT_image"><img src={`assets/images/${food.image}`} className="absoImg" alt="" /></div>
                                                                <div className="PT_dscr">
                                                                    <h3 className="PT_title">{food.name}</h3>
                                                                    <p className="PT_dtls"> {food.description}
                                                                    </p>
                                                                    <div className="PT_optn">
                                                                        <ul className="PT-radio">
                                                                            <li>
                                                                                <input type="radio" name="radio-group-1" id="radio-1" checked="checked" />
                                                                                <label for="radio-1">Medium</label>
                                                                            </li>
                                                                            <li>
                                                                                <input type="radio" name="radio-group-1" id="radio-2" />
                                                                                <label for="radio-2">Large</label>
                                                                            </li>
                                                                            <li>
                                                                                <input type="radio" name="radio-group-1" id="radio-3" />
                                                                                <label for="radio-3">Extra Large</label>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="price_block">
                                                                        <div className="price">Ksh {food.price}</div>
                                                                        <button
                          onClick={() => handleAddToCart(food)}
                          className="card_btn"
                        >
                          Add to cart
                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                          ))}
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                        
                                </div>

                                <div className="right_cntbar col-lg-3">
                                    <div className="your_order">
                                        <div className="Order_title">
                                            <span className="O_lefttitle">Your order </span>
                                            {message && (
  <div
    style={{
      backgroundColor: isSuccess ? "green" : "red",
      color: "white",
      padding: "10px",
      marginBottom: "10px",
      borderRadius: "5px",
      marginTop: "36px",
    }}
  >
    {message}
  </div>
)}
                                            <span className="O_cart"><a href="#" className="trans" title="Add To Cart"></a></span>
                                        </div>
                                      
                                        {cartItems.length > 0 && (
                                      <>
                                      
                                        <div className="Order_number">
                                            <ul>
                                            {cartItems.map((item) => (
                                                <li>
                                                    <div className="Order_number">
                                                        <div className="Order_names">
                                                            <span className="O_name">{item.name}</span>
                                                            <span className="O_type">Extra Large</span>
                                                        </div>
                                                        <div className="Order_price">
                                                            <span className="O_price">Ksh {item.price}</span>
                                                        </div>
                                                    </div>
                                                </li>
                                               ))}
                                            </ul>
                                        </div>
                                        <div className="totle_Oamount">
                                            <div className="O_totlecost">
                                                <span className="O_title">Total</span>
                                                <span className="O_price">Ksh {calculateTotalPrice()}</span>
                                            </div>
                                            <button className="trans red_btn squre-btn hvr-ripple-out" onClick={handleSubmitOrder}>
                Submit
              </button>
                                        
                                        </div>
                                        </>
)}

                                    </div>
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

export default Order