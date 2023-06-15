// import React from 'react';
import Card from "../Card/Card.jsx";
import Title from "../Title/Title.jsx"
import styles from "./Blog.module.css";
import image1 from "../../Images/image1.jpg";
import image2 from "../../Images/image2.jpg";
import image3 from "../../Images/image3.jpg";
import image4 from "../../Images/image4.jpg";

const Blog = ({toggelDarkMode}) => {
  return (
    <>
		<Title title={"Blog"} toggelDarkMode={toggelDarkMode} />
		<div className={styles.container}>
      <Card image={image1} title={"Post 1"} description={"Lorem Lorem Lorem"} toggelDarkMode={toggelDarkMode} />
      <Card image={image2} title={"Post 2"} description={"Lorem Lorem Lorem"} toggelDarkMode={toggelDarkMode} />
      <Card image={image3} title={"Post 3"} description={"Lorem Lorem Lorem"} toggelDarkMode={toggelDarkMode} />
      <Card image={image4} title={"Post 4"} description={"Lorem Lorem Lorem"} toggelDarkMode={toggelDarkMode} />
		</div>
    </>
  );
};

export default Blog;
