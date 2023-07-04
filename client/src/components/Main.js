import React from 'react'

function Main() {
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
                               
                               {/* Populate Food Data */}
                               
                               
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                            <ul>

                                                <li>
                                                    <div className="card">
                                                        <div className="C_img">
                                                           <img src="assets/images/pro_img1.jpg" className="absoImg" alt=""/> </div>
                                                        <div className="C_desc">
                                                            <h3 className="title">Mexican Pizza</h3>
                                                            <p className="desc">Our standard “Mexican” is loaded</p>
                                                            <div className="price_block">
                                                                <div className="price">$ 10.00</div>
                                                                <a href="#" className="card_btn">Add to cart</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                            <ul>
                                                <li>
                                                    <div className="card">
                                                        <div className="C_img"> 
                                                        <img src="assets/images/pro_img2.jpg" className="absoImg" alt=""/> </div>
                                                        <div className="C_desc">
                                                            <h3 className="title">Broadway</h3>
                                                            <p className="desc">Double Bacon Cheese Burger, Lettuce. </p>
                                                            <div className="price_block">
                                                                <div className="price">$ 9.89</div>
                                                                <a href="#" className="card_btn">Add to cart</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                            <ul>
                                                <li>
                                                    <div className="card">
                                                        <div className="C_img"> 
                                                        <img src="assets/images/pro_img3.jpg" className="absoImg" alt=""/> </div>
                                                        <div className="C_desc">
                                                            <h3 className="title">Garbage Salad</h3>
                                                            <p className="desc">Everything includes, tuscan spring mix </p>
                                                            <div className="price_block">
                                                                <div className="price">$ 4.10</div>
                                                                <a href="#" className="card_btn">
                                    Add to cart
                                  </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                            <ul>
                                                <li>
                                                    <div className="card">
                                                        <div className="C_img"> 
                                                        <img src="assets/images/pro_img4.jpg" className="absoImg" alt=""/> </div>
                                                        <div className="C_desc">
                                                            <h3 className="title">Cheese Fries</h3>
                                                            <p className="desc">Our fries are prepared in batches</p>
                                                            <div className="price_block">
                                                                <div className="price">$ 4.79</div>
                                                                <a href="#" className="card_btn">Add to cart</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                            <ul>
                                                <li>
                                                    <div className="card">
                                                        <div className="C_img"> 
                                                        <img src="assets/images/pro_img5.jpg" className="absoImg" alt=""/> </div>
                                                        <div className="C_desc">
                                                            <h3 className="title">Coca-Cola</h3>
                                                            <p className="desc">Coca-Cola is the most popular drink</p>
                                                            <div className="price_block">
                                                                <div className="price">$ 10.00</div>
                                                                <a href="#" className="card_btn">Add to cart</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                            <ul>
                                                <li>
                                                    <div className="card">
                                                        <div className="C_img"> 
                                                        <img src="assets/images/pro_img2.jpg" className="absoImg" alt=""/> </div>
                                                        <div className="C_desc">
                                                            <h3 className="title">Garlic Bread</h3>
                                                            <p className="desc">Butter, olive oil, garlic, crusty bread</p>
                                                            <div className="price_block">
                                                                <div className="price">$ 5.00</div>
                                                                <a href="#" className="card_btn">Add to cart</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                            <ul>
                                                <li>
                                                    <div className="card">
                                                        <div className="C_img"> 
                                                        <img src="assets/images/pro_img3.jpg" className="absoImg" alt=""/> </div>
                                                        <div className="C_desc">
                                                            <h3 className="title">Red Sauce Pasta</h3>
                                                            <p className="desc">Red tomato sauce with mix veggies.</p>
                                                            <div className="price_block">
                                                                <div className="price">$ 8.00</div>
                                                                <a href="#" className="card_btn">Add to cart</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                            <ul>
                                                <li>
                                                    <div className="card">
                                                        <div className="C_img">
                                                           <img src="assets/images/pro_img4.jpg" className="absoImg" alt=""/> </div>
                                                        <div className="C_desc">
                                                            <h3 className="title">Schezwan Sandwich</h3>
                                                            <p className="desc">Spicy vegetables and schezwan sauce</p>
                                                            <div className="price_block">
                                                                <div className="price">$ 3.00</div>
                                                                <a href="#" className="card_btn">Add to cart</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>



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