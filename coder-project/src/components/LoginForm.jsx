import React, { useContext } from "react";
import { CartContext } from "./carts/CartContext";

function LoginForm() {
    const {auth} = useContext(CartContext);
    //const provider = new GoogleAuthProvider();
    
    return(
        
        <div className="card col-md-7" width='18rem'>
            <div className="card-body">
                <div className="container d-flex justify-content flex-column m-3">
                    
                    <div className="mb-3 row d-inline-flex p-2 bd-highlight">
                        <label htmlFor="emailInput1" className="col-sm-2 col-form-label">Correo electrónico</label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control" id="emailInput1" placeholder="name@example.com"/>
                        </div>
                    </div>
                    <div className="mb-3 row d-inline-flex p-2 bd-highlight">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Contraseña</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control " id="inputPassword"/>
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
            
        
    );
}
export default LoginForm;
/**
 * <div className="mb-3 row d-inline-flex p-2 bd-highlight">
        <label htmlFor="nameInput" className="col-sm-2 col-form-label">Nombre</label>
        <div className="col-sm-10">
            <input type="email" className="form-control" id="nameInput" />
        </div>
    </div>
    <div className="mb-3 row d-inline-flex p-2 bd-highlight">
        <label htmlFor="lastNameInput" className="col-sm-2 col-form-label">Apellido</label>
        <div className="col-sm-10">
            <input type="email" className="form-control" id="lastNameInput" />
        </div>
    </div>
    <div className="mb-3 row d-inline-flex p-2 bd-highlight">
        <label htmlFor="cellNumberInput" className="col-sm-2 col-form-label">Celular</label>
        <div className="col-sm-10">
            <input type="email" className="form-control" id="cellNumberInput" />
        </div>
    </div>
*/