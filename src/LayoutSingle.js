import React from 'react';
import HeaderSingle from './HeaderSingle';
import FooterSingle from './FooterSingle';
import {Outlet} from 'react-router-dom';

const LayoutSingle = () => {
  return (
    <>
        <HeaderSingle />
        <Outlet />
        <FooterSingle />
    </>
  )
}

export default LayoutSingle;