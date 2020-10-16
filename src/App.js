import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";

import "./App.css";

function App() {
	return (
		<>
			<Router>
				<Navbar>
					<Switch>
						<Route path="/" exact />
					</Switch>
				</Navbar>
			</Router>
		</>
	);
}

export default App;
