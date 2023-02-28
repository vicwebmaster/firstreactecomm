import React from 'react';
import HeaderII from './HeaderII';
import Footer from './Footer';
import ServiceArea from './ServiceArea';
import {Outlet} from 'react-router-dom';

const LayoutII = () => {
  return (
    <>
        <HeaderII />
        <Outlet />
        <ServiceArea />
        <Footer />
    </>
  )
}

export default LayoutII;