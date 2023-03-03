import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import DataContext from './context/DataContext'

const HeaderAction = () => {
    const {cartItem, checkLogged} = useContext(DataContext);
  return (
    <>
    
    <div className="header-action">
        <ul className="action-list">
            <li className="axil-search d-sm-none d-block">
                <Link className="header-search-icon" title="Search">
                    <i className="flaticon-magnifying-glass"></i>
                </Link>
            </li>
            {checkLogged() ? (
            <li className="wishlist">
                <Link to="/wishlist">
                    <i className="flaticon-heart"></i>
                </Link>
            </li>
            ) : "" }
            <li className="shopping-cart">
                <Link to="/cart" className="cart-dropdown-btn">
                    <span className="cart-count">{cartItem.length}</span>
                    <i className="flaticon-shopping-cart"></i>
                </Link>
            </li>
            <li className="my-account">
                {!checkLogged() ? 
                    <Link to="/login">
                        <i className="flaticon-person"></i>
                    </Link>
                : 
                    <Link to="/dashboard">
                        <i className="flaticon-person"></i>
                    </Link>
                }
                <div className="my-account-dropdown">
                    <span className="title">QUICKLINKS</span>
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
                    <div className="login-btn">
                        <Link to="/login" className="axil-btn btn-bg-primary">Login</Link>
                    </div>
                    <div className="reg-footer text-center">No account yet? <Link to="/register" className="btn-link">REGISTER HERE.</Link></div>
                </div>
            </li>
            <li className="axil-mobile-toggle">
                <button className="menu-btn mobile-nav-toggler">
                    <i className="flaticon-menu-2"></i>
                </button>
            </li>
        </ul>
    </div>
    </>
  )
}

export default HeaderAction