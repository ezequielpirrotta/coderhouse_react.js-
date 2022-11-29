import React from "react";

const SingleProduct = ({product}) => 
{
    return(
        <div className="product col-sm-4 col-md-3">
            <div className="card" width= "18rem">
                <img src={product.image} className="card-img-top" alt="Producto"></img>
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{"Precio: " + product.currency + product.price}</p>
                    <a href="#" className="btn btn-primary">Añadir al Carrito</a>
                </div>
            </div>
        </div>
    );
}
export default SingleProduct;