import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import DataContext from './context/DataContext';

const PagesItem = () => {
    
    const {checkLogged} = useContext(DataContext);
  return (
    <>
    {checkLogged() ? (
        <ul className="axil-submenu">       
            <li><Link to="/wishlist">Wishlist</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/dashboard">Account</Link></li>
            <li><Link to="/resetPassword">Reset Password</Link></li>
        </ul>
    ) : (
        <ul className="axil-submenu"> 
            <li><Link to="/register">Sign Up</Link></li>
            <li><Link to="/login">Sign In</Link></li>
            <li><Link to="/forgotPassword">Forgot Password</Link></li>
        </ul>
    )}
    </>
  )
}

export default PagesItem