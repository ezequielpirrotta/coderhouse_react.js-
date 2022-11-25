import React from "react";

const SingleProduct = ({info}) => 
{
    console.log(info);
    return(
        <div className="product">
            <img src= {info.image} alt="tu vieja en tanga"/>
            {info.currency + info.price}
            {info.name}
        </div>
    );
}
export default SingleProduct;