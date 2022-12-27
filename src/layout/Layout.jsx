// components
import React from 'react';
import Menu from "../components/layout/Menu";
import Footer from "../components/layout/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Menu />
      <main style={{
        paddingBottom : '50px',
      }}>{children}</main>



    </>
  );
};

export default Layout;
