import React from "react";
import products_info from '../assets/data/products.json';
import SingleProduct from "./SingleProduct";

function Products() 
{
    let products = [];
    for(let item in products_info["products"])
    {
        products.push(products_info["products"][item]);    
    }

    return (
        <div id="products">
            {
                products.map(product =>
                {
                    return(
                        <SingleProduct info={product}></SingleProduct>
                    );
                }

            )}
        </div>
    );
}

export default Products;
