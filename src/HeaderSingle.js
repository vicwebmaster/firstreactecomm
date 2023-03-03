import React from 'react';
import PagesItem from './PagesItem'
import HeaderAction from './HeaderAction'
import {Link} from 'react-router-dom';

const HeaderSingle = () => {
  return (
    <>
    <header className="header axil-header header-style-2">
        <div className="header-top-campaign">
            <div className="container position-relative">
                <div className="campaign-content">
                    <div className="campaign-countdown"></div>
                    <p>Open Doors To A World Of Fashion Get <Link to="/shop">Get your Offer</Link></p>
                </div>
            </div>
            <button className="remove-campaign"><i className="fal fa-times"></i></button>
        </div>
        
        <div className="axil-header-top">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-2 col-sm-3 col-5">
                        <div className="header-brand">
                            <p className="logo logo-dark">
                                <img src="../assets/images/logo/logo.png" alt="Site Logo" />
                            </p>
                            <p className="logo logo-light">
                                <img src="../assets/images/logo/logo-light.png" alt="Site Logo" />
                            </p>
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
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        

        <div className="axil-mainmenu aside-category-menu">
            <div className="container">
                <div className="header-navbar">
                    
                    <div className="header-main-nav">
                        <nav className="mainmenu-nav">
                            <button className="mobile-close-btn mobile-nav-toggler"><i className="fas fa-times"></i></button>
                            <div className="mobile-nav-brand">
                                <p className="logo">
                                    <img src="../assets/images/logo/logo.png" alt="Site Logo" />
                                </p>
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

export default HeaderSingle