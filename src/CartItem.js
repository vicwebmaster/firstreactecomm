import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import DataContext from './context/DataContext'

const CartItem = () => {
    const {cartItem, products, deleteItemMessage, setCartItem} = useContext(DataContext);
    
    const removeFromCart = (removeId, cartItems) => {
        const data = cartItems.filter((item) => item.id !== removeId);
          setCartItem(data);
          localStorage.setItem('cart', JSON.stringify(data));
          deleteItemMessage()   
          
      }
  return (
    <>
    
    {cartItem && cartItem.map((cartproduct)=>(
    <tr>
        <td className="product-remove"><p className="remove-wishlist" onClick={()=>removeFromCart(cartproduct.productid, cartItem)}><i className="fal fa-times"></i></p></td>
        <td className="product-thumbnail"><Link to={`/singleProduct/${cartproduct.productid}`}><img src={`${products.find((x)=>{return x.id===cartproduct.productid}).image}`} alt="Digital Product"/></Link></td>
        <td className="product-title"><Link to={`/singleProduct/${cartproduct.productid}`}>{products.find((x)=>{return x.id===cartproduct.productid}).title} </Link></td>
        <td className="product-price" data-title="Price"><span className="currency-symbol">$</span>{products.find((x)=>{return x.id===cartproduct.productid}).price}.00</td>
        <td className="product-quantity" data-title="Qty">
            <div className="pro-qty">
                <input type="number" className="quantity-input" value={`${cartproduct.num}`}/>
            </div>
        </td>
        <td className="product-subtotal" data-title="Subtotal"><span className="currency-symbol">$</span>{products.find((x)=>{return x.id===cartproduct.productid}).price*cartproduct.num}.00</td>
    </tr>
    ))}
    {cartItem.length>0 ? "" : 
    <tr>
        <td className="product-remove text-center" colSpan="100%">Your Cart is Empty</td>
    </tr>}
    </>
  )
}

export default CartItem