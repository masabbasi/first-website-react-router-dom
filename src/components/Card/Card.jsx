// import React from 'react';
import styles from "./Card.module.css";

const Card = ({image,title,description,toggelDarkMode}) => {
  return (
<div className={`${styles.container} ${toggelDarkMode && styles.darkContainer}`}>
	<img src={image} />
	<a href="#"><h3>{title}</h3></a>
	<p>{description}</p>
</div>
  );
};

export default Card;
