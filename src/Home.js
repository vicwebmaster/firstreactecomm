import {React, useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import NewArrival from './NewArrival';
import BestSellers from './BestSellers';
import DataContext from './context/DataContext';

const Home = () => {    
    const {products} = useContext(DataContext);
    const [showProductModal, setShowProductModal] = useState(false);
    const [modalData, setModalData] = useState([]);

  return (
    <>
      <main className="main-wrapper">

        <div className="axil-main-slider-area main-slider-style-2">
            <div className="container">
                <div className="slider-offset-left">
                    <div className="row row--20">
                        <div className="col-lg-9">
                            <div className="slider-box-wrap">
                                <div className="slider-activation-one axil-slick-dots">
                                    <div className="single-slide slick-slide">
                                        <div className="main-slider-content">
                                            <span className="subtitle"><i className="fal fa-watch"></i> Smartwatch</span>
                                            <h1 className="title">Bloosom Smat Watch</h1>
                                            <div className="shop-btn">
                                                <button className="axil-btn"><Link to="/shop">Shop Now</Link> <i className="fal fa-long-arrow-right"></i></button>
                                            </div>
                                        </div>
                                        <div className="main-slider-thumb">
                                            <img src="./assets/images/product/product-40.png" alt="Product" />
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        
                        {products.slice(0, 1).map((item)=>(
                        <div className="col-lg-3" key={item.id}>
                            <div className="slider-product-box">
                                <div className="product-thumb">
                                    <Link to={`/singleProduct/${item.id}`}>
                                        <img src={item.image} alt="Product" />
                                    </Link>
                                </div>
                                <h6 className="title"><Link to={`/singleProduct/${item.id}`}>{item.title}</Link></h6>
                                <span className="price">${item.price}.99</span>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        <div className="service-area">
            <div className="container">
                <div className="row row-cols-xl-5 row-cols-lg-5 row-cols-md-3 row-cols-sm-2 row-cols-1 row--20">
                    <div className="col">
                        <div className="service-box">
                            <div className="icon">
                                <img src="./assets/images/icons/service1.png" alt="Service" />
                            </div>
                            <h6 className="title">Fast &amp; Secure Delivery </h6>
                        </div>
                    </div>
                    <div className="col">
                        <div className="service-box">
                            <div className="icon">
                                <img src="./assets/images/icons/service2.png" alt="Service" />
                            </div>
                            <h6 className="title">100% Guarantee On Product</h6>
                        </div>
                    </div>
                    <div className="col">
                        <div className="service-box">
                            <div className="icon">
                                <img src="./assets/images/icons/service3.png" alt="Service" />
                            </div>
                            <h6 className="title">24 Hour Return Policy</h6>
                        </div>
                    </div>
                    <div className="col">
                        <div className="service-box">
                            <div className="icon">
                                <img src="./assets/images/icons/service4.png" alt="Service" />
                            </div>
                            <h6 className="title">24 Hour Return Policy</h6>
                        </div>
                    </div>
                    <div className="col">
                        <div className="service-box">
                            <div className="icon">
                                <img src="./assets/images/icons/service5.png" alt="Service" />
                            </div>
                            <h6 className="title">Next Level Pro Quality</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>


         
        <div className="axil-product-area bg-color-white axil-section-gap">
            <div className="container">
                <div className="section-title-wrapper">
                    <span className="title-highlighter highlighter-primary"> <i className="far fa-shopping-basket"></i> This Weeks</span>
                    <h2 className="title">New Arrival</h2>
                </div>
                <div className="explore-product-activation slick-layout-wrapper slick-layout-wrapper--15 axil-slick-arrow arrow-top-slide">
                    <div className="slick-single-layout">
                        <div className="row row--15">
                            <NewArrival 
                                products={products}
                                modalData={modalData}
                                setModalData={setModalData}
                                setShowProductModal={setShowProductModal}
                                showProductModal={showProductModal}
                            />
                            
                            
                          </div>
                    </div>
                    
                </div>

            </div>
        </div>
        

        <div class="axil-best-seller-product-area bg-color-white axil-section-gap pb--50 pb_sm--30">
            <div class="container">
                <div class="section-title-wrapper">
                    <span class="title-highlighter highlighter-secondary"><i class="far fa-shopping-basket"></i>This Month</span>
                    <h2 class="title">Best Sellers</h2>
                </div>
                <div class="row new-arrivals-product-activation-2 product-transparent-layout slick-layout-wrapper--15 axil-slick-arrow arrow-top-slide product-slide-mobile">

                    <BestSellers 
                        products={products}
                    />
                    
                </div>
            </div>
        </div>
        

        <div className="axil-poster-countdown">
            <div className="container">
                <div className="poster-countdown-wrap bg-lighter">
                    <div className="row">
                        <div className="col-xl-5 col-lg-6">
                            <div className="poster-countdown-content">
                                <div className="section-title-wrapper">
                                    <span className="title-highlighter highlighter-secondary"> <i className="far fa-shopping-basket"></i> Don’t Miss!!</span>
                                    <h2 className="title">Let's Shopping Today</h2>
                                </div>
                                <div className="poster-countdown countdown mb--40"></div>
                                <Link className="axil-btn btn-bg-primary">Check it Out!</Link>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-6">
                            <div className="poster-countdown-thumbnail">
                                <img src="./assets/images/product/poster/poster-05.png" alt="Poster Product" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        

        <div className="axil-product-area bg-color-white axil-section-gap">
            <div className="container">
                <div className="section-title-wrapper">
                    <span className="title-highlighter highlighter-primary"> <i className="far fa-shopping-basket"></i> Our Products</span>
                    <h2 className="title">Explore our Products</h2>
                </div>
                <div className="explore-product-activation slick-layout-wrapper slick-layout-wrapper--15 axil-slick-arrow arrow-top-slide">
                    <div className="slick-single-layout">
                        <div className="row row--15">
                            <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
                                <div className="axil-product product-style-one">
                                    <div className="thumbnail">
                                        <Link to="/singleProduct">
                                            <img src="./assets/images/product/fashion/product-8.png" alt="Product Images" />
                                        </Link>
                                        <div className="label-block label-right">
                                            <div className="product-badget">20% Off</div>
                                        </div>
                                        <div className="product-hover-action">
                                            <ul className="cart-action">
                                                <li className="quickview"><Link><i className="far fa-eye"></i></Link></li>
                                                <li className="select-option"><Link to="/cart">Add to Cart</Link></li>
                                                <li className="wishlist"><Link to="/wishlist"><i className="far fa-heart"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <div className="inner">
                                            <h5 className="title"><Link to="/singleProduct">Leather Jacket</Link></h5>
                                            <div className="product-price-variant">
                                                <span className="price current-price">$29.99</span>
                                                <span className="price old-price">$49.99</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
                                <div className="axil-product product-style-one">
                                    <div className="thumbnail">
                                        <Link to="/singleProduct">
                                            <img src="./assets/images/product/fashion/product-7.png" alt="Product Images" />
                                        </Link>
                                        <div className="product-hover-action">
                                            <ul className="cart-action">
                                                <li className="quickview"><Link><i className="far fa-eye"></i></Link></li>
                                                <li className="select-option"><Link to="/singleProduct">Select Option</Link></li>
                                                <li className="wishlist"><Link to="/wishlist"><i className="far fa-heart"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <div className="inner">
                                            <h5 className="title"><Link to="/singleProduct">Men's Stylish Hat</Link></h5>
                                            <div className="product-price-variant">
                                                <span className="price current-price">$25.00</span>
                                                <span className="price old-price">$35.99</span>
                                            </div>
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
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
                                <div className="axil-product product-style-one">
                                    <div className="thumbnail">
                                        <Link to="/singleProduct">
                                            <img src="./assets/images/product/fashion/product-6.png" alt="Product Images" />
                                        </Link>
                                        <div className="label-block label-right">
                                            <div className="product-badget">20% Off</div>
                                        </div>
                                        <div className="product-hover-action">
                                            <ul className="cart-action">
                                                <li className="quickview"><Link><i className="far fa-eye"></i></Link></li>
                                                <li className="select-option"><Link to="/cart">Add to Cart</Link></li>
                                                <li className="wishlist"><Link to="/wishlist"><i className="far fa-heart"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <div className="inner">
                                            <h5 className="title"><Link to="/singleProduct">Women's Stylish Hat</Link></h5>
                                            <div className="product-price-variant">
                                                <span className="price current-price">$29.99</span>
                                                <span className="price old-price">$49.99</span>
                                            </div>
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
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
                                <div className="axil-product product-style-one">
                                    <div className="thumbnail">
                                        <Link to="/singleProduct">
                                            <img src="./assets/images/product/fashion/product-5.png" alt="Product Images" />
                                        </Link>
                                        <div className="product-hover-action">
                                            <ul className="cart-action">
                                                <li className="quickview"><Link><i className="far fa-eye"></i></Link></li>
                                                <li className="select-option"><Link to="/cart">Add to Cart</Link></li>
                                                <li className="wishlist"><Link to="/wishlist"><i className="far fa-heart"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <div className="inner">
                                            <h5 className="title"><Link to="/singleProduct">Solid A Line Dress</Link></h5>
                                            <div className="product-price-variant">
                                                <span className="price current-price">$100.00</span>
                                                <span className="price old-price">$150.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
                                <div className="axil-product product-style-one">
                                    <div className="thumbnail">
                                        <Link to="/singleProduct">
                                            <img src="./assets/images/product/fashion/product-4.png" alt="Product Images" />
                                        </Link>
                                        <div className="label-block label-right">
                                            <div className="product-badget">20% Off</div>
                                        </div>
                                        <div className="product-hover-action">
                                            <ul className="cart-action">
                                                <li className="quickview"><Link ><i className="far fa-eye"></i></Link></li>
                                                <li className="select-option"><Link to="/cart">Add to Cart</Link></li>
                                                <li className="wishlist"><Link to="/wishlist"><i className="far fa-heart"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <div className="inner">
                                            <h5 className="title"><Link to="/singleProduct">Denim Jacket</Link></h5>
                                            <div className="product-price-variant">
                                                <span className="price current-price">$50.00</span>
                                                <span className="price old-price">$89.99</span>
                                            </div>
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
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
                                <div className="axil-product product-style-one">
                                    <div className="thumbnail">
                                        <Link to="/singleProduct">
                                            <img src="./assets/images/product/fashion/product-3.png" alt="Product Images" />
                                        </Link>
                                        <div className="label-block label-right">
                                            <div className="product-badget">20% Off</div>
                                        </div>
                                        <div className="product-hover-action">
                                            <ul className="cart-action">
                                                <li className="quickview"><Link><i className="far fa-eye"></i></Link></li>
                                                <li className="select-option"><Link to="/cart">Add to Cart</Link></li>
                                                <li className="wishlist"><Link to="/wishlist"><i className="far fa-heart"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <div className="inner">
                                            <h5 className="title"><Link to="/singleProduct">Leather Bag</Link></h5>
                                            <div className="product-price-variant">
                                                <span className="price current-price">$99.99</span>
                                                <span className="price old-price">$149.99</span>
                                            </div>
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
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
                                <div className="axil-product product-style-one">
                                    <div className="thumbnail">
                                        <Link to="/singleProduct">
                                            <img src="./assets/images/product/fashion/product-2.png" alt="Product Images" />
                                        </Link>
                                        <div className="label-block label-right">
                                            <div className="product-badget">20% Off</div>
                                        </div>
                                        <div className="product-hover-action">
                                            <ul className="cart-action">
                                                <li className="quickview"><Link><i className="far fa-eye"></i></Link></li>
                                                <li className="select-option"><Link to="/singleProduct">Select Option</Link></li>
                                                <li className="wishlist"><Link to="/wishlist"><i className="far fa-heart"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <div className="inner">
                                            <h5 className="title"><Link to="/singleProduct">Women's Jacket</Link></h5>
                                            <div className="product-price-variant">
                                                <span className="price current-price">$29.99</span>
                                                <span className="price old-price">$49.99</span>
                                            </div>
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
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
                                <div className="axil-product product-style-one">
                                    <div className="thumbnail">
                                        <Link to="/singleProduct">
                                            <img src="./assets/images/product/fashion/product-1.png" alt="Product Images" />
                                        </Link>
                                        <div className="label-block label-right">
                                            <div className="product-badget">20% Off</div>
                                        </div>
                                        <div className="product-hover-action">
                                            <ul className="cart-action">
                                                <li className="quickview"><Link><i className="far fa-eye"></i></Link></li>
                                                <li className="select-option"><Link to="/cart">Add to Cart</Link></li>
                                                <li className="wishlist"><Link to="/wishlist"><i className="far fa-heart"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <div className="inner">
                                            <h5 className="title"><Link to="/singleProduct">Men's Tshirt</Link></h5>
                                            <div className="product-price-variant">
                                                <span className="price current-price">$29.99</span>
                                                <span className="price old-price">$39.99</span>
                                            </div>
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
                                    </div>
                                </div>
                            </div>
                            

                        </div>
                    </div>
                    
                    <div className="slick-single-layout">
                        <div className="row row--15">
                            <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
                                <div className="axil-product product-style-one">
                                    <div className="thumbnail">
                                        <Link to="/singleProduct">
                                            <img src="./assets/images/product/fashion/product-8.png" alt="Product Images" />
                                        </Link>
                                        <div className="label-block label-right">
                                            <div className="product-badget">20% Off</div>
                                        </div>
                                        <div className="product-hover-action">
                                            <ul className="cart-action">
                                                <li className="quickview"><Link><i className="far fa-eye"></i></Link></li>
                                                <li className="select-option"><Link to="/cart">Add to Cart</Link></li>
                                                <li className="wishlist"><Link to="/wishlist"><i className="far fa-heart"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <div className="inner">
                                            <h5 className="title"><Link to="/singleProduct">Leather Jacket</Link></h5>
                                            <div className="product-price-variant">
                                                <span className="price current-price">$29.99</span>
                                                <span className="price old-price">$49.99</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
                                <div className="axil-product product-style-one">
                                    <div className="thumbnail">
                                        <Link to="/singleProduct">
                                            <img src="./assets/images/product/fashion/product-7.png" alt="Product Images" />
                                        </Link>
                                        <div className="product-hover-action">
                                            <ul className="cart-action">
                                                <li className="quickview"><Link><i className="far fa-eye"></i></Link></li>
                                                <li className="select-option"><Link to="/singleProduct">Select Option</Link></li>
                                                <li className="wishlist"><Link to="/wishlist"><i className="far fa-heart"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <div className="inner">
                                            <h5 className="title"><Link to="/singleProduct">Men's Stylish Hat</Link></h5>
                                            <div className="product-price-variant">
                                                <span className="price current-price">$25.00</span>
                                                <span className="price old-price">$35.99</span>
                                            </div>
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
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
                                <div className="axil-product product-style-one">
                                    <div className="thumbnail">
                                        <Link to="/singleProduct">
                                            <img src="./assets/images/product/fashion/product-6.png" alt="Product Images" />
                                        </Link>
                                        <div className="label-block label-right">
                                            <div className="product-badget">20% Off</div>
                                        </div>
                                        <div className="product-hover-action">
                                            <ul className="cart-action">
                                                <li className="quickview"><Link><i className="far fa-eye"></i></Link></li>
                                                <li className="select-option"><Link to="/cart">Add to Cart</Link></li>
                                                <li className="wishlist"><Link to="/wishlist"><i className="far fa-heart"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <div className="inner">
                                            <h5 className="title"><Link to="/singleProduct">Women's Stylish Hat</Link></h5>
                                            <div className="product-price-variant">
                                                <span className="price current-price">$29.99</span>
                                                <span className="price old-price">$49.99</span>
                                            </div>
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
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
                                <div className="axil-product product-style-one">
                                    <div className="thumbnail">
                                        <Link to="/singleProduct">
                                            <img src="./assets/images/product/fashion/product-5.png" alt="Product Images" />
                                        </Link>
                                        <div className="product-hover-action">
                                            <ul className="cart-action">
                                                <li className="quickview"><Link><i className="far fa-eye"></i></Link></li>
                                                <li className="select-option"><Link to="/cart">Add to Cart</Link></li>
                                                <li className="wishlist"><Link to="/wishlist"><i className="far fa-heart"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <div className="inner">
                                            <h5 className="title"><Link to="/singleProduct">Solid A Line Dress</Link></h5>
                                            <div className="product-price-variant">
                                                <span className="price current-price">$100.00</span>
                                                <span className="price old-price">$150.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
                                <div className="axil-product product-style-one">
                                    <div className="thumbnail">
                                        <Link to="/singleProduct">
                                            <img src="./assets/images/product/fashion/product-4.png" alt="Product Images" />
                                        </Link>
                                        <div className="label-block label-right">
                                            <div className="product-badget">20% Off</div>
                                        </div>
                                        <div className="product-hover-action">
                                            <ul className="cart-action">
                                                <li className="quickview"><Link><i className="far fa-eye"></i></Link></li>
                                                <li className="select-option"><Link to="/cart">Add to Cart</Link></li>
                                                <li className="wishlist"><Link to="/wishlist"><i className="far fa-heart"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <div className="inner">
                                            <h5 className="title"><Link to="/singleProduct">Denim Jacket</Link></h5>
                                            <div className="product-price-variant">
                                                <span className="price current-price">$50.00</span>
                                                <span className="price old-price">$89.99</span>
                                            </div>
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
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
                                <div className="axil-product product-style-one">
                                    <div className="thumbnail">
                                        <Link to="/singleProduct">
                                            <img src="./assets/images/product/fashion/product-3.png" alt="Product Images" />
                                        </Link>
                                        <div className="label-block label-right">
                                            <div className="product-badget">20% Off</div>
                                        </div>
                                        <div className="product-hover-action">
                                            <ul className="cart-action">
                                                <li className="quickview"><Link><i className="far fa-eye"></i></Link></li>
                                                <li className="select-option"><Link to="/cart">Add to Cart</Link></li>
                                                <li className="wishlist"><Link to="/wishlist"><i className="far fa-heart"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <div className="inner">
                                            <h5 className="title"><Link to="/singleProduct">Leather Bag</Link></h5>
                                            <div className="product-price-variant">
                                                <span className="price current-price">$99.99</span>
                                                <span className="price old-price">$149.99</span>
                                            </div>
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
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
                                <div className="axil-product product-style-one">
                                    <div className="thumbnail">
                                        <Link to="/singleProduct">
                                            <img src="./assets/images/product/fashion/product-2.png" alt="Product Images" />
                                        </Link>
                                        <div className="label-block label-right">
                                            <div className="product-badget">20% Off</div>
                                        </div>
                                        <div className="product-hover-action">
                                            <ul className="cart-action">
                                                <li className="quickview"><Link><i className="far fa-eye"></i></Link></li>
                                                <li className="select-option"><Link to="/singleProduct">Select Option</Link></li>
                                                <li className="wishlist"><Link to="/wishlist"><i className="far fa-heart"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <div className="inner">
                                            <h5 className="title"><Link to="/singleProduct">Women's Jacket</Link></h5>
                                            <div className="product-price-variant">
                                                <span className="price current-price">$29.99</span>
                                                <span className="price old-price">$49.99</span>
                                            </div>
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
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
                                <div className="axil-product product-style-one">
                                    <div className="thumbnail">
                                        <Link to="/singleProduct">
                                            <img src="./assets/images/product/fashion/product-1.png" alt="Product Images" />
                                        </Link>
                                        <div className="label-block label-right">
                                            <div className="product-badget">20% Off</div>
                                        </div>
                                        <div className="product-hover-action">
                                            <ul className="cart-action">
                                                <li className="quickview"><Link><i className="far fa-eye"></i></Link></li>
                                                <li className="select-option"><Link to="/cart">Add to Cart</Link></li>
                                                <li className="wishlist"><Link to="/wishlist"><i className="far fa-heart"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <div className="inner">
                                            <h5 className="title"><Link to="/singleProduct">Men's Tshirt</Link></h5>
                                            <div className="product-price-variant">
                                                <span className="price current-price">$29.99</span>
                                                <span className="price old-price">$39.99</span>
                                            </div>
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
                                    </div>
                                </div>
                            </div>
                            

                        </div>
                    </div>
                    
                </div>
                <div className="row">
                    <div className="col-lg-12 text-center mt--20 mt_sm--0">
                        <Link to="/shop" className="axil-btn btn-bg-lighter btn-load-more">View All Products</Link>
                    </div>
                </div>

            </div>
        </div>
        

        <div className="axil-testimoial-area axil-section-gap bg-vista-white">
            <div className="container">
                <div className="section-title-wrapper">
                    <span className="title-highlighter highlighter-secondary"> <i className="fal fa-quote-left"></i>Testimonials</span>
                    <h2 className="title">Users Feedback</h2>
                </div>
                
                <div className="testimonial-slick-activation testimonial-style-one-wrapper slick-layout-wrapper--20 axil-slick-arrow arrow-top-slide">
                    <div className="row">
                        <div className="slick-single-layout testimonial-style-one col-lg-4">
                            <div className="review-speech">
                                <p>“ It’s amazing how much easier it has been to
                                    meet new people and create instantly non
                                    connections. I have the exact same personal
                                    the only thing that has changed is my mind
                                    set and a few behaviors. “</p>
                            </div>
                            <div className="media">
                                <div className="thumbnail">
                                    <img src="./assets/images/testimonial/image-1.png" alt="testimonial" />
                                </div>
                                <div className="media-body">
                                    <span className="designation">Head Of Idea</span>
                                    <h6 className="title">James C. Anderson</h6>
                                </div>
                            </div>
                            
                        </div>
                        
                        <div className="slick-single-layout testimonial-style-one col-lg-4">
                            <div className="review-speech">
                                <p>“ It’s amazing how much easier it has been to
                                    meet new people and create instantly non
                                    connections. I have the exact same personal
                                    the only thing that has changed is my mind
                                    set and a few behaviors. “</p>
                            </div>
                            <div className="media">
                                <div className="thumbnail">
                                    <img src="./assets/images/testimonial/image-2.png" alt="testimonial " />
                                </div>
                                <div className="media-body">
                                    <span className="designation">Head Of Idea</span>
                                    <h6 className="title">James C. Anderson</h6>
                                </div>
                            </div>
                            
                        </div>
                        <div className="slick-single-layout testimonial-style-one col-lg-4">
                            <div className="review-speech">
                                <p>“ It’s amazing how much easier it has been to
                                    meet new people and create instantly non
                                    connections. I have the exact same personal
                                    the only thing that has changed is my mind
                                    set and a few behaviors. “</p>
                            </div>
                            <div className="media">
                                <div className="thumbnail">
                                    <img src="./assets/images/testimonial/image-3.png" alt="testimonial " />
                                </div>
                                <div className="media-body">
                                    <span className="designation">Head Of Idea</span>
                                    <h6 className="title">James C. Anderson</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                
                    

                </div>
            </div>
        </div>
        
        <div className="axil-product-area bg-color-white axil-section-gap">
            <div className="container">
                <div className="section-title-wrapper">
                    <span className="title-highlighter highlighter-primary"> <i className="far fa-shopping-basket"></i> Our Products</span>
                    <h2 className="title">Explore our Products</h2>
                </div>
                <div className="explore-product-activation slick-layout-wrapper slick-layout-wrapper--15 axil-slick-arrow arrow-top-slide">
                    <div className="slick-single-layout">
                        <div className="row row--15">
                            <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
                                <div className="axil-product product-style-one">
                                    <div className="thumbnail">
                                        <Link to="/singleProduct">
                                            <img className="rounded" src="./assets/images/product/fashion/product-8.png" alt="Product Images" />
                                        </Link>
                                        <div className="label-block label-right">
                                            <div className="product-badget">20% Off</div>
                                        </div>
                                        <div className="product-hover-action">
                                            <ul className="cart-action">
                                                <li className="quickview"><Link><i className="far fa-eye"></i></Link></li>
                                                <li className="select-option"><Link to="/cart">Add to Cart</Link></li>
                                                <li className="wishlist"><Link to="/wishlist"><i className="far fa-heart"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <div className="inner">
                                            <h5 className="title"><Link to="/singleProduct">Leather Jacket</Link></h5>
                                            <div className="product-price-variant">
                                                <span className="price current-price">$29.99</span>
                                                <span className="price old-price">$49.99</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
                                <div className="axil-product product-style-one">
                                    <div className="thumbnail">
                                        <Link to="/singleProduct">
                                            <img src="./assets/images/product/fashion/product-7.png" alt="Product Images" />
                                        </Link>
                                        <div className="product-hover-action">
                                            <ul className="cart-action">
                                                <li className="quickview"><Link><i className="far fa-eye"></i></Link></li>
                                                <li className="select-option"><Link to="/singleProduct">Select Option</Link></li>
                                                <li className="wishlist"><Link to="/wishlist"><i className="far fa-heart"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <div className="inner">
                                            <h5 className="title"><Link to="/singleProduct">Men's Stylish Hat</Link></h5>
                                            <div className="product-price-variant">
                                                <span className="price current-price">$25.00</span>
                                                <span className="price old-price">$35.99</span>
                                            </div>
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
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
                                <div className="axil-product product-style-one">
                                    <div className="thumbnail">
                                        <Link to="/singleProduct">
                                            <img src="./assets/images/product/fashion/product-6.png" alt="Product Images" />
                                        </Link>
                                        <div className="label-block label-right">
                                            <div className="product-badget">20% Off</div>
                                        </div>
                                        <div className="product-hover-action">
                                            <ul className="cart-action">
                                                <li className="quickview"><Link><i className="far fa-eye"></i></Link></li>
                                                <li className="select-option"><Link to="/cart">Add to Cart</Link></li>
                                                <li className="wishlist"><Link to="/wishlist"><i className="far fa-heart"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <div className="inner">
                                            <h5 className="title"><Link to="/singleProduct">Women's Stylish Hat</Link></h5>
                                            <div className="product-price-variant">
                                                <span className="price current-price">$29.99</span>
                                                <span className="price old-price">$49.99</span>
                                            </div>
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
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
                                <div className="axil-product product-style-one">
                                    <div className="thumbnail">
                                        <Link to="/singleProduct">
                                            <img src="./assets/images/product/fashion/product-5.png" alt="Product Images" />
                                        </Link>
                                        <div className="product-hover-action">
                                            <ul className="cart-action">
                                                <li className="quickview"><Link><i className="far fa-eye"></i></Link></li>
                                                <li className="select-option"><Link to="/cart">Add to Cart</Link></li>
                                                <li className="wishlist"><Link to="/wishlist"><i className="far fa-heart"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <div className="inner">
                                            <h5 className="title"><Link to="/singleProduct">Solid A Line Dress</Link></h5>
                                            <div className="product-price-variant">
                                                <span className="price current-price">$100.00</span>
                                                <span className="price old-price">$150.00</span>
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
                <div className="etrade-newsletter-wrapper bg_image bg_image--12">
                    <div className="newsletter-content">
                        <span className="title-highlighter highlighter-primary2"><i className="fas fa-envelope-open"></i>Newsletter</span>
                        <h2 className="title mb--40 mb_sm--30">Get weekly update</h2>
                        <div className="input-group newsletter-form">
                            <div className="position-relative newsletter-inner mb--15">
                                <input placeholder="example@gmail.com" type="text" />
                            </div>
                            <button type="submit" className="axil-btn mb--15">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        

      </main>


    </>
  )
}

export default Home