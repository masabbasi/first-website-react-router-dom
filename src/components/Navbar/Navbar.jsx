// import React from 'react';
import { useState } from "react";
import logo from "../../Images/logo.png";
import styles from "./Navbar.module.css";
import sun from "../../Images/sun.png";
import moon from "../../Images/moon.png";
import { Link } from "react-router-dom";

const Navbar = ({ toggelDarkMode, setToggelDarkMode }) => {
  const [toggelHamburger, setToggelHamburger] = useState(false);
  const hamburgerHandler = () => {
    setToggelHamburger(!toggelHamburger);
  };
  const darkModeHandler = () => {
    setToggelDarkMode(!toggelDarkMode);
  };

	const closeMenuHandler = ()=>{
		setToggelHamburger(false)
	};

  return (
    <header
      className={`${styles.header} ${toggelDarkMode && styles.darkHeader}`}
    >
      <div className={styles.menu}>
        <ul
          className={`${styles.list} ${
            toggelHamburger && styles.listOpenHamburger
          } ${toggelDarkMode && styles.darkHamburger}`}
        >
          <Link onClick={closeMenuHandler} className={styles.link} to="/first-website-react-router-dom/">Home</Link>
          <Link onClick={closeMenuHandler} className={styles.link} to="/first-website-react-router-dom/products">Products</Link>
          <Link onClick={closeMenuHandler} className={styles.link} to="/first-website-react-router-dom/aboutus">About US</Link>
          <Link onClick={closeMenuHandler} className={styles.link} to="/first-website-react-router-dom/blog">Blog</Link>
          <Link onClick={closeMenuHandler} className={styles.link} to="/first-website-react-router-dom/contactus">Contact Us</Link>
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
