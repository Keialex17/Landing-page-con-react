import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";

//create your first component
const Home = () => {
	return (
		<div>
		<Navbar/>
		<div className="container">
		<Jumbotron/>
		<div className="row">
		<Card/>
		<Card/>
		<Card/>
		<Card/>
		</div>
		</div>
		</div>
	);
};

export default Home;
