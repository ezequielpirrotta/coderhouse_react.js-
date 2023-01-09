import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../carts/CartContext";

function Profile () {
    const {auth, closeUserSession} = useContext(CartContext)
    return(
        <div className="container m-2">
            <div className="col d-flex">

                <ul className=" row nav flex-column">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Perfil</a>
                    </li>
                    <li className="nav-item">
                        <Link to={"/orders/"+auth.currentUser.uid} className="nav-link">Ordenes</Link>
                    </li>
                    <li className="nav-item align-self-center">
                        <Link to={"/"} onClick={closeUserSession} className="nav-link btn-danger" >Salir</Link>
                    </li>
                </ul>
            </div>
            <div className="row">
                <div>

                </div>
            </div>
        </div>
    );
}
export default Profile;