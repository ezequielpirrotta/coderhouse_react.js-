import React from "react";
import CartWidget from "./CartWidget";
function NavBar() {
    return (
        <div className='container-fluid header'>
            <div className="row">
                <div className="col-md-6">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="/"><img id="logo" src={"images/logo.ico"} alt={"Logo"}
                            width={100}/></a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Cafés</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="/">Merchandising</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="/">Contacto</a>
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