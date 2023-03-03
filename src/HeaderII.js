import React from 'react';
import PagesItem from './PagesItem'
import HeaderAction from './HeaderAction'
import {Link} from 'react-router-dom';


const HeaderII = () => {
  return (
    <>
    <header className="header axil-header header-style-2">
        <div className="header-top-campaign">
            <div className="container position-relative">
                <div className="campaign-content">
                    <div className="campaign-countdown"></div>
                    <p>Open Doors To A World Of Fashion Get <Link><Link to="/shop">Get your Offer</Link></Link></p>
                </div>
            </div>
            <button className="remove-campaign"><i className="fal fa-times"></i></button>
        </div>
        
        <div className="axil-header-top">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-2 col-sm-3 col-5">
                        <div className="header-brand">
                            <Link className="logo logo-dark">
                                <img src="assets/images/logo/logo.png" alt="Site Logo" />
                            </Link>
                            <Link className="logo logo-light">
                                <img src="assets/images/logo/logo-light.png" alt="Site Logo" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-10 col-sm-9 col-7">
                        <div className="header-top-dropdown dropdown-box-style">
                            <div className="axil-search">
                                <button type="submit" className="icon wooc-btn-search">
                                    <i className="far fa-search"></i>
                                </button>
                                <input type="search" className="placeholder product-search-input" name="search2" id="search2" value="" maxlength="128" placeholder="What are you looking for...." autocomplete="off" />
                            </div>
                            <div className="dropdown">
                                <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    USD
                                </button>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item">USD</Link></li>
                                    <li><Link className="dropdown-item">AUD</Link></li>
                                    <li><Link className="dropdown-item">EUR</Link></li>
                                </ul>
                            </div>
                            <div className="dropdown">
                                <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    EN
                                </button>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item">EN</Link></li>
                                    <li><Link className="dropdown-item">ARB</Link></li>
                                    <li><Link className="dropdown-item">SPN</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        

        <div className="axil-mainmenu aside-category-menu">
            <div className="container">
                <div className="header-navbar">
                <div className="header-nav-department">
                        <aside className="header-department">
                            <button className="header-department-text department-title">
                                <span className="icon"><i className="fal fa-bars"></i></span>
                                <span className="text">Categories</span>
                            </button>
                            <nav className="department-nav-menu">
                                <button className="sidebar-close"><i className="fas fa-times"></i></button>
                                <ul className="nav-menu-list">
                                    <li>
                                        <Link className="nav-link has-megamenu">
                                            <span className="menu-icon"><img src="assets/images/product/categories/cat-01.png" alt="Department" /></span>
                                            <span className="menu-text">Fashion</span>
                                        </Link>
                                        <div className="department-megamenu">
                                            <div className="department-megamenu-wrap ">
                                                <div className="department-submenu">
                                                    <h3 className="submenu-heading">Fashion</h3>
                                                    <ul>
                                                        <li><Link><Link to="/shop">T-shirts</Link></Link></li>
                                                        <li><Link to="/shop">Shirts</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <Link className="nav-link has-megamenu">
                                            <span className="menu-icon"><img src="assets/images/product/categories/cat-02.png" alt="Department" /></span>
                                            <span className="menu-text">Electronics</span>
                                        </Link>
                                        <div className="department-megamenu">
                                            <div className="department-megamenu-wrap ">
                                                <div className="department-submenu">
                                                    <h3 className="submenu-heading">Electronics</h3>
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
                    <div className="header-main-nav">
                        <nav className="mainmenu-nav">
                            <button className="mobile-close-btn mobile-nav-toggler"><i className="fas fa-times"></i></button>
                            <div className="mobile-nav-brand">
                                <Link className="logo">
                                    <img src="assets/images/logo/logo.png" alt="Site Logo" />
                                </Link>
                            </div>
                            <ul className="mainmenu">
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/shop">Shop</Link>
                                </li>
                                <li className="menu-item-has-children">
                                    <Link>Pages</Link>
                                    <PagesItem />
                                </li>
                                <li><Link to="/about">About</Link></li>
                                
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <HeaderAction />
                </div>
            </div>
        </div>
    </header>
    </>
  )
}

export default HeaderII