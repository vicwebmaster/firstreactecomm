import React from 'react'
import {Link} from 'react-router-dom';

const Contact = () => {
  return (
    <main className="main-wrapper">
        <div className="axil-breadcrumb-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-8">
                        <div className="inner">
                            <ul className="axil-breadcrumb">
                                <li className="axil-breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="separator"></li>
                                <li className="axil-breadcrumb-item active" aria-current="page">Contact</li>
                            </ul>
                            <h1 className="title">Contact With Us</h1>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-4">
                        <div className="inner">
                            <div className="bradcrumb-thumb">
                                <img src="assets/images/product/product-45.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="axil-contact-page-area axil-section-gap">
            <div className="container">
                <div className="axil-contact-page">
                    <div className="row row--30">
                        <div className="col-lg-8">
                            <div className="contact-form">
                                <h3 className="title mb--10">We would love to hear from you.</h3>
                                <p>If you’ve got great products your making or looking to work with us then drop us a line.</p>
                                <form id="contact-form" method="POST" action="/" className="axil-contact-form">
                                    <div className="row row--10">
                                        <div className="col-lg-4">
                                            <div className="form-group">
                                                <label for="contact-name">Name <span>*</span></label>
                                                <input type="text" name="contact-name" id="contact-name"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="form-group">
                                                <label for="contact-phone">Phone <span>*</span></label>
                                                <input type="text" name="contact-phone" id="contact-phone"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="form-group">
                                                <label for="contact-email">E-mail <span>*</span></label>
                                                <input type="email" name="contact-email" id="contact-email"/>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label for="contact-message">Your Message</label>
                                                <textarea name="contact-message" id="contact-message" cols="1" rows="2"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group mb--0">
                                                <button name="submit" type="submit" id="submit" className="axil-btn btn-bg-primary">Send Message</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="contact-location mb--40">
                                <h4 className="title mb--20">Our Store</h4>
                                <p className="address mb--20">8212 E. Glen Creek Street Orchard Park, NY 14127, United States of America</p>
                                <p className="phone">Phone: +123 456 7890</p>
                                <p className="email">Email: Hello@etrade.com</p>
                            </div>
                            <div className="contact-career mb--40">
                                <h4 className="title mb--20">Careers</h4>
                                <p>Instead of buying six things, one that you really like.</p>
                            </div>
                            <div className="opening-hour">
                                <h4 className="title mb--20">Opening Hours:</h4>
                                <p>Monday to Saturday: 9am - 10pm
                                    Sundays: 10am - 6pm
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="axil-google-map-wrap axil-section-gap pb--0">
                    <div className="mapouter">
                        <div className="gmap_canvas">
                            <iframe title='location' width="1080" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=melbourne&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"></iframe>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        
    </main>
  )
}

export default Contact