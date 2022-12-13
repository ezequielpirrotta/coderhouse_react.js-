import React from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

function NavBar() {
    return (
        <div className='container-fluid header'>
            <div className="row">
                <div className="col-md-6 justify-content-center" >
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <Link className="navbar-brand" to="/"><img id="logo" src={"/img/logo.ico"} alt={"Logo"}
                            width={100}/></Link>
                            <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <NavLink className="nav-link text-decoration-none text-dark" activeclassname = "page" to="/categoria/cafe">Cafés</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link text-decoration-none text-dark" activeclassname = "page" to="/categoria/pasteleria">Pastelería</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link text-decoration-none text-dark" activeclassname = "page" to="/categoria/merchandising">Merchandising</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>   
                </div>
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <CartWidget/>   
                </div>
            </div>
        </div>
    );
}
export default NavBar;