import { useState } from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Banner from "./components/Banner/Banner.jsx";
import Blog from "./components/Blog/Blog.jsx";
import Products from "./components/Products/Product.jsx";
import Aboutus from "./components/Aboutus/Aboutus.jsx";
import Contactus from "./components/Contactus/Contactus.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "./main.css"

function App() {
	const [toggelDarkMode, setToggelDarkMode] = useState(false);
  return (
		<div className={toggelDarkMode ? "darkMode" : ""}>
		<Navbar toggelDarkMode={toggelDarkMode} setToggelDarkMode={setToggelDarkMode} />
		<Banner />
		<Products toggelDarkMode={toggelDarkMode} />
		<Aboutus toggelDarkMode={toggelDarkMode} />
		<Blog toggelDarkMode={toggelDarkMode} />
		<Contactus toggelDarkMode={toggelDarkMode} />
		<Footer />
		</div>
	);
}

export default App;
