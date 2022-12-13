import React, { useState , useEffect} from "react";
import ItemDetail from "./ItemDetail";
import products_info from '../../assets/products.json';
import { useParams, Link } from "react-router-dom";
import {ArrowLeftIcon} from '@primer/octicons-react' 


function ItemDetailContainer() 
{
    const {id} = useParams();
    const [product, changeProduct] = useState([]);
    useEffect( () => 
    {
        const promesa = new Promise((resolve) =>{
            setTimeout(() => {
                resolve(products_info.find(product => product.id === parseInt(id)));
            }, 2000);
        })
        
        promesa.then((data) => {
            changeProduct(data);
        });
    },[id]);
    return (
        <div id="product" className="container-fluid justify-content-center">
            <div className="row d-flex justify-content-center">
                <Link to={`/`} className="col-md-4 justify-content-center">
                    <button className="btn-primary" >
                        <ArrowLeftIcon size={24} />
                    </button>
                </Link>
            </div>
            <ItemDetail product={product}/>
        </div>
    );
}

export default ItemDetailContainer;