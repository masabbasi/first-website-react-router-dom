import React from "react";
import { useParams } from "react-router-dom";
import { productData } from "../../Data/product_data.js";
import { blogData } from "../../Data/blog_data.js";
import styles from "./detail.module.css";

const Detail= ({toggelDarkMode})=>{
	const {id} = useParams();
	const product = productData.find((productItem)=>productItem.id === id)
	const post = blogData.find((postItem)=>postItem.id === id)
	return(
		<div className={`${styles.detail} ${toggelDarkMode && styles.darkContainer}`}>
		{(product ?<h1>{product.title}</h1>:<h1>{post.title}</h1>)}
		</div>
	)
}

export default Detail;