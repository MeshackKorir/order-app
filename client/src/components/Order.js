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






















                                    <div id="burger1" className=" tab-pane fade">
                                        <div className="content_row">
                                            <div className="left_cntbar">
                                                <div className="pizza_items">
                                                    <div className="row">
                                                        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                                            <div className="P_itmesbox">
                                                                <div className="PT_image"><img src="images/pro_img2.jpg" className="absoImg" alt="" /></div>
                                                                <div className="PT_dscr">
                                                                    <h3 className="PT_title">Luger Burger</h3>
                                                                    <p className="PT_dtls">Luger Burger features extra thick bacon and more half pound of beef.
                                                                    </p>

                                                                    <div className="price_block">
                                                                        <div className="price">$ 10.00</div>
                                                                        <a href="#" className="card_btn">Add to cart</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                                            <div className="P_itmesbox">
                                                                <div className="PT_image"><img src="images/pro_img2.jpg" className="absoImg" alt="" /></div>
                                                                <div className="PT_dscr">
                                                                    <h3 className="PT_title">Le Pigeon Burger</h3>
                                                                    <p className="PT_dtls">Le Pigeon Burger has smoky flavor enhanced with each topping
                                                                    </p>

                                                                    <div className="price_block">
                                                                        <div className="price">$ 10.00</div>
                                                                        <a href="#" className="card_btn">Add to cart</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                                            <div className="P_itmesbox">
                                                                <div className="PT_image"><img src="images/pro_img2.jpg" className="absoImg" alt="" /></div>
                                                                <div className="PT_dscr">
                                                                    <h3 className="PT_title">Taco Burger</h3>
                                                                    <p className="PT_dtls">Tacos are amazing, no doubt about it; need this amazing combo
                                                                    </p>

                                                                    <div className="price_block">
                                                                        <div className="price">$ 12.00</div>
                                                                        <a href="#" className="card_btn">Add to cart</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                                            <div className="P_itmesbox">
                                                                <div className="PT_image"><img src="images/Burgers.jpg" className="absoImg" alt="" /></div>
                                                                <div className="PT_dscr">
                                                                    <h3 className="PT_title">Chicken Burger</h3>
                                                                    <p className="PT_dtls">The Chicken Caesar Burger is special because it retains the freshness of chicken
                                                                    </p>

                                                                    <div className="price_block">
                                                                        <div className="price">$ 15.00</div>
                                                                        <a href="#" className="card_btn">Add to cart</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                                            <div className="P_itmesbox">
                                                                <div className="PT_image"><img src="images/Burgers.jpg" className="absoImg" alt="" /></div>
                                                                <div className="PT_dscr">
                                                                    <h3 className="PT_title">Cheese Burger</h3>
                                                                    <p className="PT_dtls">Easily the best burger in all of Germany, this enormous preparation
                                                                    </p>

                                                                    <div className="price_block">
                                                                        <div className="price">$ 10.00</div>
                                                                        <a href="#" className="card_btn">Add to cart</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                                            <div className="P_itmesbox">
                                                                <div className="PT_image"><img src="images/Burgers.jpg" className="absoImg" alt="" /></div>
                                                                <div className="PT_dscr">
                                                                    <h3 className="PT_title">Chicken Burger</h3>
                                                                    <p className="PT_dtls">The Chicken Caesar Burger is special because it retains the freshness of chicken
                                                                    </p>

                                                                    <div className="price_block">
                                                                        <div className="price">$ 15.00</div>
                                                                        <a href="#" className="card_btn">Add to cart</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                                            <div className="P_itmesbox">
                                                                <div className="PT_image"><img src="images/pro_img2.jpg" className="absoImg" alt="" /></div>
                                                                <div className="PT_dscr">
                                                                    <h3 className="PT_title">Luger Burger</h3>
                                                                    <p className="PT_dtls">Luger Burger features extra thick bacon and more half pound of beef.
                                                                    </p>

                                                                    <div className="price_block">
                                                                        <div className="price">$ 10.00</div>
                                                                        <a href="#" className="card_btn">Add to cart</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                                            <div className="P_itmesbox">
                                                                <div className="PT_image"><img src="images/pro_img2.jpg" className="absoImg" alt="" /></div>
                                                                <div className="PT_dscr">
                                                                    <h3 className="PT_title">Le Pigeon Burger</h3>
                                                                    <p className="PT_dtls">Le Pigeon Burger has smoky flavor enhanced with each topping
                                                                    </p>

                                                                    <div className="price_block">
                                                                        <div className="price">$ 10.00</div>
                                                                        <a href="#" className="card_btn">Add to cart</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                                            <div className="P_itmesbox">
                                                                <div className="PT_image"><img src="images/pro_img2.jpg" className="absoImg" alt="" /></div>
                                                                <div className="PT_dscr">
                                                                    <h3 className="PT_title">Taco Burger</h3>
                                                                    <p className="PT_dtls">Tacos are amazing, no doubt about it; need this amazing combo
                                                                    </p>

                                                                    <div className="price_block">
                                                                        <div className="price">$ 12.00</div>
                                                                        <a href="#" className="card_btn">Add to cart</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div id="salad" className=" tab-pane fade">
                                        <div className="content_row">
                                            <div className="left_cntbar">
                                                <div className="pizza_items">
                                                    <div className="row">
                                                        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                                            <div className="P_itmesbox">
                                                                <div className="PT_image"><img src="images/pro_img3.jpg" className="absoImg" alt="" /></div>
                                                                <div className="PT_dscr">
                                                                    <h3 className="PT_title">Cobb salad</h3>
                                                                    <p className="PT_dtls">The only way to make this dish heavier is to add bricks.
                                                                    </p>

                                                                    <div className="price_block">
                                                                        <div className="price">$ 10.00</div>
                                                                        <a href="#" className="card_btn">Add to cart</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                                            <div className="P_itmesbox">
                                                                <div className="PT_image"><img src="images/pro_img3.jpg" className="absoImg" alt="" /></div>
                                                                <div className="PT_dscr">
                                                                    <h3 className="PT_title">Larb</h3>
                                                                    <p className="PT_dtls">It's usually served with raw vegetables and sticky rice. vegetables
                                                                    </p>

                                                                    <div className="price_block">
                                                                        <div className="price">$ 10.00</div>
                                                                        <a href="#" className="card_btn">Add to cart</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                                            <div className="P_itmesbox">
                                                                <div className="PT_image"><img src="images/pro_img3.jpg" className="absoImg" alt="" /></div>
                                                                <div className="PT_dscr">
                                                                    <h3 className="PT_title">Cobb salad</h3>
                                                                    <p className="PT_dtls">The only way to make this dish heavier is to add bricks.
                                                                    </p>

                                                                    <div className="price_block">
                                                                        <div className="price">$ 10.00</div>
                                                                        <a href="#" className="card_btn">Add to cart</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                                            <div className="P_itmesbox">
                                                                <div className="PT_image"><img src="images/pro_img3.jpg" className="absoImg" alt="" /></div>
                                                                <div className="PT_dscr">
                                                                    <h3 className="PT_title">Waldorf salad</h3>
                                                                    <p className="PT_dtls">Unlike the many folk salads featured here, Waldorf salad
                                                                    </p>

                                                                    <div className="price_block">
                                                                        <div className="price">$ 10.00</div>
                                                                        <a href="#" className="card_btn">Add to cart</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                                            <div className="P_itmesbox">
                                                                <div className="PT_image"><img src="images/Salad.jpg" className="absoImg" alt="" /></div>
                                                                <div className="PT_dscr">
                                                                    <h3 className="PT_title">Gado-gado</h3>
                                                                    <p className="PT_dtls">Gado-gado literally means "mix-mix." It's an Indonesian
                                                                    </p>

                                                                    <div className="price_block">
                                                                        <div className="price">$ 10.00</div>
                                                                        <a href="#" className="card_btn">Add to cart</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                                            <div className="P_itmesbox">
                                                                <div className="PT_image"><img src="images/pro_img3.jpg" className="absoImg" alt="" /></div>
                                                                <div className="PT_dscr">
                                                                    <h3 className="PT_title">Larb</h3>
                                                                    <p className="PT_dtls">It's usually served with raw vegetables and sticky rice. vegetables
                                                                    </p>

                                                                    <div className="price_block">
                                                                        <div className="price">$ 10.00</div>
                                                                        <a href="#" className="card_btn">Add to cart</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                                            <div className="P_itmesbox">
                                                                <div className="PT_image"><img src="images/pro_img3.jpg" className="absoImg" alt="" /></div>
                                                                <div className="PT_dscr">
                                                                    <h3 className="PT_title">Cobb salad</h3>
                                                                    <p className="PT_dtls">The only way to make this dish heavier is to add bricks.
                                                                    </p>

                                                                    <div className="price_block">
                                                                        <div className="price">$ 10.00</div>
                                                                        <a href="#" className="card_btn">Add to cart</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                                            <div className="P_itmesbox">
                                                                <div className="PT_image"><img src="images/Salad.jpg" className="absoImg" alt="" /></div>
                                                                <div className="PT_dscr">
                                                                    <h3 className="PT_title">Gado-gado</h3>
                                                                    <p className="PT_dtls">Gado-gado literally means "mix-mix." It's an Indonesian
                                                                    </p>

                                                                    <div className="price_block">
                                                                        <div className="price">$ 10.00</div>
                                                                        <a href="#" className="card_btn">Add to cart</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                                            <div className="P_itmesbox">
                                                                <div className="PT_image"><img src="images/pro_img3.jpg" className="absoImg" alt="" /></div>
                                                                <div className="PT_dscr">
                                                                    <h3 className="PT_title">Larb</h3>
                                                                    <p className="PT_dtls">It's usually served with raw vegetables and sticky rice. vegetables
                                                                    </p>

                                                                    <div className="price_block">
                                                                        <div className="price">$ 10.00</div>
                                                                        <a href="#" className="card_btn">Add to cart</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div id="fries" className=" tab-pane fade">
                                        <div className="content_row">
                                            <div className="left_cntbar">
                                                <div className="pizza_items">
                                                    <div className="row">
                                                        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                                            <div className="P_itmesbox">
                                                                <div className="PT_image"><img src="images/pro_img4.jpg" className="absoImg" alt="" /></div>
                                                                <div className="PT_dscr">
                                                                    <h3 className="PT_title">Potato Wedges</h3>
                                                                    <p className="PT_dtls">Potato wedges sit at the very bottom of the french fry totem pole
                                                                    </p>
                                                                    <div className="PT_optn">
                                                                        <ul className="PT-radio">
                                                                            <li>
                                                                                <input type="radio" name="radio-group-10" id="Medium" checked="checked" />
                                                                                <label for="Medium">Medium</label>
                                                                            </li>
                                                                            <li>
                                                                                <input type="radio" name="radio-group-10" id="Large" />
                                                                                <label for="Large">Large</label>
                                                                            </li>
                                                                            <li>
                                                                                <input type="radio" name="radio-group-10" id="Extra-Large" />
                                                                                <label for="Extra-Large">Extra Large</label>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="price_block">
                                                                        <div className="price">$ 10.00</div>
                                                                        <a href="#" className="card_btn">Add to cart</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                                            <div className="P_itmesbox">
                                                                <div className="PT_image"><img src="images/Fries.jpg" className="absoImg" alt="" /></div>
                                                                <div className="PT_dscr">
                                                                    <h3 className="PT_title">Waffle Fries</h3>
                                                                    <p className="PT_dtls">Waffle fries have the exact opposite problem of the potato wedges
                                                                    </p>
                                                                    <div className="PT_optn">
                                                                        <ul className="PT-radio">
                                                                            <li>
                                                                                <input type="radio" name="radio-group-11" id="radio-28" checked="checked" />
                                                                                <label for="radio-28">Medium</label>
                                                                            </li>
                                                                            <li>
                                                                                <input type="radio" name="radio-group-11" id="radio-29" />
                                                                                <label for="radio-29">Large</label>
                                                                            </li>
                                                                            <li>
                                                                                <input type="radio" name="radio-group-11" id="radio-30" />
                                                                                <label for="radio-30">Extra Large</label>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="price_block">
                                                                        <div className="price">$ 10.00</div>
                                                                        <a href="#" className="card_btn">Add to cart</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                                            <div className="P_itmesbox">
                                                                <div className="PT_image"><img src="images/pro_img4.jpg" className="absoImg" alt="" /></div>
                                                                <div className="PT_dscr">
                                                                    <h3 className="PT_title">Sweet Potato Fries</h3>
                                                                    <p className="PT_dtls">We don't hate sweet potato fries, but we certainly don't love them.
                                                                    </p>
                                                                    <div className="PT_optn">
                                                                        <ul className="PT-radio">
                                                                            <li>
                                                                                <input type="radio" name="radio-group-12" id="radio-31" checked="checked" />
                                                                                <label for="radio-31">Medium</label>
                                                                            </li>
                                                                            <li>
                                                                                <input type="radio" name="radio-group-12" id="radio-32" />
                                                                                <label for="radio-32">Large</label>
                                                                            </li>
                                                                            <li>
                                                                                <input type="radio" name="radio-group-12" id="radio-33" />
                                                                                <label for="radio-33">Extra Large</label>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="price_block">
                                                                        <div className="price">$ 10.00</div>
                                                                        <a href="#" className="card_btn">Add to cart</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                                            <div className="P_itmesbox">
                                                                <div className="PT_image"><img src="images/pro_img4.jpg" className="absoImg" alt="" /></div>
                                                                <div className="PT_dscr">
                                                                    <h3 className="PT_title">Crinkle Cut Fries</h3>
                                                                    <p className="PT_dtls">Crinkle cut fries just look like a good time. They're thick and heavy
                                                                    </p>
                                                                    <div className="PT_optn">
                                                                        <ul className="PT-radio">
                                                                            <li>
                                                                                <input type="radio" name="radio-group-13" id="radio-34" checked="checked" />
                                                                                <label for="radio-34">Medium</label>
                                                                            </li>
                                                                            <li>
                                                                                <input type="radio" name="radio-group-13" id="radio-35" />
                                                                                <label for="radio-35">Large</label>
                                                                            </li>
                                                                            <li>
                                                                                <input type="radio" name="radio-group-13" id="radio-36" />
                                                                                <label for="radio-36">Extra Large</label>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="price_block">
                                                                        <div className="price">$ 10.00</div>
                                                                        <a href="#" className="card_btn">Add to cart</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                                            <div className="P_itmesbox">
                                                                <div className="PT_image"><img src="images/pro_img4.jpg" className="absoImg" alt="" /></div>
                                                                <div className="PT_dscr">
                                                                    <h3 className="PT_title">Steak Fries</h3>
                                                                    <p className="PT_dtls">Steak fries might seem like the less fun-looking version of crinkle cut fries,
                                                                    </p>
                                                                    <div className="PT_optn">
                                                                        <ul className="PT-radio">
                                                                            <li>
                                                                                <input type="radio" name="radio-group-14" id="radio-37" checked="checked" />
                                                                                <label for="radio-37">Medium</label>
                                                                            </li>
                                                                            <li>
                                                                                <input type="radio" name="radio-group-14" id="radio-38" />
                                                                                <label for="radio-38">Large</label>
                                                                            </li>
                                                                            <li>
                                                                                <input type="radio" name="radio-group-14" id="radio-39" />
                                                                                <label for="radio-39">Extra Large</label>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="price_block">
                                                                        <div className="price">$ 10.00</div>
                                                                        <a href="#" className="card_btn">Add to cart</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                                            <div className="P_itmesbox">
                                                                <div className="PT_image"><img src="images/pro_img4.jpg" className="absoImg" alt="" /></div>
                                                                <div className="PT_dscr">
                                                                    <h3 className="PT_title">Standard Fries</h3>
                                                                    <p className="PT_dtls">Ah, the standard fry—the one that started it all. Despite the fact
                                                                    </p>
                                                                    <div className="PT_optn">
                                                                        <ul className="PT-radio">
                                                                            <li>
                                                                                <input type="radio" name="radio-group-15" id="radio-40" checked="checked" />
                                                                                <label for="radio-40">Medium</label>
                                                                            </li>
                                                                            <li>
                                                                                <input type="radio" name="radio-group-15" id="radio-41" />
                                                                                <label for="radio-41">Large</label>
                                                                            </li>
                                                                            <li>
                                                                                <input type="radio" name="radio-group-15" id="radio-42" />
                                                                                <label for="radio-42">Extra Large</label>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="price_block">
                                                                        <div className="price">$ 10.00</div>
                                                                        <a href="#" className="card_btn">Add to cart</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                                            <div className="P_itmesbox">
                                                                <div className="PT_image"><img src="images/pro_img4.jpg" className="absoImg" alt="" /></div>
                                                                <div className="PT_dscr">
                                                                    <h3 className="PT_title">Belgian Fries</h3>
                                                                    <p className="PT_dtls">Belgian fries might look like the typical fry experience, but they most
                                                                    </p>
                                                                    <div className="PT_optn">
                                                                        <ul className="PT-radio">
                                                                            <li>
                                                                                <input type="radio" name="radio-group-16" id="radio-43" checked="checked" />
                                                                                <label for="radio-43">Medium</label>
                                                                            </li>
                                                                            <li>
                                                                                <input type="radio" name="radio-group-16" id="radio-44" />
                                                                                <label for="radio-44">Large</label>
                                                                            </li>
                                                                            <li>
                                                                                <input type="radio" name="radio-group-16" id="radio-45" />
                                                                                <label for="radio-45">Extra Large</label>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="price_block">
                                                                        <div className="price">$ 10.00</div>
                                                                        <a href="#" className="card_btn">Add to cart</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                                            <div className="P_itmesbox">
                                                                <div className="PT_image"><img src="images/pro_img4.jpg" className="absoImg" alt="" /></div>
                                                                <div className="PT_dscr">
                                                                    <h3 className="PT_title">Shoestring Fries</h3>
                                                                    <p className="PT_dtls">Despite the fact that shoestring fries aren't quite as crunchy
                                                                    </p>
                                                                    <div className="PT_optn">
                                                                        <ul className="PT-radio">
                                                                            <li>
                                                                                <input type="radio" name="radio-group-17" id="radio-46" checked="checked" />
                                                                                <label for="radio-46">Medium</label>
                                                                            </li>
                                                                            <li>
                                                                                <input type="radio" name="radio-group-17" id="radio-47" />
                                                                                <label for="radio-47">Large</label>
                                                                            </li>
                                                                            <li>
                                                                                <input type="radio" name="radio-group-17" id="radio-48" />
                                                                                <label for="radio-48">Extra Large</label>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="price_block">
                                                                        <div className="price">$ 10.00</div>
                                                                        <a href="#" className="card_btn">Add to cart</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                                            <div className="P_itmesbox">
                                                                <div className="PT_image"><img src="images/pro_img4.jpg" className="absoImg" alt="" /></div>
                                                                <div className="PT_dscr">
                                                                    <h3 className="PT_title">Curly Fries</h3>
                                                                    <p className="PT_dtls">There's something so satisfying about curly fries. First of all.
                                                                    </p>
                                                                    <div className="PT_optn">
                                                                        <ul className="PT-radio">
                                                                            <li>
                                                                                <input type="radio" name="radio-group-24" id="radio-49" checked="checked" />
                                                                                <label for="radio-49">Medium</label>
                                                                            </li>
                                                                            <li>
                                                                                <input type="radio" name="radio-group-24" id="radio-50" />
                                                                                <label for="radio-50">Large</label>
                                                                            </li>
                                                                            <li>
                                                                                <input type="radio" name="radio-group-24" id="radio-51" />
                                                                                <label for="radio-51">Extra Large</label>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="price_block">
                                                                        <div className="price">$ 10.00</div>
                                                                        <a href="#" className="card_btn">Add to cart</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div id="drinks" className=" tab-pane fade">
                                        <div className="content_row">
                                            <div className="left_cntbar">
                                                <div className="pizza_items">
                                                    <div className="row">
                                                        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                                            <div className="P_itmesbox">
                                                                <div className="PT_image"><img src="images/pro_img5.jpg" className="absoImg" alt="" /></div>
                                                                <div className="PT_dscr">
                                                                    <h3 className="PT_title">Coca-Cola</h3>
                                                                    <p className="PT_dtls">Coca-Cola is the most popular drink in the world
                                                                    </p>
                                                                    <div className="PT_optn">
                                                                        <ul className="PT-radio">
                                                                            <li>
                                                                                <input type="radio" name="radio-group-18" id="radio-52" checked="checked" />
                                                                                <label for="radio-52">Medium</label>
                                                                            </li>
                                                                            <li>
                                                                                <input type="radio" name="radio-group-18" id="radio-53" />
                                                                                <label for="radio-53">Large</label>
                                                                            </li>
                                                                            <li>
                                                                                <input type="radio" name="radio-group-18" id="radio-54" />
                                                                                <label for="radio-54">Extra Large</label>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="price_block">
                                                                        <div className="price">$ 10.00</div>
                                                                        <a href="#" className="card_btn">Add to cart</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                                            <div className="P_itmesbox">
                                                                <div className="PT_image"><img src="images/pro_img5.jpg" className="absoImg" alt="" /></div>
                                                                <div className="PT_dscr">
                                                                    <h3 className="PT_title">Pepsi</h3>
                                                                    <p className="PT_dtls">Pepsi is a cola drink type manufactured by PepsiCo.
                                                                    </p>
                                                                    <div className="PT_optn">
                                                                        <ul className="PT-radio">
                                                                            <li>
                                                                                <input type="radio" name="radio-group-19" id="radio-55" checked="checked" />
                                                                                <label for="radio-55">Medium</label>
                                                                            </li>
                                                                            <li>
                                                                                <input type="radio" name="radio-group-19" id="radio-56" />
                                                                                <label for="radio-56">Large</label>
                                                                            </li>
                                                                            <li>
                                                                                <input type="radio" name="radio-group-19" id="radio-57" />
                                                                                <label for="radio-57">Extra Large</label>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="price_block">
                                                                        <div className="price">$ 10.00</div>
                                                                        <a href="#" className="card_btn">Add to cart</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                                            <div className="P_itmesbox">
                                                                <div className="PT_image"><img src="images/pro_img5.jpg" className="absoImg" alt="" /></div>
                                                                <div className="PT_dscr">
                                                                    <h3 className="PT_title">Red Bull</h3>
                                                                    <p className="PT_dtls">Red Bull energy drink has become the most popular
                                                                    </p>
                                                                    <div className="PT_optn">
                                                                        <ul className="PT-radio">
                                                                            <li>
                                                                                <input type="radio" name="radio-group-20" id="radio-58" checked="checked" />
                                                                                <label for="radio-58">Medium</label>
                                                                            </li>
                                                                            <li>
                                                                                <input type="radio" name="radio-group-20" id="radio-59" />
                                                                                <label for="radio-59">Large</label>
                                                                            </li>
                                                                            <li>
                                                                                <input type="radio" name="radio-group-20" id="radio-60" />
                                                                                <label for="radio-60">Extra Large</label>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="price_block">
                                                                        <div className="price">$ 10.00</div>
                                                                        <a href="#" className="card_btn">Add to cart</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                                            <div className="P_itmesbox">
                                                                <div className="PT_image"><img src="images/pro_img5.jpg" className="absoImg" alt="" /></div>
                                                                <div className="PT_dscr">
                                                                    <h3 className="PT_title">Nestlé S.A</h3>
                                                                    <p className="PT_dtls">Nestle is synonymous with instant coffee, bottled water, crunches
                                                                    </p>
                                                                    <div className="PT_optn">
                                                                        <ul className="PT-radio">
                                                                            <li>
                                                                                <input type="radio" name="radio-group-21" id="radio-61" checked="checked" />
                                                                                <label for="radio-61">Medium</label>
                                                                            </li>
                                                                            <li>
                                                                                <input type="radio" name="radio-group-21" id="radio-62" />
                                                                                <label for="radio-62">Large</label>
                                                                            </li>
                                                                            <li>
                                                                                <input type="radio" name="radio-group-21" id="radio-63" />
                                                                                <label for="radio-63">Extra Large</label>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="price_block">
                                                                        <div className="price">$ 10.00</div>
                                                                        <a href="#" className="card_btn">Add to cart</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                                            <div className="P_itmesbox">
                                                                <div className="PT_image"><img src="images/pro_img5.jpg" className="absoImg" alt="" /></div>
                                                                <div className="PT_dscr">
                                                                    <h3 className="PT_title">Sprite</h3>
                                                                    <p className="PT_dtls">Sprite is a colorless, lime-lemon flavored, non-caffeinated soft.
                                                                    </p>
                                                                    <div className="PT_optn">
                                                                        <ul className="PT-radio">
                                                                            <li>
                                                                                <input type="radio" name="radio-group-22" id="radio-64" checked="checked" />
                                                                                <label for="radio-64">Medium</label>
                                                                            </li>
                                                                            <li>
                                                                                <input type="radio" name="radio-group-22" id="radio-65" />
                                                                                <label for="radio-65">Large</label>
                                                                            </li>
                                                                            <li>
                                                                                <input type="radio" name="radio-group-22" id="radio-66" />
                                                                                <label for="radio-66">Extra Large</label>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="price_block">
                                                                        <div className="price">$ 10.00</div>
                                                                        <a href="#" className="card_btn">Add to cart</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                                            <div className="P_itmesbox">
                                                                <div className="PT_image"><img src="images/pro_img5.jpg" className="absoImg" alt="" /></div>
                                                                <div className="PT_dscr">
                                                                    <h3 className="PT_title">Mountain Dew</h3>
                                                                    <p className="PT_dtls">This is yet another PepsiCo carbonated soft drink.It comes
                                                                    </p>
                                                                    <div className="PT_optn">
                                                                        <ul className="PT-radio">
                                                                            <li>
                                                                                <input type="radio" name="radio-group-23" id="radio-67" checked="checked" />
                                                                                <label for="radio-67">Medium</label>
                                                                            </li>
                                                                            <li>
                                                                                <input type="radio" name="radio-group-23" id="radio-68" />
                                                                                <label for="radio-68">Large</label>
                                                                            </li>
                                                                            <li>
                                                                                <input type="radio" name="radio-group-23" id="radio-69" />
                                                                                <label for="radio-69">Extra Large</label>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="price_block">
                                                                        <div className="price">$ 10.00</div>
                                                                        <a href="#" className="card_btn">Add to cart</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

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