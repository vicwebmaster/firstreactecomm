import React from 'react';
import {Link} from 'react-router-dom';


const HeaderII = () => {
  return (
    <>
    <header class="header axil-header header-style-2">
        <div class="header-top-campaign">
            <div class="container position-relative">
                <div class="campaign-content">
                    <div class="campaign-countdown"></div>
                    <p>Open Doors To A World Of Fashion Get <Link><Link to="/shop">Get your Offer</Link></Link></p>
                </div>
            </div>
            <button class="remove-campaign"><i class="fal fa-times"></i></button>
        </div>
        
        <div class="axil-header-top">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-2 col-sm-3 col-5">
                        <div class="header-brand">
                            <Link class="logo logo-dark">
                                <img src="assets/images/logo/logo.png" alt="Site Logo" />
                            </Link>
                            <Link class="logo logo-light">
                                <img src="assets/images/logo/logo-light.png" alt="Site Logo" />
                            </Link>
                        </div>
                    </div>
                    <div class="col-lg-10 col-sm-9 col-7">
                        <div class="header-top-dropdown dropdown-box-style">
                            <div class="axil-search">
                                <button type="submit" class="icon wooc-btn-search">
                                    <i class="far fa-search"></i>
                                </button>
                                <input type="search" class="placeholder product-search-input" name="search2" id="search2" value="" maxlength="128" placeholder="What are you looking for...." autocomplete="off" />
                            </div>
                            <div class="dropdown">
                                <button class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    USD
                                </button>
                                <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item">USD</Link></li>
                                    <li><Link class="dropdown-item">AUD</Link></li>
                                    <li><Link class="dropdown-item">EUR</Link></li>
                                </ul>
                            </div>
                            <div class="dropdown">
                                <button class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    EN
                                </button>
                                <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item">EN</Link></li>
                                    <li><Link class="dropdown-item">ARB</Link></li>
                                    <li><Link class="dropdown-item">SPN</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        

        <div class="axil-mainmenu aside-category-menu">
            <div class="container">
                <div class="header-navbar">
                <div class="header-nav-department">
                        <aside class="header-department">
                            <button class="header-department-text department-title">
                                <span class="icon"><i class="fal fa-bars"></i></span>
                                <span class="text">Categories</span>
                            </button>
                            <nav class="department-nav-menu">
                                <button class="sidebar-close"><i class="fas fa-times"></i></button>
                                <ul class="nav-menu-list">
                                    <li>
                                        <Link class="nav-link has-megamenu">
                                            <span class="menu-icon"><img src="assets/images/product/categories/cat-01.png" alt="Department" /></span>
                                            <span class="menu-text">Fashion</span>
                                        </Link>
                                        <div class="department-megamenu">
                                            <div class="department-megamenu-wrap ">
                                                <div class="department-submenu">
                                                    <h3 class="submenu-heading">Fashion</h3>
                                                    <ul>
                                                        <li><Link><Link to="/shop">T-shirts</Link></Link></li>
                                                        <li><Link to="/shop">Shirts</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <Link class="nav-link has-megamenu">
                                            <span class="menu-icon"><img src="assets/images/product/categories/cat-02.png" alt="Department" /></span>
                                            <span class="menu-text">Electronics</span>
                                        </Link>
                                        <div class="department-megamenu">
                                            <div class="department-megamenu-wrap ">
                                                <div class="department-submenu">
                                                    <h3 class="submenu-heading">Electronics</h3>
                                                    <ul>
                                                        <li><Link><Link to="/shop">Iron</Link></Link></li>
                                                        <li><Link to="/shop">Kettle</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    

                                </ul>
                            </nav>
                        </aside>
                    </div>
                    <div class="header-main-nav">
                        <nav class="mainmenu-nav">
                            <button class="mobile-close-btn mobile-nav-toggler"><i class="fas fa-times"></i></button>
                            <div class="mobile-nav-brand">
                                <Link class="logo">
                                    <img src="assets/images/logo/logo.png" alt="Site Logo" />
                                </Link>
                            </div>
                            <ul class="mainmenu">
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/shop">Shop</Link>
                                </li>
                                <li class="menu-item-has-children">
                                    <Link>Pages</Link>
                                    <ul class="axil-submenu">
                                        <li><Link to="/wishlist">Wishlist</Link></li>
                                        <li><Link to="/cart">Cart</Link></li>
                                        <li><Link to="/checkout">Checkout</Link></li>
                                        <li><Link to="/dashboard">Account</Link></li>
                                        <li><Link to="/register">Sign Up</Link></li>
                                        <li><Link to="/login">Sign In</Link></li>
                                        <li><Link to="/forgotPassword">Forgot Password</Link></li>
                                        <li><Link to="/resetPassword">Reset Password</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="/about">About</Link></li>
                                
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div class="header-action">
                        <ul class="action-list">
                            <li class="axil-search d-sm-none d-block">
                                <Link class="header-search-icon" title="Search">
                                    <i class="flaticon-magnifying-glass"></i>
                                </Link>
                            </li>
                            <li class="wishlist">
                                <Link to="/wishlist">
                                    <i class="flaticon-heart"></i>
                                </Link>
                            </li>
                            <li class="shopping-cart">
                                <Link to="/cart" class="cart-dropdown-btn">
                                    <span class="cart-count">3</span>
                                    <i class="flaticon-shopping-cart"></i>
                                </Link>
                            </li>
                            <li class="my-account">
                                <Link to="/login">
                                    <i class="flaticon-person"></i>
                                </Link>
                                <div class="my-account-dropdown">
                                    <span class="title">QUICKLINKS</span>
                                    <ul>
                                        <li>
                                            <Link to="/dashboard">My Account</Link>
                                        </li>
                                        <li>
                                            <Link>Initiate return</Link>
                                        </li>
                                        <li>
                                            <Link>Support</Link>
                                        </li>
                                        <li>
                                            <Link>Language</Link>
                                        </li>
                                    </ul>
                                    <div class="login-btn">
                                        <Link to="/login" class="axil-btn btn-bg-primary">Login</Link>
                                    </div>
                                    <div class="reg-footer text-center">No account yet? <Link to="/register" class="btn-link">REGISTER HERE.</Link></div>
                                </div>
                            </li>
                            <li class="axil-mobile-toggle">
                                <button class="menu-btn mobile-nav-toggler">
                                    <i class="flaticon-menu-2"></i>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>
    </>
  )
}

export default HeaderII