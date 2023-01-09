import React from "react";
import { useState, createContext } from "react";
import {getFirestore} from "firebase/firestore";
import { useEffect } from "react";
import { getAuth, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithRedirect,onAuthStateChanged } from "firebase/auth";
import { stringify } from "@firebase/util";


export const CartContext = createContext();


function CartContextProvider({children}) {

    const db = getFirestore();
    const [cart, setCart] = useState([]);
    const [login, setLogin] = useState(false);
    const auth = getAuth();
    const [user, setUser] = useState({});
    const provider = new GoogleAuthProvider();

    useEffect(() => {
        let sessionCart = window.localStorage.getItem("cart");
        //console.log(cart)
        console.log(auth.currentUser)
        onAuthStateChanged(auth, (usr) => {
            if (!usr) {
              setLogin(false)
            }
            setLogin(true)
        });
        if(totalCart() === 0 || !sessionCart){

            if(totalCart() === 0 && sessionCart){
                setCart(JSON.parse(sessionCart));
            }
            else if(totalCart() > 0 && !sessionCart) {
                window.localStorage.setItem("cart", JSON.stringify(cart))
            }
            
        }
    })
    
    const loginGoogle = () => {
        if(!login) {
            signInWithRedirect(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                //const credential = GoogleAuthProvider.credentialFromResult(result);
                //const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                setLogin(true)
                return(user);
            });
        }
    }
    
    const loginUser = (email, password) => {
        if(!login) {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => { 
                    const user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode)
                    console.log(errorMessage)

                    /*createUserWithEmailAndPassword(auth, email,password)
                    .then((userCredential) => {
                        const user = userCredential.user;
                        
                        //const token = userCredential.accessToken;
                        // The signed-in user info.
                        //const user = result.user;
                        setLogin(true)
                        return(user)
                    });*/
                }) 

        }
        return(auth.user);
    }
    const closeUserSession = () => {
        signOut(auth).then(() => {
            return(
                JSON.stringify(
                    {
                        status:200
                    }
                )
            )
          }).catch((error) => {
            // An error happened.
          });
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
                auth,
                addItem,
                removeItem,
                clearCart,
                totalCart,
                totalPrice,
                loginUser,
                loginGoogle,
                closeUserSession,
            }}>
            {children}
        </CartContext.Provider>
    );
}
export default CartContextProvider;