import React from 'react'
import {Link} from 'react-router-dom';

const ForgotPassword = () => {
  return (
    <div class="axil-signin-area">

        <div class="signin-header">
            <div class="row align-items-center">
                <div class="col-xl-4 col-sm-6">
                    <p class="site-logo"><img src="assets/images/logo/logo.png" alt="logo"/></p>
                </div>
                <div class="col-md-2 d-lg-block d-none">
                    <Link to="/" class="back-btn"><i class="far fa-angle-left"></i></Link>
                </div>
                <div class="col-xl-6 col-lg-4 col-sm-6">
                    <div class="singin-header-btn">
                        <p>Already a member?</p>
                        <Link to="/login" class="sign-up-btn axil-btn btn-bg-secondary">Sign In</Link>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-xl-4 col-lg-6">
                <div class="axil-signin-banner bg_image bg_image--10">
                    <h3 class="title">We Offer the Best Products</h3>
                </div>
            </div>
            <div class="col-lg-6 offset-xl-2">
                <div class="axil-signin-form-wrap">
                    <div class="axil-signin-form">
                        <h3 class="title">Forgot Password?</h3>
                        <p class="b2 mb--55">Enter the email address you used when you joined and we’ll send you instructions to reset your password.</p>
                        <form class="singin-form">
                            <div class="form-group">
                                <label>Email</label>
                                <input type="email" class="form-control" name="email" value="annie@example.com"/>
                            </div>
                            <div class="form-group">
                                <button type="submit" class="axil-btn btn-bg-primary submit-btn">Send Reset Instructions</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ForgotPassword