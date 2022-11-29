import React from "react";
function CartWidget() {
    return (
        <button type="button" className="btn position-relative">
            <img src={"images/cart2.svg"} alt={"Carrito"} width={25}/>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {5}
            <span className="visually-hidden">unread messages</span>
            </span>
        </button>
    );
}
export default CartWidget;