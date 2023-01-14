import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../carts/CartContext";


function User () {
    const {currentUser, closeUserSession} = useContext(CartContext)
    return(
        <div className="container m-2 flex-row">
            <div className="col d-flex">

                <ul className="nav flex-column">
                    <li className="nav-item">
                        <Link to={"/orders/"+currentUser.uid} className="nav-link">Ordenes</Link>
                    </li>
                    <li className="nav-item align-self-center">
                        <Link to={"/"} onClick={closeUserSession} className="nav-link btn btn-danger" >Salir</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default User;