import React, {useState, useContext} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import DataContext from '../context/DataContext'


const Register = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {setUsers, users, regSuccessMessage} = useContext(DataContext);

    const register = () => {
        const id = users.length ? users[users.length-1].id+1 : 1;
        const newUser = {id, username, email, password};
        const listUser = [...users, newUser];
        setUsers(listUser);
        localStorage.setItem('users', JSON.stringify(listUser));
        regSuccessMessage()  
        navigate("/login")  
    }
    
  return (
    <div className="axil-signin-area">

        <div className="signin-header">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <Link to="/" className="site-logo"><img src="assets/images/logo/logo.png" alt="logo"/></Link>
                </div>
                <div className="col-md-6">
                    <div className="singin-header-btn">
                        <p>Already a member?</p>
                        <Link to="/login" className="axil-btn btn-bg-secondary sign-up-btn">Sign In</Link>
                    </div>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-xl-4 col-lg-6">
                <div className="axil-signin-banner bg_image bg_image--10">
                    <h3 className="title">We Offer the Best Products</h3>
                </div>
            </div>
            <div className="col-lg-6 offset-xl-2">
                <div className="axil-signin-form-wrap">
                    <div className="axil-signin-form">
                        <h3 className="title">I'm New Here</h3>
                        <p className="b2 mb--55">Enter your detail below</p>
                        <form className="singin-form">
                            <div className="form-group">
                                <label>User Name</label>
                                <input 
                                    type="text" 
                                    placeholder='Username'
                                    className="form-control" 
                                    value={username}
                                    onChange={(e)=>setUsername(e.target.value)}
                                />
                            </div>
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
                            <div className="form-group">
                                <button type="button" onClick={register} className="axil-btn btn-bg-primary submit-btn">Create Account</button>
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