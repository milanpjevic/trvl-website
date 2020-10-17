import React from "react";
import HeroSection from "../HeroSection";
import "../../App.css";
import Cards from "./Cards";
import Footer from "../Footer";

const Home = () => {
	return (
		<>
			<HeroSection />
			<Cards />
			<Footer />
		</>
	);
};

export default Home;
