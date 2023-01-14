import React, { useContext, useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../carts/CartContext";
import WasRegistered from "./WasRegistered";

function Register () {
    const { login, register } = useContext(CartContext);
    const [ userInfo, setUserInfo ] = useState({})

    const [email, setEmail] = useState("")
    const [verifyEmail, setVerifyEmail] = useState("")
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [cellNumber, setCellNumber] = useState("")

    useEffect(()=>{
        'use strict'
        // Obtener todos los formularios a los que queremos aplicar estilos de validación de Bootstrap personalizados
        var forms = document.querySelectorAll('.needs-validation')
        // Bucle sobre ellos y evitar el envío
        Array.prototype.slice.call(forms)
            .forEach(function (form) {
                form.addEventListener('submit', function (event) {
                    if (!form.checkValidity()) {
                        event.preventDefault()
                        event.stopPropagation()
                    }
            
                    form.classList.add('was-validated')
                }, false)
            });
    })

    const sendUser = (e) => {
        let user = {
            email: email,
            name: name,
            last_name: lastName,
            cell_number: cellNumber 
        }
        setUserInfo(user)
        e.preventDefault()
    }
    
    if(Object.keys(userInfo).length === 0) {

        return(
            <div className="container-fluid m-3 d-flex justify-content-center">
                {
                !login?
                    <div className="card d-flex justify-content-center">
                        <h2 className="card-title"> Resgistrate</h2>
                        
                        <div className="shadow-lg bg-body rounded">

                            <form className="card-body row g-3 justify-content-center needs-validation" onSubmit={sendUser} noValidate>
                                <div className="col-md-4">
                                    <label htmlFor="name" className="form-label">Nombre</label>
                                    <input type="text" className="form-control" name="name" onChange={
                                        e => setName(e.target.value)
                                        } id="name" placeholder="Mark" required/>
                                    <div className="valid-feedback">
                                        ¡Se ve bien!
                                    </div>
                                    <div className="invalid-feedback">
                                        Este campo es requerido
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="last_name" className="form-label">Apellido</label>
                                    <input type="text" className="form-control" onChange={
                                        e => setLastName(e.target.value) 
                                        } id="last_name" placeholder="Otto" required/>
                                    <div className="valid-feedback">
                                        ¡Se ve bien!
                                    </div>
                                    <div className="invalid-feedback">
                                        Este campo es requerido
                                    </div>
                                </div>
                            
                                <div className="col-md-4">
                                    <label htmlFor="email" className="form-label">Mail</label>
                                    <input type="text" className="form-control" onChange={
                                        e => setEmail(e.target.value) 
                                        } id="email" placeholder="alguien@example.com" required/>
                                    {
                                        email.toUpperCase() === verifyEmail.toUpperCase() ? 
                                            <div className="valid-feedback">
                                                ¡Se ve bien!
                                            </div>
                                            :
                                            <div className="invalid-feedback">
                                                Los mail deben coincidir
                                            </div>
                                    }
                                    {
                                        !email? 
                                            <div className="invalid-feedback">
                                                Este campo es requerido
                                            </div>
                                            :
                                            null
                                    }
                                </div>

                                <div className="col-md-4">
                                    <label htmlFor="verify_email" className="form-label">Verificá tu Mail</label>
                                    <input type="text" className="form-control is-invalid" onChange={
                                        e => setVerifyEmail(e.target.value) 
                                    } id="verify_email" placeholder="alguien@example.com" required/>

                                    {
                                        email.toUpperCase() === verifyEmail.toUpperCase() ? 
                                            <div className="valid-feedback">
                                                ¡Se ve bien!
                                            </div>
                                            :
                                            <div className="invalid-feedback is-invalid">
                                                Los mail deben coincidir
                                            </div>
                                    }
                                    {
                                        !verifyEmail? 
                                            <div className="invalid-feedback">
                                                Este campo es requerido
                                            </div>
                                            :
                                            null
                                    }
                                    
                                </div>
                
                                
                                <div className="col-md-4">
                                    <label htmlFor="phone" className="form-label">Celular</label>
                                    <input type="number" className="form-control" onChange={
                                        e => setCellNumber(e.target.value) 
                                        } id="phone" required/>
                                    <div className="valid-feedback">
                                        ¡Se ve bien!
                                    </div>
                                    <div className="invalid-feedback">
                                        Este campo es requerido
                                    </div>
                                </div>
                                
                                <div className="col-12">
                                    <button className="btn btn-primary" type="submit">Registrarse</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    
                    :
                    
                    <WasRegistered  user={userInfo}/>
                    
                }
                
            </div>
        );
    }
    else {
        let result = "";
        if(email === verifyEmail) {
            result = register(userInfo.email,userInfo.name, userInfo.last_name, userInfo.cell_number)
        }
        else {
            setUserInfo({})
            return(
                <div className="row d-flex m-3 justify-content-center align-items-center flex-column">
                    <div className="col-md-6 alert alert-danger" >
                        Información incorrecta! Revisá que hayas completado todos lo campos y que las casillas de mail sean iguales
                    </div>
                    <Link to={'/register'} className="col-md-3 btn btn-primary" role={'alert'}>Volver</Link>
                </div>
            )
        }
        if(result) {
            return(

                <div className="row justify-content-center ">
                    <div className="col-md-12 align-middle" >
                        <Link to={'/'} className="btn btn-primary"><p>Continuar como {result.name}</p></Link>
                    </div>
                </div>
            )
        }
        else if(result === null){
            
        } 
    }
    
}
export default Register;
