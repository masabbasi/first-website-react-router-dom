// import React from 'react';
import styles from "./Products.module.css";
import Title from "../Title/Title.jsx";
import Card from "../Card/Card.jsx";
import image5 from "../../Images/image5.jpg";
import image6 from "../../Images/image6.jpg";
import image7 from "../../Images/image7.jpg";
import image8 from "../../Images/image8.jpg";

const Products = ({toggelDarkMode}) => {
  return (
<>
<Title title={"Products"} toggelDarkMode={toggelDarkMode} />
<div className={styles.container}>
<Card image={image5} title={"Product 1"} description={"lorem lorem lorem"} toggelDarkMode={toggelDarkMode} />
<Card image={image6} title={"Product 2"} description={"lorem lorem lorem"} toggelDarkMode={toggelDarkMode} />
<Card image={image7} title={"Product 3"} description={"lorem lorem lorem"} toggelDarkMode={toggelDarkMode} />
<Card image={image8} title={"Product 4"} description={"lorem lorem lorem"} toggelDarkMode={toggelDarkMode} />
</div>
	</>
  );
};

export default Products;
