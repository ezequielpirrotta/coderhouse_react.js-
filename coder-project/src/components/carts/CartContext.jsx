import React from "react";
import { useState, createContext } from "react";
import {getFirestore, doc, getDoc, getDocs, collection, addDoc, query, where} from "firebase/firestore";
import { useEffect } from "react";

export const CartContext = createContext();

function CartContextProvider({children}) {

    const db = getFirestore();
    const [cart, setCart] = useState([]);
    const [login, setLogin] = useState(false);
    const [currentUser, setCurrentUser] = useState({})

    useEffect(() => {
        
        let sessionCart = window.localStorage.getItem("cart");
        if(totalCart() === 0 || !sessionCart){

            if(totalCart() === 0 && sessionCart){
                setCart(JSON.parse(sessionCart));
            }
            else if(totalCart() > 0 && !sessionCart) {
                window.localStorage.setItem("cart", JSON.stringify(cart))
            }
            
        }
    },[])
    
    const checkUserExists = (email) => {
        const user = doc(db, "users", email) 
        getDoc(user).then((snapshot) => {
            if(snapshot.exists()) {
                return true;
            }
            else {
                return false;
            }
        })
    }
    const getUser = (email) => {
        //const user = doc(db, "users", email)
        
        const usersCollection = collection(db, "users")
        const q = email? query(usersCollection, where("email", "==", email)) : usersCollection 
        getDocs(q)
        .then((snapshot) => {
            let user = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            console.log(user)
            if(user[0]) {
                setCurrentUser(user[0])
                return true
            }
            else {
                return false;
            }
        })
        
    }
   
    /*const userLogin = (email) => {
        let user = null;
        if(!login) {
            user = getUser(email);
            console.log("entre")
            if(user) {
                setCurrentUser(user)
                setLogin(true)
                return login;
            }
            else {
                setLogin(false)
                return login;
            }  
        }
        return(user);
    }*/
    const register = (email, name, last_name, cell_number ) => {
        console.log(cell_number)
        let newUser = null;
        if(!login) {
            
            if(!checkUserExists(email)) {
                const usersCollection = collection(db, "users") 
                newUser = {
                    email: email,
                    cell_number: cell_number,
                    name: name,
                    last_name: last_name
                }
                addDoc(usersCollection, newUser);
                setCurrentUser(newUser)
                setLogin(true);
            }
            else {
                return false;  
            }
        }
        return(newUser);

    }
    
    const closeUserSession = () => {
        setCurrentUser({})
        setLogin(false)
    }

    
    const addItem = (item, quantity) => {
        if(isInCart(item.id)) {
            let pos = cart.findIndex(element => element.id === item.id);
            cart[pos].quantity += quantity;
            setCart([...cart]);
            window.localStorage.setItem("cart",JSON.stringify([...cart]))
        }
        else {
            setCart([...cart, {...item, quantity: quantity}]);
            localStorage.setItem("cart",JSON.stringify([...cart, {...item, quantity: quantity}]))
        }
    }
    const removeItem = (itemId) => {
        //console.log(cart.filter(element => element.id !== itemId))
        setCart(cart.filter(element => element.id !== itemId));
    }
    const clearCart = () => {
        setCart([]);
        window.localStorage.clear();
    }
    const isInCart = (id) => {
        return (cart.some(item => item.id === id));
    }

    const totalCart = () => {
        if(cart.length >= 0) {
            return cart.reduce((total, item) => total += item.quantity, 0);
        }
        return 0;
    }
    const totalPrice = () => {
        return cart.reduce((total, item) => total += item.quantity * item.price, 0);
    }
    
    
    
    return(
        <CartContext.Provider 
            value={{
                cart,
                db,
                login,
                currentUser,
                addItem,
                removeItem,
                clearCart,
                totalCart,
                totalPrice,
                getUser,
                setCurrentUser,
                //userLogin,
                register,
                closeUserSession,
            }}>
            {children}
        </CartContext.Provider>
    );
}
export default CartContextProvider;