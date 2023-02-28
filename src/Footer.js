import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <footer class="axil-footer-area footer-style-2">
      
        <div class="footer-top separator-top">
            <div class="container">
                <div class="row">
                  
                    <div class="col-lg-3 col-sm-6">
                        <div class="axil-footer-widget">
                            <h5 class="widget-title">Support</h5>
                            <div class="logo mb--30">
                              <p>
                                  <img class="light-logo" src="assets/images/logo/logo.png" alt="Logo Images" />
                              </p>
                            </div>
                            <div class="inner">
                                <p>685 Market Street, 
                                Las Vegas, LA 95820, 
                                United States.
                                </p>
                                <ul class="support-list-item">
                                    <li><Link to="mailto:example@domain.com"><i class="fal fa-envelope-open"></i> example@domain.com</Link></li>
                                    <li><Link to="tel:(+01)850-315-5862"><i class="fal fa-phone-alt"></i> (+01) 850-315-5862</Link></li>
                                    <li><i class="fal fa-map-marker-alt"></i> 685 Market Street, Las Vegas, LA 95820, United States.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-3 col-sm-6">
                        <div class="axil-footer-widget">
                            <h5 class="widget-title">Account</h5>
                            <div class="inner">
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
                    
                    <div class="col-lg-3 col-sm-6">
                        <div class="axil-footer-widget">
                            <h5 class="widget-title">Quick Link</h5>
                            <div class="inner">
                                <ul>
                                    <li><Link to="/">Privacy Policy</Link></li>
                                    <li><Link to="/">Terms Of Use</Link></li>
                                    <li><Link to="/">FAQ</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-3 col-sm-6">
                        <div class="axil-footer-widget">
                            <h5 class="widget-title">Download App</h5>
                            <div class="inner">
                                <span>Save $3 With App & New User only</span>
                                <div class="download-btn-group">
                                    <div class="qr-code">
                                        <img src="assets/images/others/qr.png" alt="Axilthemes" />
                                    </div>
                                    <div class="app-link">
                                        <p>
                                            <img src="assets/images/others/app-store.png" alt="App Store" />
                                        </p>
                                        <p>
                                            <img src="assets/images/others/play-store.png" alt="Play Store" />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        
        <div class="copyright-area copyright-default separator-top">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-xl-4">
                        <div class="social-share">
                            <Link><i class="fab fa-facebook-f"></i></Link>
                            <Link><i class="fab fa-instagram"></i></Link>
                            <Link><i class="fab fa-twitter"></i></Link>
                            <Link><i class="fab fa-linkedin-in"></i></Link>
                            <Link><i class="fab fa-discord"></i></Link>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-12">
                        <div class="copyright-left d-flex flex-wrap justify-content-center">
                            <ul class="quick-link">
                                <li>© 2022. All rights reserved by <Link>Axilthemes</Link>.</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-12">
                        <div class="copyright-right d-flex flex-wrap justify-content-xl-end justify-content-center align-items-center">
                            <span class="card-text">Accept For</span>
                            <ul class="payment-icons-bottom quick-link">
                                <li><img src="assets/images/icons/cart/cart-1.png" alt="paypal cart" /></li>
                                <li><img src="assets/images/icons/cart/cart-2.png" alt="paypal cart" /></li>
                                <li><img src="assets/images/icons/cart/cart-5.png" alt="paypal cart" /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </footer>
  )
}

export default Footer