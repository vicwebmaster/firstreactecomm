import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import ProductModal from './ProductModal'
import DataContext from './context/DataContext'

const NewArrival = ({products, showProductModal, setShowProductModal, setModalData, modalData}) => {

    const {addToCart, cartItem} = useContext(DataContext);
    const productModal = (id, products) => {
        const data = products.find((item) => item.id === id);
        setShowProductModal(true)
        setModalData(data)
    }

    
  return (
    <>
    <ProductModal 
        showProductModal={showProductModal}
        setShowProductModal={setShowProductModal}
        modalData={modalData}
    />
    {products.slice(0, 4).reverse().map((item)=>(
    <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30" key={item.id}>
        <div className="axil-product product-style-one">
            <div className="thumbnail">
                <Link to={`/singleProduct/${item.id}`}>
                    <img src={`${item.image}`} alt="Product Images" />
                </Link>
                <div className="label-block label-right">
                    <div className="product-badget">{item.off}</div>
                </div>
                <div className="product-hover-action">
                    <ul className="cart-action">
                        <li className="quickview"><Link onClick={()=>productModal(item.id, products)}><i className="far fa-eye"></i></Link></li>
                        <li className="select-option"><Link onClick={()=>addToCart(item.id, cartItem)}>Add to Cart</Link></li>
                        <li className="wishlist"><Link to="/wishlist"><i className="far fa-heart"></i></Link></li>
                    </ul>
                </div>
            </div>
            <div className="product-content">
                <div className="inner">
                    <h5 className="title"><Link to={`/singleProduct/${item.id}`}>{item.title}</Link></h5>
                    <div className="product-price-variant">
                        <span className="price current-price">${item.price}.00</span>
                        <span className="price old-price">${item.oldprice}.00</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    ))}
    </>
  )
}

export default NewArrival