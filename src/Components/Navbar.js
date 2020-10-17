import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import "./Navbar.css";

const Navbar = () => {
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);

	const clickHandler = () => setClick(!click);

	const closeMobileMenuHandler = () => setClick(false);

	const showBtnHandler = () => {
		if (window.innerWidth <= 960) {
			setButton(false);
		} else {
			setButton(true);
		}
	};

	useEffect(() => {
		showBtnHandler();
	}, []);

	window.addEventListener("resize", showBtnHandler);

	return (
		<>
			<nav className="navbar">
				<div className="navbar-container">
					<Link to="/" className="navbar-logo" onClick={closeMobileMenuHandler}>
						TRVL <i className="fab fa-typo3"></i>
					</Link>
					<div className="menu-icon" onClick={clickHandler}>
						<i className={click ? "fas fa-times" : "fas fa-bars"}></i>
					</div>
					<ul className={click ? "nav-menu active" : "nav-menu"}>
						<li className="nav-item">
							<Link className="nav-links" to="/" onClick={closeMobileMenuHandler}>
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-links" to="/services" onClick={closeMobileMenuHandler}>
								Services
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-links" to="/products" onClick={closeMobileMenuHandler}>
								Products
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className="nav-links-mobile"
								to="/sign-up"
								onClick={closeMobileMenuHandler}
							>
								Sign Up
							</Link>
						</li>
					</ul>
					{button && <Button btnStyle="btn--outline">SIGN UP</Button>}
				</div>
			</nav>
		</>
	);
};

export default Navbar;
