import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./Components/pages/Home";
import Cards from "./Components/pages/Cards";

import "./App.css";

function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Switch>
					<Route path="/" exact component={Home} />
				</Switch>
				<Cards />
			</Router>
		</>
	);
}

export default App;
