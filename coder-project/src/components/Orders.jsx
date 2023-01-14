import React, {useState, useContext, useEffect} from "react";
import {query, collection, where, getDocs, getDoc, doc} from "firebase/firestore";
import { CartContext } from "./carts/CartContext";
import { Link, useParams } from "react-router-dom";
import Order from "./Order";
import Error from "./errors_&_timeout/Error";


function Orders () {
    // 'from' puede contener valor(integer) 1 o 2 segun si viene de 'checkout' o de 'profile'
    const {auth, db, login} = useContext(CartContext);
    const [orders, setOrders] = useState([]);
    const user = login? auth.currentUser : {};

    useEffect(() => {
        if(login) {

            let document = doc(db, "orders", user.uid) 
            getDoc(document).then((snapshot) => {
                if(snapshot.exists()) {
                    setOrders({ id: snapshot.id, ...snapshot.data() })
                }
                else {
                    setOrders(null)
                }
            })
        
        
    
            const ordersCollection = collection(db, "orders");
            const col = user.uid ? query(ordersCollection, where("type", "==", user.uid)) : ordersCollection;
            
            try {
                getDocs(col).then((snapshot) => {
                    
                    let result = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })); 
                    setOrders(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        
                    if(!Array.isArray(result) || result.length <= 0) {
                        setOrders(null);
                    }
                });
            }
            catch(e) {
                console.log(e)
            }
        }
        else {
            window.location.href = '/login';
        }
        
    }, [user.uid]);

    if(orders !== null){
        if(orders.length > 0){
            return (
                <div className="row justify-content-center">
                    {
                        orders.map(order =>
                        {
                            return(
                                <div key = {order.id} className={orders.length >= 3?"product col-sm-4 col-md-3":"product col-sm-4 col-md-5"}>
                                    <Order order={order}></Order>
                                </div>
                            );
                        })
                    }
                    <div className="row justify-content-center">
                        <div className="card col-md-3 " width='18rem'>
                            <div className="card-body">
                                <h5 className="card-title">Su compra</h5>
                                <h6 className ="card-subtitle mb-2 text-muted">Total: ${5}</h6>
                                <Link className="row btn btn-primary" to={origin===1?'/':origin===2?'/profile':''} title="Volver">Volver</Link>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return(
                <div id="products" className="container-fluid justify-content-center">
                    <Error status={"wait"} quantity={2}/>
                </div>
            )  
        }
    }
    
    else
    {
        return(
            <div id="products" className="container-fluid justify-content-center">
                <Error status={"empty"} quantity={2}/>
            </div>
        );
    }
    return(
        <div id="products" className="container-fluid justify-content-center">
            {
                () => {

                }
            }
            
        </div>
    );

}
export default Orders;