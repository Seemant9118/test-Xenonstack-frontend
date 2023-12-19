import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import {HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";

function NavBar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <nav className="navbar">
            <div className="nav-container">
                <NavLink exact to="/" className="nav-logo">
                    <span>GroShop Ecom</span>
                </NavLink>

                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <NavLink
                            exact
                            to="/"
                            activeClassName="active"
                            className="nav-links"
                            onClick={handleClick}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            exact
                            to="/about"
                            activeClassName="active"
                            className="nav-links"
                            onClick={handleClick}
                        >
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            exact
                            to="/products"
                            activeClassName="active"
                            className="nav-links"
                            onClick={handleClick}
                        >
                            Our Products
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            exact
                            to="/contact"
                            activeClassName="active"
                            className="nav-links"
                            onClick={handleClick}
                        >
                            Contact Us
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            exact
                            to="/login"
                            activeClassName="active"
                            className="nav-links"
                            onClick={handleClick}
                        >
                            Logout
                        </NavLink>
                    </li>
                </ul>
                {/* responsive nav */}
                <div className="nav-icon" onClick={handleClick}>
                    {click ? (
                        <span className="icon">
                            <HamburgetMenuClose />

                        </span>
                    ) : (
                        <span className="icon">
                            <HamburgetMenuOpen />{" "}
                        </span>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default NavBar;