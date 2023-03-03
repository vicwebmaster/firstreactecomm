import React from 'react'
import {Link} from 'react-router-dom'

const FooterSingle = () => {
  return (
    <footer className="axil-footer-area footer-style-2">
      
        <div className="footer-top separator-top">
            <div className="container">
                <div className="row">
                  
                    <div className="col-lg-3 col-sm-6">
                        <div className="axil-footer-widget">
                            <h5 className="widget-title">Support</h5>
                            <div className="logo mb--30">
                              <p>
                                  <img className="light-logo" src="../assets/images/logo/logo.png" alt="Logo Images" />
                              </p>
                            </div>
                            <div className="inner">
                                <p>685 Market Street, 
                                Las Vegas, LA 95820, 
                                United States.
                                </p>
                                <ul className="support-list-item">
                                    <li><Link to="mailto:example@domain.com"><i className="fal fa-envelope-open"></i> example@domain.com</Link></li>
                                    <li><Link to="tel:(+01)850-315-5862"><i className="fal fa-phone-alt"></i> (+01) 850-315-5862</Link></li>
                                    <li><i className="fal fa-map-marker-alt"></i> 685 Market Street, Las Vegas, LA 95820, United States.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-3 col-sm-6">
                        <div className="axil-footer-widget">
                            <h5 className="widget-title">Account</h5>
                            <div className="inner">
                                <ul>
                                    <li><Link to="/dashboard">My Account</Link></li>
                                    <li><Link to="/register">Login / Register</Link></li>
                                    <li><Link to="/cart">Cart</Link></li>
                                    <li><Link to="/wishlist">Wishlist</Link></li>
                                    <li><Link to="/shop">Shop</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-3 col-sm-6">
                        <div className="axil-footer-widget">
                            <h5 className="widget-title">Quick Link</h5>
                            <div className="inner">
                                <ul>
                                    <li><Link to="/">Privacy Policy</Link></li>
                                    <li><Link to="/">Terms Of Use</Link></li>
                                    <li><Link to="/">FAQ</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-3 col-sm-6">
                        <div className="axil-footer-widget">
                            <h5 className="widget-title">Download App</h5>
                            <div className="inner">
                                <span>Save $3 With App & New User only</span>
                                <div className="download-btn-group">
                                    <div className="qr-code">
                                        <img src="../assets/images/others/qr.png" alt="Axilthemes" />
                                    </div>
                                    <div className="app-link">
                                        <p>
                                            <img src="../assets/images/others/app-store.png" alt="App Store" />
                                        </p>
                                        <p>
                                            <img src="../assets/images/others/play-store.png" alt="Play Store" />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        
        <div className="copyright-area copyright-default separator-top">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-4">
                        <div className="social-share">
                            <Link><i className="fab fa-facebook-f"></i></Link>
                            <Link><i className="fab fa-instagram"></i></Link>
                            <Link><i className="fab fa-twitter"></i></Link>
                            <Link><i className="fab fa-linkedin-in"></i></Link>
                            <Link><i className="fab fa-discord"></i></Link>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-12">
                        <div className="copyright-left d-flex flex-wrap justify-content-center">
                            <ul className="quick-link">
                                <li>© 2022. All rights reserved by <Link>Axilthemes</Link>.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-12">
                        <div className="copyright-right d-flex flex-wrap justify-content-xl-end justify-content-center align-items-center">
                            <span className="card-text">Accept For</span>
                            <ul className="payment-icons-bottom quick-link">
                                <li><img src="../assets/images/icons/cart/cart-1.png" alt="paypal cart" /></li>
                                <li><img src="../assets/images/icons/cart/cart-2.png" alt="paypal cart" /></li>
                                <li><img src="../assets/images/icons/cart/cart-5.png" alt="paypal cart" /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </footer>
  )
}

export default FooterSingle