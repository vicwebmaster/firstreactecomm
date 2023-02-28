import React from 'react';
import {Link} from 'react-router-dom';


const Home = () => {
  return (
    <>
      <main class="main-wrapper">

        <div class="axil-main-slider-area main-slider-style-2">
            <div class="container">
                <div class="slider-offset-left">
                    <div class="row row--20">
                        <div class="col-lg-9">
                            <div class="slider-box-wrap">
                                <div class="slider-activation-one axil-slick-dots">
                                    <div class="single-slide slick-slide">
                                        <div class="main-slider-content">
                                            <span class="subtitle"><i class="fal fa-watch"></i> Smartwatch</span>
                                            <h1 class="title">Bloosom Smat Watch</h1>
                                            <div class="shop-btn">
                                                <button class="axil-btn"><Link to="/shop">Shop Now</Link> <i class="fal fa-long-arrow-right"></i></button>
                                            </div>
                                        </div>
                                        <div class="main-slider-thumb">
                                            <img src="./assets/images/product/product-40.png" alt="Product" />
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="slider-product-box">
                                <div class="product-thumb">
                                    <Link to="/singleProduct">
                                        <img src="./assets/images/product/product-41.png" alt="Product" />
                                    </Link>
                                </div>
                                <h6 class="title"><Link to="/singleProduct">Yantiti Leather Bags</Link></h6>
                                <span class="price">$29.99</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="service-area">
            <div class="container">
                <div class="row row-cols-xl-5 row-cols-lg-5 row-cols-md-3 row-cols-sm-2 row-cols-1 row--20">
                    <div class="col">
                        <div class="service-box">
                            <div class="icon">
                                <img src="./assets/images/icons/service1.png" alt="Service" />
                            </div>
                            <h6 class="title">Fast &amp; Secure Delivery </h6>
                        </div>
                    </div>
                    <div class="col">
                        <div class="service-box">
                            <div class="icon">
                                <img src="./assets/images/icons/service2.png" alt="Service" />
                            </div>
                            <h6 class="title">100% Guarantee On Product</h6>
                        </div>
                    </div>
                    <div class="col">
                        <div class="service-box">
                            <div class="icon">
                                <img src="./assets/images/icons/service3.png" alt="Service" />
                            </div>
                            <h6 class="title">24 Hour Return Policy</h6>
                        </div>
                    </div>
                    <div class="col">
                        <div class="service-box">
                            <div class="icon">
                                <img src="./assets/images/icons/service4.png" alt="Service" />
                            </div>
                            <h6 class="title">24 Hour Return Policy</h6>
                        </div>
                    </div>
                    <div class="col">
                        <div class="service-box">
                            <div class="icon">
                                <img src="./assets/images/icons/service5.png" alt="Service" />
                            </div>
                            <h6 class="title">Next Level Pro Quality</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>


         
        <div class="axil-product-area bg-color-white axil-section-gap">
            <div class="container">
                <div class="section-title-wrapper">
                    <span class="title-highlighter highlighter-primary"> <i class="far fa-shopping-basket"></i> Our Products</span>
                    <h2 class="title">Explore our Products</h2>
                </div>
                <div class="explore-product-activation slick-layout-wrapper slick-layout-wrapper--15 axil-slick-arrow arrow-top-slide">
                    <div class="slick-single-layout">
                        <div class="row row--15">
                            <div class="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
                                <div class="axil-product product-style-one">
                                    <div class="thumbnail">
                                        <Link to="/singleProduct">
                                            <img src="./assets/images/product/fashion/product-8.png" alt="Product Images" />
                                        </Link>
                                        <div class="label-block label-right">
                                            <div class="product-badget">20% Off</div>
                                        </div>
                                        <div class="product-hover-action">
                                            <ul class="cart-action">
                                                <li class="quickview"><Link><i class="far fa-eye"></i></Link></li>
                                                <li class="select-option"><Link to="/cart">Add to Cart</Link></li>
                                                <li class="wishlist"><Link to="/wishlist"><i class="far fa-heart"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="product-content">
                                        <div class="inner">
                                            <h5 class="title"><Link to="/singleProduct">Leather Jacket</Link></h5>
                                            <div class="product-price-variant">
                                                <span class="price current-price">$29.99</span>
                                                <span class="price old-price">$49.99</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
                                <div class="axil-product product-style-one">
                                    <div class="thumbnail">
                                        <Link to="/singleProduct">
                                            <img src="./assets/images/product/fashion/product-7.png" alt="Product Images" />
                                        </Link>
                                        <div class="product-hover-action">
                                            <ul class="cart-action">
                                                <li class="quickview"><Link><i class="far fa-eye"></i></Link></li>
                                                <li class="select-option"><Link to="/singleProduct">Select Option</Link></li>
                                                <li clLinkss="wishlist"><Link to="/wishlist"><i class="far fa-heart"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="product-content">
                                        <div class="inner">
                                            <h5 class="title"><Link to="/singleProduct">Men's Stylish Hat</Link></h5>
                                            <div class="product-price-variant">
                                                <span class="price current-price">$25.00</span>
                                                <span class="price old-price">$35.99</span>
                                            </div>
                                            <div class="color-variant-wrapper">
                                                <ul class="color-variant">
                                                    <li class="color-extra-01 active"><span><span class="color"></span></span>
                                                    </li>
                                                    <li class="color-extra-02"><span><span class="color"></span></span>
                                                    </li>
                                                    <li class="color-extra-03"><span><span class="color"></span></span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
                                <div class="axil-product product-style-one">
                                    <div class="thumbnail">
                                        <Link to="/singleProduct">
                                            <img src="./assets/images/product/fashion/product-6.png" alt="Product Images" />
                                        </Link>
                                        <div class="label-block label-right">
                                            <div class="product-badget">20% Off</div>
                                        </div>
                                        <div class="product-hover-action">
                                            <ul class="cart-action">
                                                <li class="quickview"><Link><i class="far fa-eye"></i></Link></li>
                                                <li class="select-option"><Link to="/cart">Add to Cart</Link></li>
                                                <li class="wishlist"><Link to="/wishlist"><i class="far fa-heart"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="product-content">
                                        <div class="inner">
                                            <h5 class="title"><Link to="/singleProduct">Women's Stylish Hat</Link></h5>
                                            <div class="product-price-variant">
                                                <span class="price current-price">$29.99</span>
                                                <span class="price old-price">$49.99</span>
                                            </div>
                                            <div class="color-variant-wrapper">
                                                <ul class="color-variant">
                                                    <li class="color-extra-01 active"><span><span class="color"></span></span>
                                                    </li>
                                                    <li class="color-extra-02"><span><span class="color"></span></span>
                                                    </li>
                                                    <li class="color-extra-03"><span><span class="color"></span></span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
                                <div class="axil-product product-style-one">
                                    <div class="thumbnail">
                                        <Link to="/singleProduct">
                                            <img src="./assets/images/product/fashion/product-5.png" alt="Product Images" />
                                        </Link>
                                        <div class="product-hover-action">
                                            <ul class="cart-action">
                                                <li class="quickview"><Link><i class="far fa-eye"></i></Link></li>
                                                <li class="select-option"><Link to="/cart">Add to Cart</Link></li>
                                                <li class="wishlist"><Link to="/wishlist"><i class="far fa-heart"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="product-content">
                                        <div class="inner">
                                            <h5 class="title"><Link to="/singleProduct">Solid A Line Dress</Link></h5>
                                            <div class="product-price-variant">
                                                <span class="price current-price">$100.00</span>
                                                <span class="price old-price">$150.00</span>
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
        

         
        <div class="axil-product-area bg-color-white axil-section-gap">
            <div class="container">
                <div class="section-title-wrapper">
                    <span class="title-highlighter highlighter-primary"> <i class="far fa-shopping-basket"></i> Our Products</span>
                    <h2 class="title">Explore our Products</h2>
                </div>
                <div class="explore-product-activation slick-layout-wrapper slick-layout-wrapper--15 axil-slick-arrow arrow-top-slide">
                    <div class="slick-single-layout">
                        <div class="row row--15">
                            <div class="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
                                <div class="axil-product product-style-one">
                                    <div class="thumbnail">
                                        <Link to="/singleProduct">
                                            <img src="./assets/images/product/fashion/product-8.png" alt="Product Images" />
                                        </Link>
                                        <div class="label-block label-right">
                                            <div class="product-badget">20% Off</div>
                                        </div>
                                        <div class="product-hover-action">
                                            <ul class="cart-action">
                                                <li class="quickview"><Link><i class="far fa-eye"></i></Link></li>
                                                <li class="select-option"><Link to="/cart">Add to Cart</Link></li>
                                                <li class="wishlist"><Link to="/wishlist"><i class="far fa-heart"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="product-content">
                                        <div class="inner">
                                            <h5 class="title"><Link to="/singleProduct">Leather Jacket</Link></h5>
                                            <div class="product-price-variant">
                                                <span class="price current-price">$29.99</span>
                                                <span class="price old-price">$49.99</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
                                <div class="axil-product product-style-one">
                                    <div class="thumbnail">
                                        <Link to="/singleProduct">
                                            <img src="./assets/images/product/fashion/product-7.png" alt="Product Images" />
                                        </Link>
                                        <div class="product-hover-action">
                                            <ul class="cart-action">
                                                <li class="quickview"><Link><i class="far fa-eye"></i></Link></li>
                                                <li class="select-option"><Link to="/singleProduct">Select Option</Link></li>
                                                <li class="wishlist"><Link to="/wishlist"><i class="far fa-heart"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="product-content">
                                        <div class="inner">
                                            <h5 class="title"><Link to="/singleProduct">Men's Stylish Hat</Link></h5>
                                            <div class="product-price-variant">
                                                <span class="price current-price">$25.00</span>
                                                <span class="price old-price">$35.99</span>
                                            </div>
                                            <div class="color-variant-wrapper">
                                                <ul class="color-variant">
                                                    <li class="color-extra-01 active"><span><span class="color"></span></span>
                                                    </li>
                                                    <li class="color-extra-02"><span><span class="color"></span></span>
                                                    </li>
                                                    <li class="color-extra-03"><span><span class="color"></span></span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
                                <div class="axil-product product-style-one">
                                    <div class="thumbnail">
                                        <Link to="/singleProduct">
                                            <img src="./assets/images/product/fashion/product-6.png" alt="Product Images" />
                                        </Link>
                                        <div class="label-block label-right">
                                            <div class="product-badget">20% Off</div>
                                        </div>
                                        <div class="product-hover-action">
                                            <ul class="cart-action">
                                                <li class="quickview"><Link><i class="far fa-eye"></i></Link></li>
                                                <li class="select-option"><Link to="/cart">Add to Cart</Link></li>
                                                <li class="wishlist"><Link to="/wishlist"><i class="far fa-heart"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="product-content">
                                        <div class="inner">
                                            <h5 class="title"><Link to="/singleProduct">Women's Stylish Hat</Link></h5>
                                            <div class="product-price-variant">
                                                <span class="price current-price">$29.99</span>
                                                <span class="price old-price">$49.99</span>
                                            </div>
                                            <div class="color-variant-wrapper">
                                                <ul class="color-variant">
                                                    <li class="color-extra-01 active"><span><span class="color"></span></span>
                                                    </li>
                                                    <li class="color-extra-02"><span><span class="color"></span></span>
                                                    </li>
                                                    <li class="color-extra-03"><span><span class="color"></span></span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
                                <div class="axil-product product-style-one">
                                    <div class="thumbnail">
                                        <Link to="/singleProduct">
                                            <img src="./assets/images/product/fashion/product-5.png" alt="Product Images" />
                                        </Link>
                                        <div class="product-hover-action">
                                            <ul class="cart-action">
                                                <li class="quickview"><Link><i class="far fa-eye"></i></Link></li>
                                                <li class="select-option"><Link to="/cart">Add to Cart</Link></li>
                                                <li class="wishlist"><Link to="/wishlist"><i class="far fa-heart"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="product-content">
                                        <div class="inner">
                                            <h5 class="title"><Link to="/singleProduct">Solid A Line Dress</Link></h5>
                                            <div class="product-price-variant">
                                                <span class="price current-price">$100.00</span>
                                                <span class="price old-price">$150.00</span>
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
        

        <div class="axil-poster-countdown">
            <div class="container">
                <div class="poster-countdown-wrap bg-lighter">
                    <div class="row">
                        <div class="col-xl-5 col-lg-6">
                            <div class="poster-countdown-content">
                                <div class="section-title-wrapper">
                                    <span class="title-highlighter highlighter-secondary"> <i class="far fa-shopping-basket"></i> Don’t Miss!!</span>
                                    <h2 class="title">Let's Shopping Today</h2>
                                </div>
                                <div class="poster-countdown countdown mb--40"></div>
                                <Link class="axil-btn btn-bg-primary">Check it Out!</Link>
                            </div>
                        </div>
                        <div class="col-xl-7 col-lg-6">
                            <div class="poster-countdown-thumbnail">
                                <img src="./assets/images/product/poster/poster-05.png" alt="Poster Product" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        

        <div class="axil-product-area bg-color-white axil-section-gap">
            <div class="container">
                <div class="section-title-wrapper">
                    <span class="title-highlighter highlighter-primary"> <i class="far fa-shopping-basket"></i> Our Products</span>
                    <h2 class="title">Explore our Products</h2>
                </div>
                <div class="explore-product-activation slick-layout-wrapper slick-layout-wrapper--15 axil-slick-arrow arrow-top-slide">
                    <div class="slick-single-layout">
                        <div class="row row--15">
                            <div class="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
                                <div class="axil-product product-style-one">
                                    <div class="thumbnail">
                                        <Link to="/singleProduct">
                                            <img src="./assets/images/product/fashion/product-8.png" alt="Product Images" />
                                        </Link>
                                        <div class="label-block label-right">
                                            <div class="product-badget">20% Off</div>
                                        </div>
                                        <div class="product-hover-action">
                                            <ul class="cart-action">
                                                <li class="quickview"><Link><i class="far fa-eye"></i></Link></li>
                                                <li class="select-option"><Link to="/cart">Add to Cart</Link></li>
                                                <li class="wishlist"><Link to="/wishlist"><i class="far fa-heart"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="product-content">
                                        <div class="inner">
                                            <h5 class="title"><Link to="/singleProduct">Leather Jacket</Link></h5>
                                            <div class="product-price-variant">
                                                <span class="price current-price">$29.99</span>
                                                <span class="price old-price">$49.99</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
                                <div class="axil-product product-style-one">
                                    <div class="thumbnail">
                                        <Link to="/singleProduct">
                                            <img src="./assets/images/product/fashion/product-7.png" alt="Product Images" />
                                        </Link>
                                        <div class="product-hover-action">
                                            <ul class="cart-action">
                                                <li class="quickview"><Link><i class="far fa-eye"></i></Link></li>
                                                <li class="select-option"><Link to="/singleProduct">Select Option</Link></li>
                                                <li class="wishlist"><Link to="/wishlist"><i class="far fa-heart"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="product-content">
                                        <div class="inner">
                                            <h5 class="title"><Link to="/singleProduct">Men's Stylish Hat</Link></h5>
                                            <div class="product-price-variant">
                                                <span class="price current-price">$25.00</span>
                                                <span class="price old-price">$35.99</span>
                                            </div>
                                            <div class="color-variant-wrapper">
                                                <ul class="color-variant">
                                                    <li class="color-extra-01 active"><span><span class="color"></span></span>
                                                    </li>
                                                    <li class="color-extra-02"><span><span class="color"></span></span>
                                                    </li>
                                                    <li class="color-extra-03"><span><span class="color"></span></span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
                                <div class="axil-product product-style-one">
                                    <div class="thumbnail">
                                        <Link to="/singleProduct">
                                            <img src="./assets/images/product/fashion/product-6.png" alt="Product Images" />
                                        </Link>
                                        <div class="label-block label-right">
                                            <div class="product-badget">20% Off</div>
                                        </div>
                                        <div class="product-hover-action">
                                            <ul class="cart-action">
                                                <li class="quickview"><Link><i class="far fa-eye"></i></Link></li>
                                                <li class="select-option"><Link to="/cart">Add to Cart</Link></li>
                                                <li class="wishlist"><Link to="/wishlist"><i class="far fa-heart"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="product-content">
                                        <div class="inner">
                                            <h5 class="title"><Link to="/singleProduct">Women's Stylish Hat</Link></h5>
                                            <div class="product-price-variant">
                                                <span class="price current-price">$29.99</span>
                                                <span class="price old-price">$49.99</span>
                                            </div>
                                            <div class="color-variant-wrapper">
                                                <ul class="color-variant">
                                                    <li class="color-extra-01 active"><span><span class="color"></span></span>
                                                    </li>
                                                    <li class="color-extra-02"><span><span class="color"></span></span>
                                                    </li>
                                                    <li class="color-extra-03"><span><span class="color"></span></span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
                                <div class="axil-product product-style-one">
                                    <div class="thumbnail">
                                        <Link to="/singleProduct">
                                            <img src="./assets/images/product/fashion/product-5.png" alt="Product Images" />
                                        </Link>
                                        <div class="product-hover-action">
                                            <ul class="cart-action">
                                                <li class="quickview"><Link><i class="far fa-eye"></i></Link></li>
                                                <li class="select-option"><Link to="/cart">Add to Cart</Link></li>
                                                <li class="wishlist"><Link to="/wishlist"><i class="far fa-heart"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="product-content">
                                        <div class="inner">
                                            <h5 class="title"><Link to="/singleProduct">Solid A Line Dress</Link></h5>
                                            <div class="product-price-variant">
                                                <span class="price current-price">$100.00</span>
                                                <span class="price old-price">$150.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
                                <div class="axil-product product-style-one">
                                    <div class="thumbnail">
                                        <Link to="/singleProduct">
                                            <img src="./assets/images/product/fashion/product-4.png" alt="Product Images" />
                                        </Link>
                                        <div class="label-block label-right">
                                            <div class="product-badget">20% Off</div>
                                        </div>
                                        <div class="product-hover-action">
                                            <ul class="cart-action">
                                                <li class="quickview"><Link ><i class="far fa-eye"></i></Link></li>
                                                <li class="select-option"><Link to="/cart">Add to Cart</Link></li>
                                                <li class="wishlist"><Link to="/wishlist"><i class="far fa-heart"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="product-content">
                                        <div class="inner">
                                            <h5 class="title"><Link to="/singleProduct">Denim Jacket</Link></h5>
                                            <div class="product-price-variant">
                                                <span class="price current-price">$50.00</span>
                                                <span class="price old-price">$89.99</span>
                                            </div>
                                            <div class="color-variant-wrapper">
                                                <ul class="color-variant">
                                                    <li class="color-extra-01 active"><span><span class="color"></span></span>
                                                    </li>
                                                    <li class="color-extra-02"><span><span class="color"></span></span>
                                                    </li>
                                                    <li class="color-extra-03"><span><span class="color"></span></span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
                                <div class="axil-product product-style-one">
                                    <div class="thumbnail">
                                        <Link to="/singleProduct">
                                            <img src="./assets/images/product/fashion/product-3.png" alt="Product Images" />
                                        </Link>
                                        <div class="label-block label-right">
                                            <div class="product-badget">20% Off</div>
                                        </div>
                                        <div class="product-hover-action">
                                            <ul class="cart-action">
                                                <li class="quickview"><Link><i class="far fa-eye"></i></Link></li>
                                                <li class="select-option"><Link to="/cart">Add to Cart</Link></li>
                                                <li class="wishlist"><Link to="/wishlist"><i class="far fa-heart"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="product-content">
                                        <div class="inner">
                                            <h5 class="title"><Link to="/singleProduct">Leather Bag</Link></h5>
                                            <div class="product-price-variant">
                                                <span class="price current-price">$99.99</span>
                                                <span class="price old-price">$149.99</span>
                                            </div>
                                            <div class="color-variant-wrapper">
                                                <ul class="color-variant">
                                                    <li class="color-extra-01 active"><span><span class="color"></span></span>
                                                    </li>
                                                    <li class="color-extra-02"><span><span class="color"></span></span>
                                                    </li>
                                                    <li class="color-extra-03"><span><span class="color"></span></span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
                                <div class="axil-product product-style-one">
                                    <div class="thumbnail">
                                        <Link to="/singleProduct">
                                            <img src="./assets/images/product/fashion/product-2.png" alt="Product Images" />
                                        </Link>
                                        <div class="label-block label-right">
                                            <div class="product-badget">20% Off</div>
                                        </div>
                                        <div class="product-hover-action">
                                            <ul class="cart-action">
                                                <li class="quickview"><Link><i class="far fa-eye"></i></Link></li>
                                                <li class="select-option"><Link to="/singleProduct">Select Option</Link></li>
                                                <li class="wishlist"><Link to="/wishlist"><i class="far fa-heart"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="product-content">
                                        <div class="inner">
                                            <h5 class="title"><Link to="/singleProduct">Women's Jacket</Link></h5>
                                            <div class="product-price-variant">
                                                <span class="price current-price">$29.99</span>
                                                <span class="price old-price">$49.99</span>
                                            </div>
                                            <div class="color-variant-wrapper">
                                                <ul class="color-variant">
                                                    <li class="color-extra-01 active"><span><span class="color"></span></span>
                                                    </li>
                                                    <li class="color-extra-02"><span><span class="color"></span></span>
                                                    </li>
                                                    <li class="color-extra-03"><span><span class="color"></span></span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
                                <div class="axil-product product-style-one">
                                    <div class="thumbnail">
                                        <Link to="/singleProduct">
                                            <img src="./assets/images/product/fashion/product-1.png" alt="Product Images" />
                                        </Link>
                                        <div class="label-block label-right">
                                            <div class="product-badget">20% Off</div>
                                        </div>
                                        <div class="product-hover-action">
                                            <ul class="cart-action">
                                                <li class="quickview"><Link><i class="far fa-eye"></i></Link></li>
                                                <li class="select-option"><Link to="/cart">Add to Cart</Link></li>
                                                <li class="wishlist"><Link to="/wishlist"><i class="far fa-heart"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="product-content">
                                        <div class="inner">
                                            <h5 class="title"><Link to="/singleProduct">Men's Tshirt</Link></h5>
                                            <div class="product-price-variant">
                                                <span class="price current-price">$29.99</span>
                                                <span class="price old-price">$39.99</span>
                                            </div>
                                            <div class="color-variant-wrapper">
                                                <ul class="color-variant">
                                                    <li class="color-extra-01 active"><span><span class="color"></span></span>
                                                    </li>
                                                    <li class="color-extra-02"><span><span class="color"></span></span>
                                                    </li>
                                                    <li class="color-extra-03"><span><span class="color"></span></span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            

                        </div>
                    </div>
                    
                    <div class="slick-single-layout">
                        <div class="row row--15">
                            <div class="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
                                <div class="axil-product product-style-one">
                                    <div class="thumbnail">
                                        <Link to="/singleProduct">
                                            <img src="./assets/images/product/fashion/product-8.png" alt="Product Images" />
                                        </Link>
                                        <div class="label-block label-right">
                                            <div class="product-badget">20% Off</div>
                                        </div>
                                        <div class="product-hover-action">
                                            <ul class="cart-action">
                                                <li class="quickview"><Link><i class="far fa-eye"></i></Link></li>
                                                <li class="select-option"><Link to="/cart">Add to Cart</Link></li>
                                                <li class="wishlist"><Link to="/wishlist"><i class="far fa-heart"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="product-content">
                                        <div class="inner">
                                            <h5 class="title"><Link to="/singleProduct">Leather Jacket</Link></h5>
                                            <div class="product-price-variant">
                                                <span class="price current-price">$29.99</span>
                                                <span class="price old-price">$49.99</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
                                <div class="axil-product product-style-one">
                                    <div class="thumbnail">
                                        <Link to="/singleProduct">
                                            <img src="./assets/images/product/fashion/product-7.png" alt="Product Images" />
                                        </Link>
                                        <div class="product-hover-action">
                                            <ul class="cart-action">
                                                <li class="quickview"><Link><i class="far fa-eye"></i></Link></li>
                                                <li class="select-option"><Link to="/singleProduct">Select Option</Link></li>
                                                <li class="wishlist"><Link to="/wishlist"><i class="far fa-heart"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="product-content">
                                        <div class="inner">
                                            <h5 class="title"><Link to="/singleProduct">Men's Stylish Hat</Link></h5>
                                            <div class="product-price-variant">
                                                <span class="price current-price">$25.00</span>
                                                <span class="price old-price">$35.99</span>
                                            </div>
                                            <div class="color-variant-wrapper">
                                                <ul class="color-variant">
                                                    <li class="color-extra-01 active"><span><span class="color"></span></span>
                                                    </li>
                                                    <li class="color-extra-02"><span><span class="color"></span></span>
                                                    </li>
                                                    <li class="color-extra-03"><span><span class="color"></span></span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
                                <div class="axil-product product-style-one">
                                    <div class="thumbnail">
                                        <Link to="/singleProduct">
                                            <img src="./assets/images/product/fashion/product-6.png" alt="Product Images" />
                                        </Link>
                                        <div class="label-block label-right">
                                            <div class="product-badget">20% Off</div>
                                        </div>
                                        <div class="product-hover-action">
                                            <ul class="cart-action">
                                                <li class="quickview"><Link><i class="far fa-eye"></i></Link></li>
                                                <li class="select-option"><Link to="/cart">Add to Cart</Link></li>
                                                <li class="wishlist"><Link to="/wishlist"><i class="far fa-heart"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="product-content">
                                        <div class="inner">
                                            <h5 class="title"><Link to="/singleProduct">Women's Stylish Hat</Link></h5>
                                            <div class="product-price-variant">
                                                <span class="price current-price">$29.99</span>
                                                <span class="price old-price">$49.99</span>
                                            </div>
                                            <div class="color-variant-wrapper">
                                                <ul class="color-variant">
                                                    <li class="color-extra-01 active"><span><span class="color"></span></span>
                                                    </li>
                                                    <li class="color-extra-02"><span><span class="color"></span></span>
                                                    </li>
                                                    <li class="color-extra-03"><span><span class="color"></span></span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
                                <div class="axil-product product-style-one">
                                    <div class="thumbnail">
                                        <Link to="/singleProduct">
                                            <img src="./assets/images/product/fashion/product-5.png" alt="Product Images" />
                                        </Link>
                                        <div class="product-hover-action">
                                            <ul class="cart-action">
                                                <li class="quickview"><Link><i class="far fa-eye"></i></Link></li>
                                                <li class="select-option"><Link to="/cart">Add to Cart</Link></li>
                                                <li class="wishlist"><Link to="/wishlist"><i class="far fa-heart"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="product-content">
                                        <div class="inner">
                                            <h5 class="title"><Link to="/singleProduct">Solid A Line Dress</Link></h5>
                                            <div class="product-price-variant">
                                                <span class="price current-price">$100.00</span>
                                                <span class="price old-price">$150.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
                                <div class="axil-product product-style-one">
                                    <div class="thumbnail">
                                        <Link to="/singleProduct">
                                            <img src="./assets/images/product/fashion/product-4.png" alt="Product Images" />
                                        </Link>
                                        <div class="label-block label-right">
                                            <div class="product-badget">20% Off</div>
                                        </div>
                                        <div class="product-hover-action">
                                            <ul class="cart-action">
                                                <li class="quickview"><Link><i class="far fa-eye"></i></Link></li>
                                                <li class="select-option"><Link to="/cart">Add to Cart</Link></li>
                                                <li class="wishlist"><Link to="/wishlist"><i class="far fa-heart"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="product-content">
                                        <div class="inner">
                                            <h5 class="title"><Link to="/singleProduct">Denim Jacket</Link></h5>
                                            <div class="product-price-variant">
                                                <span class="price current-price">$50.00</span>
                                                <span class="price old-price">$89.99</span>
                                            </div>
                                            <div class="color-variant-wrapper">
                                                <ul class="color-variant">
                                                    <li class="color-extra-01 active"><span><span class="color"></span></span>
                                                    </li>
                                                    <li class="color-extra-02"><span><span class="color"></span></span>
                                                    </li>
                                                    <li class="color-extra-03"><span><span class="color"></span></span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
                                <div class="axil-product product-style-one">
                                    <div class="thumbnail">
                                        <Link to="/singleProduct">
                                            <img src="./assets/images/product/fashion/product-3.png" alt="Product Images" />
                                        </Link>
                                        <div class="label-block label-right">
                                            <div class="product-badget">20% Off</div>
                                        </div>
                                        <div class="product-hover-action">
                                            <ul class="cart-action">
                                                <li class="quickview"><Link><i class="far fa-eye"></i></Link></li>
                                                <li class="select-option"><Link to="/cart">Add to Cart</Link></li>
                                                <li class="wishlist"><Link to="/wishlist"><i class="far fa-heart"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="product-content">
                                        <div class="inner">
                                            <h5 class="title"><Link to="/singleProduct">Leather Bag</Link></h5>
                                            <div class="product-price-variant">
                                                <span class="price current-price">$99.99</span>
                                                <span class="price old-price">$149.99</span>
                                            </div>
                                            <div class="color-variant-wrapper">
                                                <ul class="color-variant">
                                                    <li class="color-extra-01 active"><span><span class="color"></span></span>
                                                    </li>
                                                    <li class="color-extra-02"><span><span class="color"></span></span>
                                                    </li>
                                                    <li class="color-extra-03"><span><span class="color"></span></span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
                                <div class="axil-product product-style-one">
                                    <div class="thumbnail">
                                        <Link to="/singleProduct">
                                            <img src="./assets/images/product/fashion/product-2.png" alt="Product Images" />
                                        </Link>
                                        <div class="label-block label-right">
                                            <div class="product-badget">20% Off</div>
                                        </div>
                                        <div class="product-hover-action">
                                            <ul class="cart-action">
                                                <li class="quickview"><Link><i class="far fa-eye"></i></Link></li>
                                                <li class="select-option"><Link to="/singleProduct">Select Option</Link></li>
                                                <li class="wishlist"><Link to="/wishlist"><i class="far fa-heart"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="product-content">
                                        <div class="inner">
                                            <h5 class="title"><Link to="/singleProduct">Women's Jacket</Link></h5>
                                            <div class="product-price-variant">
                                                <span class="price current-price">$29.99</span>
                                                <span class="price old-price">$49.99</span>
                                            </div>
                                            <div class="color-variant-wrapper">
                                                <ul class="color-variant">
                                                    <li class="color-extra-01 active"><span><span class="color"></span></span>
                                                    </li>
                                                    <li class="color-extra-02"><span><span class="color"></span></span>
                                                    </li>
                                                    <li class="color-extra-03"><span><span class="color"></span></span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
                                <div class="axil-product product-style-one">
                                    <div class="thumbnail">
                                        <Link to="/singleProduct">
                                            <img src="./assets/images/product/fashion/product-1.png" alt="Product Images" />
                                        </Link>
                                        <div class="label-block label-right">
                                            <div class="product-badget">20% Off</div>
                                        </div>
                                        <div class="product-hover-action">
                                            <ul class="cart-action">
                                                <li class="quickview"><Link><i class="far fa-eye"></i></Link></li>
                                                <li class="select-option"><Link to="/cart">Add to Cart</Link></li>
                                                <li class="wishlist"><Link to="/wishlist"><i class="far fa-heart"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="product-content">
                                        <div class="inner">
                                            <h5 class="title"><Link to="/singleProduct">Men's Tshirt</Link></h5>
                                            <div class="product-price-variant">
                                                <span class="price current-price">$29.99</span>
                                                <span class="price old-price">$39.99</span>
                                            </div>
                                            <div class="color-variant-wrapper">
                                                <ul class="color-variant">
                                                    <li class="color-extra-01 active"><span><span class="color"></span></span>
                                                    </li>
                                                    <li class="color-extra-02"><span><span class="color"></span></span>
                                                    </li>
                                                    <li class="color-extra-03"><span><span class="color"></span></span>
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
                <div class="row">
                    <div class="col-lg-12 text-center mt--20 mt_sm--0">
                        <Link to="/shop" class="axil-btn btn-bg-lighter btn-load-more">View All Products</Link>
                    </div>
                </div>

            </div>
        </div>
        

        <div class="axil-testimoial-area axil-section-gap bg-vista-white">
            <div class="container">
                <div class="section-title-wrapper">
                    <span class="title-highlighter highlighter-secondary"> <i class="fal fa-quote-left"></i>Testimonials</span>
                    <h2 class="title">Users Feedback</h2>
                </div>
                
                <div class="testimonial-slick-activation testimonial-style-one-wrapper slick-layout-wrapper--20 axil-slick-arrow arrow-top-slide">
                    <div class="row">
                        <div class="slick-single-layout testimonial-style-one col-lg-4">
                            <div class="review-speech">
                                <p>“ It’s amazing how much easier it has been to
                                    meet new people and create instantly non
                                    connections. I have the exact same personal
                                    the only thing that has changed is my mind
                                    set and a few behaviors. “</p>
                            </div>
                            <div class="media">
                                <div class="thumbnail">
                                    <img src="./assets/images/testimonial/image-1.png" alt="testimonial" />
                                </div>
                                <div class="media-body">
                                    <span class="designation">Head Of Idea</span>
                                    <h6 class="title">James C. Anderson</h6>
                                </div>
                            </div>
                            
                        </div>
                        
                        <div class="slick-single-layout testimonial-style-one col-lg-4">
                            <div class="review-speech">
                                <p>“ It’s amazing how much easier it has been to
                                    meet new people and create instantly non
                                    connections. I have the exact same personal
                                    the only thing that has changed is my mind
                                    set and a few behaviors. “</p>
                            </div>
                            <div class="media">
                                <div class="thumbnail">
                                    <img src="./assets/images/testimonial/image-2.png" alt="testimonial " />
                                </div>
                                <div class="media-body">
                                    <span class="designation">Head Of Idea</span>
                                    <h6 class="title">James C. Anderson</h6>
                                </div>
                            </div>
                            
                        </div>
                        <div class="slick-single-layout testimonial-style-one col-lg-4">
                            <div class="review-speech">
                                <p>“ It’s amazing how much easier it has been to
                                    meet new people and create instantly non
                                    connections. I have the exact same personal
                                    the only thing that has changed is my mind
                                    set and a few behaviors. “</p>
                            </div>
                            <div class="media">
                                <div class="thumbnail">
                                    <img src="./assets/images/testimonial/image-3.png" alt="testimonial " />
                                </div>
                                <div class="media-body">
                                    <span class="designation">Head Of Idea</span>
                                    <h6 class="title">James C. Anderson</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                
                    

                </div>
            </div>
        </div>
        
        <div class="axil-product-area bg-color-white axil-section-gap">
            <div class="container">
                <div class="section-title-wrapper">
                    <span class="title-highlighter highlighter-primary"> <i class="far fa-shopping-basket"></i> Our Products</span>
                    <h2 class="title">Explore our Products</h2>
                </div>
                <div class="explore-product-activation slick-layout-wrapper slick-layout-wrapper--15 axil-slick-arrow arrow-top-slide">
                    <div class="slick-single-layout">
                        <div class="row row--15">
                            <div class="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
                                <div class="axil-product product-style-one">
                                    <div class="thumbnail">
                                        <Link to="/singleProduct">
                                            <img class="rounded" src="./assets/images/product/fashion/product-8.png" alt="Product Images" />
                                        </Link>
                                        <div class="label-block label-right">
                                            <div class="product-badget">20% Off</div>
                                        </div>
                                        <div class="product-hover-action">
                                            <ul class="cart-action">
                                                <li class="quickview"><Link><i class="far fa-eye"></i></Link></li>
                                                <li class="select-option"><Link to="/cart">Add to Cart</Link></li>
                                                <li class="wishlist"><Link to="/wishlist"><i class="far fa-heart"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="product-content">
                                        <div class="inner">
                                            <h5 class="title"><Link to="/singleProduct">Leather Jacket</Link></h5>
                                            <div class="product-price-variant">
                                                <span class="price current-price">$29.99</span>
                                                <span class="price old-price">$49.99</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
                                <div class="axil-product product-style-one">
                                    <div class="thumbnail">
                                        <Link to="/singleProduct">
                                            <img src="./assets/images/product/fashion/product-7.png" alt="Product Images" />
                                        </Link>
                                        <div class="product-hover-action">
                                            <ul class="cart-action">
                                                <li class="quickview"><Link><i class="far fa-eye"></i></Link></li>
                                                <li class="select-option"><Link to="/singleProduct">Select Option</Link></li>
                                                <li class="wishlist"><Link to="/wishlist"><i class="far fa-heart"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="product-content">
                                        <div class="inner">
                                            <h5 class="title"><Link to="/singleProduct">Men's Stylish Hat</Link></h5>
                                            <div class="product-price-variant">
                                                <span class="price current-price">$25.00</span>
                                                <span class="price old-price">$35.99</span>
                                            </div>
                                            <div class="color-variant-wrapper">
                                                <ul class="color-variant">
                                                    <li class="color-extra-01 active"><span><span class="color"></span></span>
                                                    </li>
                                                    <li class="color-extra-02"><span><span class="color"></span></span>
                                                    </li>
                                                    <li class="color-extra-03"><span><span class="color"></span></span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
                                <div class="axil-product product-style-one">
                                    <div class="thumbnail">
                                        <Link to="/singleProduct">
                                            <img src="./assets/images/product/fashion/product-6.png" alt="Product Images" />
                                        </Link>
                                        <div class="label-block label-right">
                                            <div class="product-badget">20% Off</div>
                                        </div>
                                        <div class="product-hover-action">
                                            <ul class="cart-action">
                                                <li class="quickview"><Link><i class="far fa-eye"></i></Link></li>
                                                <li class="select-option"><Link to="/cart">Add to Cart</Link></li>
                                                <li class="wishlist"><Link to="/wishlist"><i class="far fa-heart"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="product-content">
                                        <div class="inner">
                                            <h5 class="title"><Link to="/singleProduct">Women's Stylish Hat</Link></h5>
                                            <div class="product-price-variant">
                                                <span class="price current-price">$29.99</span>
                                                <span class="price old-price">$49.99</span>
                                            </div>
                                            <div class="color-variant-wrapper">
                                                <ul class="color-variant">
                                                    <li class="color-extra-01 active"><span><span class="color"></span></span>
                                                    </li>
                                                    <li class="color-extra-02"><span><span class="color"></span></span>
                                                    </li>
                                                    <li class="color-extra-03"><span><span class="color"></span></span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
                                <div class="axil-product product-style-one">
                                    <div class="thumbnail">
                                        <Link to="/singleProduct">
                                            <img src="./assets/images/product/fashion/product-5.png" alt="Product Images" />
                                        </Link>
                                        <div class="product-hover-action">
                                            <ul class="cart-action">
                                                <li class="quickview"><Link><i class="far fa-eye"></i></Link></li>
                                                <li class="select-option"><Link to="/cart">Add to Cart</Link></li>
                                                <li class="wishlist"><Link to="/wishlist"><i class="far fa-heart"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="product-content">
                                        <div class="inner">
                                            <h5 class="title"><Link to="/singleProduct">Solid A Line Dress</Link></h5>
                                            <div class="product-price-variant">
                                                <span class="price current-price">$100.00</span>
                                                <span class="price old-price">$150.00</span>
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
        
        <div class="axil-newsletter-area axil-section-gap pt--0">
            <div class="container">
                <div class="etrade-newsletter-wrapper bg_image bg_image--12">
                    <div class="newsletter-content">
                        <span class="title-highlighter highlighter-primary2"><i class="fas fa-envelope-open"></i>Newsletter</span>
                        <h2 class="title mb--40 mb_sm--30">Get weekly update</h2>
                        <div class="input-group newsletter-form">
                            <div class="position-relative newsletter-inner mb--15">
                                <input placeholder="example@gmail.com" type="text" />
                            </div>
                            <button type="submit" class="axil-btn mb--15">Subscribe</button>
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