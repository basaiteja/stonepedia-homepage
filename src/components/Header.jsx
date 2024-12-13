import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,        
      }}>
      <Navbar />
    </header>
  );
};

export default Header;
