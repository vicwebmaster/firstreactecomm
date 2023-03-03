import React, {useContext, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom';
import DataContext from '../context/DataContext';

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {users, loginFailedMessage, setLogged} = useContext(DataContext);

    const login = () => {
        const data = users.find((item) => ((item.email).toString() === email && (item.password).toString() === password))
        if (data===undefined) {
            loginFailedMessage()
        } else {
            const loggedData = [{id: 1, username: data.username, email: data.email, password: data.password}]
            setLogged(loggedData);
            localStorage.setItem('logged', JSON.stringify(loggedData));
            navigate("/dashboard") 
        }
        
    }

  return (
    <div className="axil-signin-area">

        <div className="signin-header">
            <div className="row align-items-center">
                <div className="col-sm-4">
                    <Link to="/" className="site-logo"><img src="assets/images/logo/logo.png" alt="logo" /></Link>
                </div>
                <div className="col-sm-8">
                    <div className="singin-header-btn">
                        <p>Not a member?</p>
                        <Link to="/register" className="axil-btn btn-bg-secondary sign-up-btn">Sign Up Now</Link>
                    </div>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-xl-4 col-lg-6">
                <div className="axil-signin-banner bg_image bg_image--9">
                    <h3 className="title">We Offer the Best Products</h3>
                </div>
            </div>
            <div className="col-lg-6 offset-xl-2">
                <div className="axil-signin-form-wrap">
                    <div className="axil-signin-form">
                        <h3 className="title">Sign in to eTrade.</h3>
                        <p className="b2 mb--55">Enter your detail below</p>
                        <form className="singin-form" action='/'>
                            <div className="form-group">
                                <label>Email</label>
                                <input 
                                    type="email" 
                                    placeholder='example@gmail.com'
                                    className="form-control" 
                                    value={email}
                                    onChange={(e)=>setEmail(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input 
                                    type="password" 
                                    placeholder='********'
                                    className="form-control" 
                                    value={password}
                                    onChange={(e)=>setPassword(e.target.value)}
                                />
                            </div>
                            <div className="form-group d-flex align-items-center justify-content-between">
                                <button type="button" onClick={login} className="axil-btn btn-bg-primary submit-btn">Sign In</button>
                                <Link to="/forgotPassword" className="forgot-btn">Forget password?</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login