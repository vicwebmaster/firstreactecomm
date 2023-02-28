import React from 'react'
import {Link} from 'react-router-dom'

const Wishlist = () => {
  return (
    <main class="main-wrapper">

        <div class="axil-wishlist-area axil-section-gap">
            <div class="container">
                <div class="product-table-heading">
                    <h4 class="title">My Wish List on eTrade</h4>
                </div>
                <div class="table-responsive">
                    <table class="table axil-product-table axil-wishlist-table">
                        <thead>
                            <tr>
                                <th scope="col" class="product-remove"></th>
                                <th scope="col" class="product-thumbnail">Product</th>
                                <th scope="col" class="product-title"></th>
                                <th scope="col" class="product-price">Unit Price</th>
                                <th scope="col" class="product-stock-status">Stock Status</th>
                                <th scope="col" class="product-add-cart"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="product-remove"><Link to="/" class="remove-wishlist"><i class="fal fa-times"></i></Link></td>
                                <td class="product-thumbnail"><Link to="/singleProduct"><img src="assets/images/product/electric/product-01.png" alt="Digital Product" /></Link></td>
                                <td class="product-title"><Link to="/singleProduct">Wireless PS Handler</Link></td>
                                <td class="product-price" data-title="Price"><span class="currency-symbol">$</span>124.00</td>
                                <td class="product-stock-status" data-title="Status">In Stock</td>
                                <td class="product-add-cart"><Link to="/cart" class="axil-btn btn-outline">Add to Cart</Link></td>
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