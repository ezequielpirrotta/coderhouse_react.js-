import React from "react";
import products_info from '../assets/products.json';
import SingleProduct from "./SingleProduct";

function ItemListContainer() 
{
    let products = [];
    for(let item in products_info["products"])
    {
        products.push(products_info["products"][item]);    
    }

    return (
        <div id="products" className="container-fluid justify-content-center">
            <div className="row justify-content-center">
            {
                products.map(product =>
                {
                    return(
                        <SingleProduct product={product}></SingleProduct>
                    );
                }

            )}
            </div>
        </div>
    );
}

export default ItemListContainer;