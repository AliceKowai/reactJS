import React from "react";
import logo from "../assets/react.svg"

import NavBar from "./Components/Navbar";
import styles from "./Header.module.css"
import Sidebar from "./Components/sidebar";

const Header = () => {
  return (
    <header className="bg-light p-2">
      <NavBar />
    </header>

  );
};

export default Header