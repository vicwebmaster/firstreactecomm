import React from 'react';
import {Link} from 'react-router-dom';

const Register = () => {
  return (
    <div class="axil-signin-area">

        <div class="signin-header">
            <div class="row align-items-center">
                <div class="col-md-6">
                    <p class="site-logo"><img src="assets/images/logo/logo.png" alt="logo"/></p>
                </div>
                <div class="col-md-6">
                    <div class="singin-header-btn">
                        <p>Already a member?</p>
                        <Link to="/login" class="axil-btn btn-bg-secondary sign-up-btn">Sign In</Link>
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
                        <h3 class="title">I'm New Here</h3>
                        <p class="b2 mb--55">Enter your detail below</p>
                        <form class="singin-form">
                            <div class="form-group">
                                <label>User Name</label>
                                <input type="text" class="form-control" name="username" value="anniemario"/>
                            </div>
                            <div class="form-group">
                                <label>Email</label>
                                <input type="email" class="form-control" name="email" value="annie@example.com"/>
                            </div>
                            <div class="form-group">
                                <label>Password</label>
                                <input type="password" class="form-control" name="password" value="123456789"/>
                            </div>
                            <div class="form-group">
                                <button type="submit" class="axil-btn btn-bg-primary submit-btn">Create Account</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register