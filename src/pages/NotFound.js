import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import {Link} from 'react-router-dom';

const NotFound = () => {
  return (
    <>
    <Header />
    <section class="error-page onepage-screen-area">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="content">
                        <span class="title-highlighter highlighter-secondary"> <i class="fal fa-exclamation-circle"></i> Oops! Somthing's missing.</span>
                        <h1 class="title">Page not found</h1>
                        <p>It seems like we dont find what you searched. The page you were looking for doesn't exist, isn't available loading incorrectly.</p>
                        <p><Link to="/" class="axil-btn btn-bg-secondary right-icon">Back To Home <i class="fal fa-long-arrow-right"></i></Link></p>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="thumbnail">
                        <img src="assets/images/others/404.png" alt="404" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer />
    </>
  )
}

export default NotFound