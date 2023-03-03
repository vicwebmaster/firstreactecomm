import React, {useContext, useEffect} from 'react'
import {Link} from 'react-router-dom';
import DataContext from '../context/DataContext';

const MyDashboard = () => {

    const {logged, checkLogged, setLogged} = useContext(DataContext);

    useEffect(()=>{
        const log = JSON.parse(localStorage.getItem('logged'));
        setLogged(log)
    },[setLogged])

    const showDiv = (div) => {
        alert(div)
    }

    const logout = () => {
        localStorage.removeItem('logged')
        window.location.replace("/")
    }

    const x = checkLogged();
  return (
    <>
    {x ? (
    <main className="main-wrapper">
   
        <div className="axil-breadcrumb-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-8">
                        <div className="inner">
                            <ul className="axil-breadcrumb">
                                <li className="axil-breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="separator"></li>
                                <li className="axil-breadcrumb-item active" aria-current="page">My Account</li>
                            </ul>
                            <h1 className="title">Explore All Products</h1>
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
        
        <div className="axil-dashboard-area axil-section-gap">
            <div className="container">
                <div className="axil-dashboard-warp">
                    <div className="axil-dashboard-author">
                        <div className="media">
                            <div className="thumbnail">
                                <img src="assets/images/product/author1.png" alt="Hello Annie"/>
                            </div>
                            <div className="media-body">
                                <h5 className="title mb-0">Hello {logged[0].username}</h5>
                                <span className="joining-date">{logged[0].email}</span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-3 col-md-4">
                            <aside className="axil-dashboard-aside">
                                <nav className="axil-dashboard-nav">
                                    <div className="nav nav-tabs" role="tablist">
                                        <p className="nav-item nav-link active" style={{cursor:'pointer'}} onClick={()=>showDiv('nav-dashboard')}><i className="fas fa-th-large"></i>Dashboard</p>
                                        <p className="nav-item nav-link"  style={{cursor:'pointer'}} onClick={()=>showDiv('nav-orders')}><i className="fas fa-shopping-basket"></i>Orders</p>
                                        <p className="nav-item nav-link"  style={{cursor:'pointer'}} onClick={()=>showDiv('nav-downloads')} ><i className="fas fa-file-download"></i>Downloads</p>
                                        <p className="nav-item nav-link"  style={{cursor:'pointer'}} onClick={()=>showDiv('nav-address')} ><i className="fas fa-home"></i>Addresses</p>
                                        <p className="nav-item nav-link"  style={{cursor:'pointer'}} onClick={()=>showDiv('nav-account')}><i className="fas fa-user"></i>Account Details</p>
                                        <Link className="nav-item nav-link"  onClick={()=>logout()}><i className="fal fa-sign-out"></i>Logout</Link>
                                    </div>
                                </nav>
                            </aside>
                        </div>
                        <div className="col-xl-9 col-md-8">
                            <div className="tab-content">
                                <div className="tab-pane fade show active" id="nav-dashboard" role="tabpanel">
                                    <div className="axil-dashboard-overview">
                                        <div className="welcome-text">Hello {logged[0].username} (not <span>{logged[0].username}?</span> <Link onClick={()=>logout()}>Log Out</Link>)</div>
                                        <p>From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.</p>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="nav-orders" role="tabpanel">
                                    <div className="axil-dashboard-order">
                                        <div className="table-responsive">
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Order</th>
                                                        <th scope="col">Date</th>
                                                        <th scope="col">Status</th>
                                                        <th scope="col">Total</th>
                                                        <th scope="col">Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">#6523</th>
                                                        <td>September 10, 2020</td>
                                                        <td>Processing</td>
                                                        <td>$326.63 for 3 items</td>
                                                        <td><button className="axil-btn view-btn">View</button></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">#6523</th>
                                                        <td>September 10, 2020</td>
                                                        <td>On Hold</td>
                                                        <td>$326.63 for 3 items</td>
                                                        <td><button className="axil-btn view-btn">View</button></td>
                                                    </tr>
                                                    
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="nav-downloads" role="tabpanel">
                                    <div className="axil-dashboard-order">
                                        <p>You don't have any download</p>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="nav-address" role="tabpanel">
                                    <div className="axil-dashboard-address">
                                        <p className="notice-text">The following addresses will be used on the checkout page by default.</p>
                                        <div className="row row--30">
                                            <div className="col-lg-6">
                                                <div className="address-info mb--40">
                                                    <div className="addrss-header d-flex align-items-center justify-content-between">
                                                        <h4 className="title mb-0">Shipping Address</h4>
                                                        <p className="address-edit"><i className="far fa-edit"></i></p>
                                                    </div>
                                                    <ul className="address-details">
                                                        <li>Name: Annie Mario</li>
                                                        <li>Email: annie@example.com</li>
                                                        <li>Phone: 1234 567890</li>
                                                        <li className="mt--30">7398 Smoke Ranch Road 
                                                        Las Vegas, Nevada 89128</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="address-info">
                                                    <div className="addrss-header d-flex align-items-center justify-content-between">
                                                        <h4 className="title mb-0">Billing Address</h4>
                                                        <p className="address-edit"><i className="far fa-edit"></i></p>
                                                    </div>
                                                    <ul className="address-details">
                                                        <li>Name: Annie Mario</li>
                                                        <li>Email: annie@example.com</li>
                                                        <li>Phone: 1234 567890</li>
                                                        <li className="mt--30">7398 Smoke Ranch Road
                                                        Las Vegas, Nevada 89128</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="nav-account" role="tabpanel">
                                    <div className="col-lg-9">
                                        <div className="axil-dashboard-account">
                                            <form className="account-details-form">
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div className="form-group">
                                                            <label>First Name</label>
                                                            <input type="text" className="form-control" value="Annie"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="form-group">
                                                            <label>Last Name</label>
                                                            <input type="text" className="form-control" value="Mario"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="form-group mb--40">
                                                            <label>Country/ Region</label>
                                                            <select className="select2">
                                                                <option value="1">United Kindom (UK)</option>
                                                                <option value="1">United States (USA)</option>
                                                                <option value="1">United Arab Emirates (UAE)</option>
                                                                <option value="1">Australia</option>
                                                            </select>
                                                            <p className="b3 mt--10">This will be how your name will be displayed in the account section and in reviews</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <h5 className="title">Password Change</h5>
                                                        <div className="form-group">
                                                            <label>Password</label>
                                                            <input type="password" className="form-control" value="123456789101112131415"/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>New Password</label>
                                                            <input type="password" className="form-control"/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Confirm New Password</label>
                                                            <input type="password" className="form-control"/>
                                                        </div>
                                                        <div className="form-group mb--0">
                                                            <input type="submit" className="axil-btn" value="Save Changes"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="axil-newsletter-area axil-section-gap pt--0">
            <div className="container">
                <div className="etrade-newsletter-wrapper bg_image bg_image--5">
                    <div className="newsletter-content">
                        <span className="title-highlighter highlighter-primary2"><i className="fas fa-envelope-open"></i>Newsletter</span>
                        <h2 className="title mb--40 mb_sm--30">Get weekly update</h2>
                        <div className="input-group newsletter-form">
                            <div className="position-relative newsletter-inner mb--15">
                                <input placeholder="example@gmail.com" type="text"/>
                            </div>
                            <button type="submit" className="axil-btn mb--15">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        
    </main>
    ) : 
        <div className="bg-danger text-white">You're not Permitted to View the Resources of this page</div>
    }

</>
  )
}

export default MyDashboard