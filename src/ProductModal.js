import React from 'react';
import Modal from 'react-bootstrap/Modal';
import {Link} from 'react-router-dom';
import './modal.css';

const ProductModal = ({showProductModal, setShowProductModal, modalData}) => {
    const handleClose = () => setShowProductModal(false);
    return (
        <div>    
          <Modal show={showProductModal} onHide={handleClose} dialogClassName="my-modal" backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
              <Modal.Title>Product Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div className="single-product-thumb">
                <div className="row">
                    <div className="col-lg-7 mb--40">
                        <div className="row">
                            <div className="col-lg-10 order-lg-2">
                                <div className="single-product-thumbnail product-large-thumbnail axil-product thumbnail-badge zoom-gallery">
                                    <div className="thumbnail">
                                        <img src={`${modalData.image}`} alt="Product "/>
                                        <div className="label-block label-right">
                                            <div className="product-badget">{modalData.off}</div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="col-lg-2 order-lg-1">
                                <div className="product-small-thumb small-thumb-wrapper">
                                    <div className="small-thumb-img">
                                        <img src={`${modalData.image}`} alt="thumb "/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 mb--40">
                        <div className="single-product-content">
                            <div className="inner">
                                <div className="product-rating">
                                    <div className="star-rating">
                                        <img src="assets/images/icons/rate.png" alt="Rate "/>
                                    </div>
                                    <div className="review-link">
                                        <Link>(<span>1</span> customer reviews)</Link>
                                    </div>
                                </div>
                                <h3 className="product-title">{modalData.title}</h3>
                                <span className="price-amount">${`${modalData.oldprice}.00`} - ${`${modalData.price}.00`}</span>
                                <ul className="product-meta">
                                    <li><i className="fal fa-check"></i>In stock</li>
                                    <li><i className="fal fa-check"></i>Free delivery available</li>
                                    <li><i className="fal fa-check"></i>Sales 30% Off Use Code: MOTIVE30</li>
                                </ul>
                                <p className="description">{modalData.body}</p>

                                <div className="product-variations-wrapper">

                                    <div className="product-variation">
                                        <h6 className="title">Colors:</h6>
                                        <div className="color-variant-wrapper">
                                            <ul className="color-variant mt--0">
                                                <li className="color-extra-01 active"><span><span className="color"></span></span>
                                                </li>
                                                <li className="color-extra-02"><span><span className="color"></span></span>
                                                </li>
                                                <li className="color-extra-03"><span><span className="color"></span></span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    <div className="product-variation">
                                        <h6 className="title">Size:</h6>
                                        <ul className="range-variant">
                                            <li>xs</li>
                                            <li>s</li>
                                            <li>m</li>
                                            <li>l</li>
                                            <li>xl</li>
                                        </ul>
                                    </div>
                                    

                                </div>

                                <div className="product-action-wrapper d-flex-center">
                                    <ul className="product-action d-flex-center mb--0">
                                        <li className="add-to-cart"><Link to="/cart" className="axil-btn btn-bg-primary">Add to Cart</Link></li>
                                        <li className="wishlist"><Link to="/wishlist" className="axil-btn wishlist-btn"><i className="far fa-heart"></i></Link></li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Modal.Body>
          </Modal>
        </div>
      );
}

export default ProductModal