import React, {useContext} from 'react'
import {Link, useNavigate  } from 'react-router-dom'
import CartItem from '../CartItem'
import DataContext from '../context/DataContext'

const Cart = () => {
    const navigate = useNavigate()
    const {clearCartMessage} = useContext(DataContext);
    const clearCart = () => {
        localStorage.removeItem('cart');
        clearCartMessage()
        navigate("/cart")
        window.location.reload();
    }
  return (
    <main className="main-wrapper">

        <div className="axil-product-cart-area axil-section-gap">
            <div className="container">
                <div className="axil-product-cart-wrap">
                    <div className="product-table-heading">
                        <h4 className="title">Your Cart</h4>
                        <p className="cart-clear" onClick={clearCart} style={{cursor:'pointer'}}>Clear Shoping Cart</p>
                    </div>
                    <div className="table-responsive">
                        <table className="table axil-product-table axil-cart-table mb--40">
                            <thead>
                                <tr>
                                    <th scope="col" className="product-remove"></th>
                                    <th scope="col" className="product-thumbnail">Product</th>
                                    <th scope="col" className="product-title"></th>
                                    <th scope="col" className="product-price">Price</th>
                                    <th scope="col" className="product-quantity">Quantity</th>
                                    <th scope="col" className="product-subtotal">Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                                <CartItem />
                                
                            </tbody>
                        </table>
                    </div>
                    <div className="row">
                        <div className="col-xl-5 col-lg-7 offset-xl-7 offset-lg-5">
                            <div className="axil-order-summery mt--80">
                                <h5 className="title mb--20">Order Summary</h5>
                                <div className="summery-table-wrap">
                                    <table className="table summery-table mb--30">
                                        <tbody>
                                            <tr className="order-subtotal">
                                                <td>Subtotal</td>
                                                <td>$117.00</td>
                                                {/* <td>{cartItem && cartItem.map((cartproduct)=>(
                                                    (products.filter((x)=>{return x.id===cartproduct.productid}).reduce((a,v) =>  a = a + v.price , 0 ))
                                                ))}</td> */}
                                            </tr>
                                            <tr className="order-shipping">
                                                <td>Shipping</td>
                                                <td>
                                                    <div className="input-group">
                                                        <input type="radio" id="radio1" name="shipping" checked/>
                                                        <label for="radio1">Free Shippping</label>
                                                    </div>
                                                    <div className="input-group">
                                                        <input type="radio" id="radio2" name="shipping"/>
                                                        <label for="radio2">Local: $35.00</label>
                                                    </div>
                                                    <div className="input-group">
                                                        <input type="radio" id="radio3" name="shipping"/>
                                                        <label for="radio3">Flat rate: $12.00</label>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="order-tax">
                                                <td>State Tax</td>
                                                <td>$8.00</td>
                                            </tr>
                                            <tr className="order-total">
                                                <td>Total</td>
                                                <td className="order-total-amount">$125.00</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <Link to="/checkout" className="axil-btn btn-bg-primary checkout-btn">Process to Checkout</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </main>
  )
}

export default Cart