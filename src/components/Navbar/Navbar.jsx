// import React from 'react';
import { useState } from "react";
import logo from "../../Images/logo.png";
import styles from "./Navbar.module.css";
import sun from "../../Images/sun.png";
import moon from "../../Images/moon.png";

const Navbar = ({toggelDarkMode,setToggelDarkMode}) => {
  const [toggelHamburger, setToggelHamburger] = useState(false);
  const hamburgerHandler = () => {
    setToggelHamburger(!toggelHamburger);
  };
  const darkModeHandler = () => {
    setToggelDarkMode(!toggelDarkMode);
  };

  return (
    <header className={`${styles.header} ${toggelDarkMode && styles.darkHeader}`}>
      <div className={styles.menu}>
        <ul
          className={`${styles.list} ${
            toggelHamburger && styles.listOpenHamburger
          }`}
        >
          <a href="#">
            <li>Home</li>
          </a>
          <a href="#">
            <li>Product</li>
          </a>
          <a href="#">
            <li>About Us</li>
          </a>
          <a href="#">
            <li>Blog</li>
          </a>
          <a href="#">
            <li>Contact US</li>
          </a>
        </ul>
        <div
          className={`${styles.hamburger__menu} ${
            toggelHamburger && styles.hamburgerOpen
          }`}
          onClick={hamburgerHandler}
        >
          <div className={styles.menu__line}></div>
        </div>
      </div>
      <div className={styles.right}>
        <img
          src={toggelDarkMode ? sun : moon}
          className={styles.darkModeBtn}
          onClick={darkModeHandler}
        />
        <img src={logo} />
      </div>
    </header>
  );
};

export default Navbar;
