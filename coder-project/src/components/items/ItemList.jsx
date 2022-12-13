import React from "react";
import Item from "./Item";

function ItemList({products})
{
    if(Array.isArray(products)){
        if(products.length !== 0)
        {
            return (
                
                <div className="row justify-content-center">
                    {
                        products.map(product =>
                        {
                            return(
                                <div key = {product.id} className="product col-sm-4 col-md-3">
                                    <Item product={product}></Item>
                                </div>
                            );
                        }
                    )}
                </div>
            );
        }
        else{
            return(
                <div className="row justify-content-center">
                    <div className="product col-md-12 alert alert-warning" role="alert">
                        Espera mientras cargamos tus productos!
                    </div>
                </div>
            )  
        }
    }
    
    else
    {
        return(
            <div className="row justify-content-center">
                <div className="product col-md-12 alert alert-danger" role="alert">
                    No encontramos productos para la categoría elegida! 
                </div>
            </div>
        );
    }
}
export default ItemList;

