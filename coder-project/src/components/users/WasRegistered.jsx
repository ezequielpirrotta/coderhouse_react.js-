import React, { useContext,  } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../carts/CartContext";

function WasRegistered ({user}) {
    const { auth, login,  } = useContext(CartContext);
    
    return(
        <div className="row justify-content-center ">
            <div className="col-md-12 align-middle" >
                <Link type="submit" className="btn btn-primary" ><p>Continuar como {user.name}</p></Link>
            </div>
        </div>  
    );


}
export default WasRegistered;