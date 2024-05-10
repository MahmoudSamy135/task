import React, { useState } from "react";
import "./navBar.css";
import { Link } from "react-router-dom";

function Navbar() {
    const [activeLink, setActiveLink] = useState("/");

    const handleNavLinkClick = (path) => {
        setActiveLink(path);
    };

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" id="nav">
            <div className="container-fluid">
                <a className="navbar-brand" href="/" id="space">Space</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation" >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <Link className={`nav-link ${activeLink === "/" ? "active" : ""}`} to="/" onClick={() => handleNavLinkClick("/")}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${activeLink === "/Products" ? "active" : ""}`} to="/Products" onClick={() => handleNavLinkClick("/Products")}>Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${activeLink === "/About" ? "active" : ""}`} to="/About" onClick={() => handleNavLinkClick("/About")}>About</Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit" id="bbb">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;