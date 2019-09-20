import React from "react";
import { Navbar as BootstrapNavbar, NavbarBrand } from "reactstrap"
import { Link } from "react-router-dom"


export default function Navbar(props) {
    return (
        <BootstrapNavbar className="navbar">
            <NavbarBrand className="navbar-title" tag={Link} to="/">&lsaquo;&lsaquo; To World Map</NavbarBrand>
        </BootstrapNavbar>
    );
}