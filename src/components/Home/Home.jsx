// import React from 'react';
import { useState } from "react";
import Navbar from "../Navbar/Navbar.jsx";
import Banner from "../Banner/Banner.jsx";
import Blog from "../Blog/Blog.jsx";
import Products from "../Products/Product.jsx";
import Aboutus from "../Aboutus/Aboutus.jsx";
import Contactus from "../Contactus/Contactus.jsx";
import Footer from "../Footer/Footer.jsx";
import styles from "./Home.module.css";
import Title from "../Title/Title.jsx";

const Home = () => {
	const [toggelDarkMode, setToggelDarkMode] = useState(false);
  return (
    <>
      <div className={toggelDarkMode ? "darkMode" : ""}>
        <Navbar
          toggelDarkMode={toggelDarkMode}
          setToggelDarkMode={setToggelDarkMode}
        />
        <Banner />
        <Products toggelDarkMode={toggelDarkMode} />
        <Aboutus toggelDarkMode={toggelDarkMode} />
        <Blog toggelDarkMode={toggelDarkMode} />
        <Contactus toggelDarkMode={toggelDarkMode} />
        <Footer />
      </div>
    </>
  );
};

export default Home;
