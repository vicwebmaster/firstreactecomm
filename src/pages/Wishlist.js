import React from 'react'
import {Link} from 'react-router-dom'

const Wishlist = () => {
  return (
    <main className="main-wrapper">

        <div className="axil-wishlist-area axil-section-gap">
            <div className="container">
                <div className="product-table-heading">
                    <h4 className="title">My Wish List on eTrade</h4>
                </div>
                <div className="table-responsive">
                    <table className="table axil-product-table axil-wishlist-table">
                        <thead>
                            <tr>
                                <th scope="col" className="product-remove"></th>
                                <th scope="col" className="product-thumbnail">Product</th>
                                <th scope="col" className="product-title"></th>
                                <th scope="col" className="product-price">Unit Price</th>
                                <th scope="col" className="product-stock-status">Stock Status</th>
                                <th scope="col" className="product-add-cart"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="product-remove"><Link to="/" className="remove-wishlist"><i className="fal fa-times"></i></Link></td>
                                <td className="product-thumbnail"><Link to="/singleProduct"><img src="assets/images/product/electric/product-01.png" alt="Digital Product" /></Link></td>
                                <td className="product-title"><Link to="/singleProduct">Wireless PS Handler</Link></td>
                                <td className="product-price" data-title="Price"><span className="currency-symbol">$</span>124.00</td>
                                <td className="product-stock-status" data-title="Status">In Stock</td>
                                <td className="product-add-cart"><Link to="/cart" className="axil-btn btn-outline">Add to Cart</Link></td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Wishlist