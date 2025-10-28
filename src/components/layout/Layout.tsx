// Layout.jsx
import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav";

interface LayoutProps {
  children: ReactNode; // Works for any JSX, string, fragment, etc.
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout-container">
      <Header />
      <Nav />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
