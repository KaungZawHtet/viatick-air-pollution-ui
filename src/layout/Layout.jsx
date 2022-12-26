// components
import React from 'react';
import Menu from "../components/layout/Menu";
import Footer from "../components/layout/Footer.jsx";

const Layout = ({ children }) => {
  return (
    <>
      <Menu />
      <main>{children}</main>
    </>
  );
};

export default Layout;
