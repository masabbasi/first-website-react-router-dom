import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import ProductsPage from "./components/Products/ProductsPage.jsx";
import AboutusPage from "./components/Aboutus/AboutusPage.jsx";
import BlogPage from "./components/Blog/BlogPage.jsx";
import ContactusPage from "./components/Contactus/ContactusPage.jsx";
import "./main.css"

function App() {
  return (
		<BrowserRouter>
		<Routes>
			<Route path="/first-website-react-router-dom/" element={<Home />} />
			<Route path="/first-website-react-router-dom/products" element={<ProductsPage />} />
			<Route path="/first-website-react-router-dom/aboutus" element={<AboutusPage />} />
			<Route path="/first-website-react-router-dom/blog" element={<BlogPage />} />
			<Route path="/first-website-react-router-dom/contactus" element={<ContactusPage />} />
		</Routes>
		</BrowserRouter>
	);
}

export default App;