import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div style={{ marginBottom: "57px" }}>
            <nav className="navbar navbar-expand-lg  navbar-light fixed-top" style={{ background: "Black" }}>
                <div className="container-fluid container">
                    <h3 className="text-white">E-commerce</h3>
                    <div className="navbar-nav font-weight-bold ms-auto ">
                        <Link className="nav-link px-3 text-white fw-bold" to="/">Home</Link>
                        <Link className="nav-link px-3 text-white fw-bold" to="/contact">Contact</Link>
                        <Link className="nav-link px-3 text-white fw-bold" to="/productList">Product List</Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};
export default NavBar;