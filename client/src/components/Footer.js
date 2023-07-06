import React from 'react'

function Footer() {
  return (
<>
<section>
            <div className="quick_order">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="main_quickorder">
                                <h3 className="title">Call Us for Quick Order</h3>
                                <div className="cntct typewriter-effect"><span className="call_desk"><a href="tel:+01234567890" id="typewriter_num"></a></span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

<footer>
<div className="main_footer">
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="M_footer">
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 quick_links">
                    <div className="title">Quick Links</div>
                        <div className="main_cnt">
                            <ul>
                                <li><a href="about.html" className="trans" title="About us">About us</a></li>
                                <li><a href="faq.html" className="trans" title="Faq">Faq</a></li>
                                <li><a href="contactus.html" className="trans" title="Contacts">Contacts</a></li>
                                <li><a href="login.html" className="trans" title="Login">Login</a></li>
                                <li><a href="login.html" className="trans" title="Register">Register</a></li>
                                <li><a href="terms_conditions.html" className="trans" title="Terms and conditions">Terms and conditions</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 col-xs-12 location">
                        <div className="title">Our Location</div>
                        <div className="main_cnt"> <span className="address"><a href="#">234 Main Street, Uni 01, New Mexico City</a></span> <span className="time1">Mon - Fri: 08:00 am - 10:00 pm</span> <span className="time2">Sat - Sun: 10:00 am - 11:00 pm<strong></strong></span> <span className="conact"><a href="tel:+01234567890">+01 (234) 56 56 789</a></span> </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 subscribe">
                        <div className="title">Subscribe Us</div>
                        <div className="main_cnt">
                            <p className="sbcr_label">Subscribe to the La Vie newsletter to
                                <br/> get regular update about offers</p>
                            <form method="post" id="subscribeform" action="http://glorywebsdemo.com/themeforest/html/carveordering/thank-you.html">
                                <div className="sbcrb_input">
                                    <input type="text" name="subscribeemail" className="form-control" placeholder="Enter your email"/>
                                    <button className="subscribebutton send" name="getbutton" type="submit">
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div className="F_footer">
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="payment"> <span>Payment Options</span> <span className="pay_cards"><img src="assets/images/card_img.png" alt=""/></span> </div>
                <div className="social">
                    <ul>
                        <li><a href="#" className="trans" title="Facebook"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#" className="trans" title="Twitter"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#" className="trans" title="Google Plus"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                        <li><a href="#" className="trans" title="Instagram"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                        <li><a href="#" className="trans" title="Pinterest"><i className="fa fa-pinterest-p" aria-hidden="true"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
<div className="copyright">
    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <p>© <a href="index.html" className="trans" title="Crave Ordering">Crave Ordering</a> <script type="text/javascript">document.write(new Date().getFullYear());</script>, All rights reserved </p>
    </div>
</div>
</footer>

</>
  )
}

export default Footer