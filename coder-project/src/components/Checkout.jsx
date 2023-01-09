import React from "react";
import { CartContext } from "./carts/CartContext";
import { useContext } from "react";
import CheckoutForm from "./CheckoutForm";
import { Link } from "react-router-dom";


function Checkout () {
    const {login,loginGoogle} = useContext(CartContext)

    
    return (
        <div className="container">
            <CheckoutForm/>
            {
                () => {
                    if(!login) {
                        return(
                            <Link className="row mb-2 btn btn-warning" onClick={loginGoogle} title="Inicia sesión con Google">Inicia sesión con Google</Link>
                        );
                    }
                }
            }
        </div>
    );
}
export default Checkout;