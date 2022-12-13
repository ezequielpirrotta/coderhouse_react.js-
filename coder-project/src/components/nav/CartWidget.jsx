import React from "react";
function CartWidget() {
    return (
        <button type="button" className="btn position-absolute">
            <img src={"/img/cart2.svg"} alt={"Carrito"} width={25}/>
            <span id="cart_items" className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {5}
            </span>
        </button>
    );
}
export default CartWidget;