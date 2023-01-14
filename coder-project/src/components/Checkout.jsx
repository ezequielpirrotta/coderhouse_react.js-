import React, {useEffect, useState} from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./carts/CartContext";
import { collection, addDoc } from "firebase/firestore";
import Order from "./Order";
import Swal from 'sweetalert2';

function Checkout () {
    const {login, cart,totalPrice, auth,db} = useContext(CartContext);
    const [created, setCreated] = useState(false)
    const [order, setOrder] = useState({})
    useEffect(() => {{
        if(Object.keys(order).length === 0) {
            if(login) {
                console.log(auth.currentUser)
                setOrder({
                    "user_id": auth.currentUser.uid,
                    "items": 
                        cart.map(product => {
                            return(
                                {
                                    "id": product.id,
                                    "desc": product.description,
                                    "name": product.name,
                                    "quantity": product.quantity,
                                    "price": product.price
                                }
                            )
                        })
                    ,
                    "state": "generado",
                    "date": new Date().toLocaleDateString('es-es', { weekday:"long", year:"numeric", month:"short", day:"numeric"}),
                    "total": totalPrice()
                });
            }
        }
        else {
            console.log('orden lista')
        }
    }})
    const generateOrder = () => {
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order)
        .then(({id}) => {
            setCreated(true)
            setOrder({ id: id, ...order })
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Orden '+id+' generada con éxito',
                showConfirmButton: false,
                timer: 2000
            })

        })
        .catch((e) => {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Lo sentimos, no pudimos generar su orden',
                text: 'Disculpe las molestias.',
                showConfirmButton: false,
                timer: 2000
            })
            console.log(e)
        });
        
       
        
    };
    if(!created) {

        return(
    
            <div className="row m-3 d-flex justify-content-center flex-row">
                <h5 className="card-title">Su compra</h5>        
                <h6 className ="card-subtitle mb-2 text-muted">Total: ${totalPrice()}</h6>
                {
                    !login?
                        <Link className="btn btn-warning product col-sm-4 col-md-3" to={"/login"}>Inicia sesión</Link>
                        :
                        <div className="row justify-content-center ">
                            <div className="col-md-12 align-middle" >
                                <button  className="btn btn-primary" onClick={generateOrder}><p>Comprar como {auth.currentUser.displayName}</p></button>
                            </div>
                        </div>
                }
            </div>
        );
    }
    else {
        return(
            <Order order={order}></Order>
        );
    }
}
export default Checkout;