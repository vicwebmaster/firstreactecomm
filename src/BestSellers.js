import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import DataContext from './context/DataContext'

const BestSellers = ({products}) => {
let product = products.sort((a, b) => (a.sold < b.sold) ? 1 : -1)
const {addToCart, cartItem} = useContext(DataContext);
  return (
    <>
    
    {product.slice(0, 4).map((item)=>(
    <div class="col-lg-3 slick-single-layout" key={item.id}>
        <div class="axil-product product-style-seven">
            <div class="product-content">
                <div class="cart-btn">
                    <Link onClick={()=>addToCart(item.id, cartItem)}>
                        <i class="flaticon-shopping-cart"></i>
                    </Link>
                </div>
                <div class="inner">
                    <h5 class="title"><Link to={`/singleProduct/${item.id}`}>{item.title}</Link></h5>
                    <div class="product-price-variant">
                        <span class="price current-price">${item.price}.00</span>
                        <span class="price old-price">${item.oldprice}.00</span>
                    </div>
                    <div class="product-rating">
                        <span class="icon">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </span>
                        <span class="rating-number">(64)</span>
                    </div>
                </div>
            </div>
            <div class="thumbnail">
                <Link to={`/singleProduct/${item.id}`}>
                    <img src={`${item.image}`} alt="Product Images"/>
                </Link>
            </div>
        </div>
    </div>
    ))}
    </>
  )
}

export default BestSellers