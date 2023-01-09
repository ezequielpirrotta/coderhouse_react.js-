import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./carts/CartContext";
import LoginForm from "./LoginForm";


function CheckoutForm () {
    const {cart,totalPrice, auth} = useContext(CartContext);
    //const provider = new GoogleAuthProvider();
    
    return(

        <div className="row m-3 d-flex justify-content-center flex-row">
            <h5 className="card-title">Su compra</h5>        
            <h6 className ="card-subtitle mb-2 text-muted">Total: ${totalPrice()}</h6>
            {
                !auth.currentUser?
                    <Link className="btn" to={"/login"}>Inicia sesión</Link>
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
export default CheckoutForm;          