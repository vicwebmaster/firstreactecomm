import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ServiceArea from './ServiceArea';
import {Outlet} from 'react-router-dom';

const Layout = () => {
  return (
    <>
        <Header />
        <Outlet />
        <ServiceArea />
        <Footer />
    </>
  )
}

export default Layout;