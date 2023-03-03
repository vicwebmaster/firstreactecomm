import React from 'react'
import {useParams, Link} from 'react-router-dom';

const SingleProduct = () => {
    const {id} = useParams();
    let products = JSON.parse(localStorage.getItem("items")).items;
    const data = products.find((item) => (item.id).toString() === id);
  return (
    <>
    {data &&
    <main className="main-wrapper">
        
        <div className="axil-single-product-area bg-color-white">
            <div className="single-product-thumb axil-section-gap pb--20 pb_sm--0 bg-vista-white">
                <div className="container">
                    <div className="row row--25">
                        <div className="col-lg-6 mb--40">
                            <div className="h-100">
                                <div className="position-sticky sticky-top">
                                    <div className="row row--10">
                                        <div className="col-12 mb--20">
                                            <div className="single-product-thumbnail axil-product thumbnail-grid">
                                                <div className="thumbnail">
                                                    <img className="img-fluid" src={`../${data.image}`} alt="Product Images"/>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb--40">
                            <div className="h-100">
                                <div className="position-sticky sticky-top">
                                    <div className="single-product-content">
                                        <div className="inner">
                                            <h2 className="product-title">{data.title}</h2>
                                            <span className="price-amount">${data.price}.00 - ${data.oldprice}.00</span>
                                            <div className="product-rating">
                                                <div className="star-rating">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                </div>
                                                <div className="review-link">
                                                    <p>(<span>2</span> customer reviews)</p>
                                                </div>
                                            </div>
                                            <ul className="product-meta">
                                                <li><i className="fal fa-check"></i>In stock</li>
                                                <li><i className="fal fa-check"></i>Free delivery available</li>
                                                <li><i className="fal fa-check"></i>Sales 30% Off Use Code: MOTIVE30</li>
                                            </ul>
                                            <p className="description">{data.body}</p>

                                            <div className="product-variations-wrapper">


                                                <div className="product-variation">
                                                    <h6 className="title">Colors:</h6>
                                                    <div className="color-variant-wrapper">
                                                        <ul className="color-variant">
                                                            <li className="color-extra-01 active"><span><span className="color"></span></span>
                                                            </li>
                                                            <li className="color-extra-02"><span><span className="color"></span></span>
                                                            </li>
                                                            <li className="color-extra-03"><span><span className="color"></span></span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                
                                                <div className="product-variation product-size-variation">
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
                                            

                                            <div className="product-desc-wrapper pt--80 pt_sm--60">
                                                <h4 className="primary-color mb--40 desc-heading">Description</h4>
                                                <div className="single-desc mb--30">
                                                    <h5 className="title">Specifications:</h5>
                                                    <p>We’ve created a full-stack structure for our working workflow processes, were from the funny the century initial all the made, have spare to negatives. But the structure was from the funny the century rather,
                                                        initial all the made, have spare to negatives.</p>
                                                </div>
                                                <div className="single-desc mb--5">
                                                    <h5 className="title">Care & Maintenance:</h5>
                                                    <p>Use warm water to describe us as a product team that creates amazing UI/UX experiences, by crafting top-notch user experience.</p>
                                                </div>
                                                <ul className="pro-des-features pro-desc-style-two">
                                                    <li className="single-features">
                                                        <div className="icon">
                                                            <img src="../assets/images/product/product-thumb/icon-3.png" alt="icon"/>
                                                        </div>
                                                        Easy Returns
                                                    </li>
                                                    <li className="single-features">
                                                        <div className="icon">
                                                            <img src="../assets/images/product/product-thumb/icon-2.png" alt="icon"/>
                                                        </div>
                                                        Quality Service
                                                    </li>
                                                    <li className="single-features">
                                                        <div className="icon">
                                                            <img src="../assets/images/product/product-thumb/icon-1.png" alt="icon"/>
                                                        </div>
                                                        Original Product
                                                    </li>
                                                </ul>
                                                
                                            </div>
                                            
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
    }
    {!data && <div className="alert alert-danger display-6 text-center">Post not Found!!!</div>}
    </>
  )
}

export default SingleProduct