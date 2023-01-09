import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../carts/CartContext";
import LoginForm from "../LoginForm";

function Login () {
    const { auth } = useContext(CartContext);
    
    return(
        <div className="row m-3 d-flex justify-content-center flex-row">
           {
            !auth.currentUser?
                <LoginForm/>
                :
                <div className="row justify-content-center ">
                    <div className="col-md-12 align-middle" >
                        <Link to={"/"} className="btn btn-primary"><p>Continuar como {auth.currentUser.displayName}</p></Link>
                    </div>
                </div>
           }
            
        </div>
    );
}
export default Login;