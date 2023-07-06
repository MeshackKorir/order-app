
import React, { useState  } from 'react'
function Main({foods , user, updateCart}) {
    const [cartItems, setCartItems] = useState([]);
    const calculateTotalPrice = () => {
      let totalPrice = 0;
      cartItems.forEach((item) => {
        totalPrice += item.price;
      });
      updateCart(totalPrice)
      return totalPrice;
    };

   
  
    const handleAddToCart = (food) => {
      setCartItems((prevCartItems) => [...prevCartItems, food]);
    };
    const handleSubmitOrder = () => {
        // Create the order object
        const order = {
          user_id: user.id, // Replace with the actual user ID
          quantity: cartItems.length,
          price: calculateTotalPrice(),
        };
        // Send a POST request to create the order
        fetch('/orders', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ order }), // Send the order data as an object
        })
          .then((response) => response.json())
          .then((data) => {
            // Handle the response or perform any necessary actions
            console.log(data);
            // Save individual order items
            const orderId = data.id; // Assuming the response contains the created order ID
            const orderItems = cartItems.map((item) => ({
              order_id: orderId,
              food_id: item.id,
              quantity: 1, // You can adjust the quantity as needed
              price: item.price,
            }));
            // Send a POST request to create the order items
            fetch('/orderitems', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ order_items: orderItems }), // Send the order items data as an object
            })
              .then((response) => response.json())
              .then((data) => {
                // Handle the response or perform any necessary actions
                console.log(data);
              })
              .catch((error) => {
                // Handle the error
                console.error(error);
              });
          })
          .catch((error) => {
            // Handle the error
            console.error(error);
          });
        // Clear the cart items after submitting the order
        setCartItems([]);
      };
  return (
   <>
         <div className="hwork">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="main_hwork">
                            <ul>
                                <li className="order">
                                    <div className="title"><img src="assets/images/h_img1.png" alt=""/></div>
                                </li>
                                <li className="deliver_L">
                                    <div className="title"><img src="assets/images/h_img2.png" alt="Delivery location"/></div>
                                </li>
                                <li className="deliver_pick">
                                    <div className="title"> <img src="assets/images/h_img3.png" alt=" Delivery or Pick up "/> </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section>
            <div className="popular">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="main_popular">
                                <h2 className="title">Popular Our Food</h2>
                                <p className="desc">Choose from over 30 craveable toppings to make your perfect Food.
                                    <br/> Don’t love what you ordered? Let us know. We’re all about second chances.</p>
                                <div className="p_card">
                                    <div className="row">
                               {/* Populate Food Data */}
                               {foods && foods.length > 0 && foods.map((food) => (
            <div key={food.id} className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <ul>
                <li>
                  <div className="card">
                    <div className="C_img">
                      <img src={`assets/images/${food.image}`} className="absoImg" alt="" />
                    </div>
                    <div className="C_desc">
                      <h3 className="title">{food.name}</h3>
                      <p className="desc">{food.description}</p>
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
                </li>
              </ul>
            </div>
          ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
{/* add cart form */}
{cartItems.length > 0 && (
          <section>
            <div className="cart_form">
              <h2 className="title">Cart</h2>
              <ul>
                {cartItems.map((item) => (
                  <li key={item.id}>
                    <div className="cart_item">
                      <div className="item_name">{item.name}</div>
                      <div className="item_price">Ksh {item.price}</div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="total_price">Total: Ksh {calculateTotalPrice()}</div>
              <button className="submit_btn" onClick={handleSubmitOrder}>
                Submit Order
              </button>
            </div>
          </section>
        )}
        <section>
            <div className="client_say">
                <div className="main_client">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="middle_Cpitch">
                                    <h2 className="title">Whats Clients Say</h2>
                                    <div className="testi_slider">
                                        <div>
                                            <p className="desc"><span className="double_quat"></span>I ordered Pizza for the first time & Im so glad I did! I Cant wait till I order again. Thick, tasty,
                                               absolutely delicious Pizza! The gal taking my order was so nice as well. <span className="double_quat2"></span></p>
                                            <div className="sign"> <span className="name">Paulette Pettry</span>
                                                <span className="Desig">CEO</span> </div>
                                        </div>
                                        <div>
                                            <p className="desc"><span className="double_quat"></span>Wow I have found a great pizza place. They brought me a great pizza and the guy that delivered
                                               my pizza was a cool dude. Thanks for the great pizza. I recommend to everyone.<span className="double_quat2"></span></p>
                                            <div className="sign"> <span className="name">Jhon Walker</span> <span className="Desig">CEO</span> </div>
                                        </div>
                                        <div>
                                            <p className="desc"><span className="double_quat"></span>Great pizza. Tastes so fresh and original. Beats any of the chains hands down.
                                              I was so glad to hear Mikes was opening in Oregon and now it is a wonderful reality.
                                                Give them a try, you wont be sorry! <span className="double_quat2"></span></p>
                                            <div className="sign"> <span className="name">Glenn Cook</span> <span className="Desig">CEO</span> </div>
                                        </div>
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
export default Main