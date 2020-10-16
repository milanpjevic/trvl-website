import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	const [click, setClick] = useState(false);

	const clickHandler = () => setClick(!click);
	const closeMobileMenuHandler = () => setClick(false);

	return (
		<>
			<nav className="navbar">
				<div className="navbar-container">
					<Link to="/" className="navbar-logo">
						TRVL <i class="fab fa-typo3"></i>
					</Link>
					<div className="menu-icon" onClick={clickHandler}>
						<i className={click ? "fas fa-times" : "fas fa-bars"}></i>
					</div>
					<ul className={click ? "nav-menu active" : "nav-menu"}>
						<li className="nav-item">
							<Link className="nav-link" to="/" onClick={closeMobileMenuHandler}>
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/services" onClick={closeMobileMenuHandler}>
								Services
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/products" onClick={closeMobileMenuHandler}>
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
				</div>
			</nav>
		</>
	);
};

export default Navbar;
