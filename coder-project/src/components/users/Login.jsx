import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../carts/CartContext";
import { collection, doc, getDoc } from "firebase/firestore";

function Login () {
    
    const { db, login, currentUser, setCurrentUser } = useContext(CartContext);
    const [userStatus, setUserStatus] = useState("")
    const [email, setEmail] = useState("")
    const [localUser, setLocalUser] = useState({})
    
    useEffect(()=>{
        
        

        let forms = document.querySelectorAll('.needs-validation')
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

    const setUser = () => {
        setUserStatus("sended")
    }
    if(userStatus === "login") {

        return (
            <div className="container-fluid m-3 d-flex justify-content-center">
                {
                !login?
                    <div className="card d-flex justify-content-center">
                        <h2 className="card-title"> Inicia sesión</h2>
                        
                        <div className="shadow-lg bg-body rounded">

                            <form className="card-body row g-3 justify-content-center needs-validation" onSubmit={setUser} noValidate>
                                <div className="col-md-12">
                                    <label htmlFor="name" className="form-label">Mail</label>
                                    <input type="text" className="form-control" name="name" onChange={
                                        e => setEmail(e.target.value)
                                    } id="name" placeholder="Mark" required/>
                                    <div className="valid-feedback">
                                        ¡Se ve bien!
                                    </div>
                                    <div className="invalid-feedback">
                                        Este campo es requerido
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-primary" type="submit">Continuar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    :
                    <div className="row justify-content-center ">
                        <div className="col-md-12 align-middle" >
                            <Link to={"/"} className="btn btn-primary"><p>Continuar como {currentUser.name}</p></Link>
                        </div>
                    </div>
                }
            </div>
        )
    }
    else if(userStatus === "sended") {
        
        let document = doc(db, "users", email)
        getDoc(document).then((snapshot) => {
            console.log(document)
            if(snapshot.exists()) {
                setLocalUser({ id: snapshot.id, ...snapshot.data() })
            }
            else {
                setLocalUser({})
            }
        })
        if(Object.keys(localUser).length !== 0) {
            setCurrentUser(localUser)
            setUserStatus()
            return(
                <div className="row justify-content-center ">
                    <div className="col-md-12 align-middle" >
                        <Link to={'/'} className="btn btn-primary"><p>Continuar como {currentUser.name}</p></Link>
                    </div>
                </div>
            )
        }
        
        else {
            return(
                <div className="row d-flex m-3 justify-content-center align-items-center flex-column">
                    <div className="col-md-6 alert alert-danger" >
                        Ha ocurrido un error con su loggeo, intente nuevamente
                    </div>
                    <Link to={'/login'} className="col-md-3 btn btn-primary" onClick={ 
                        e => setUserStatus("")
                    }role={'alert'}>Volver</Link>
                </div>
            )
        }
    }
    else {
        return(
            
            <div className="row m-3 d-flex justify-content-center flex-row">
               {
                !login?
                    <div className="card col-md-7" width='18rem'>
                        <div className="card-body">
                            <div className="container d-flex justify-content flex-column m-3">
                                <h2 className="card-Title">Inicia Sesion</h2>
                                
                                <div className="card-text">
                                    <p>Aún no sos cliente? <Link to={"/register"}>Registrate aquí!</Link></p>
                                    <p>o</p>
                                    <p>Iniciá sesión con tu cuenta <Link to={"/login"} onClick={ 
                                        e => setUserStatus("login")
                                    }>aquí!</Link></p>
                                </div>
                            
                            </div>
                        </div>
                    </div>
                    :
                    <div className="row justify-content-center ">
                        <div className="col-md-12 align-middle" >
                            <Link to={"/"} className="btn btn-primary"><p>Continuar como {currentUser.name}</p></Link>
                        </div>
                    </div>
               }
                
            </div>
        );

    }
    
}
export default Login;