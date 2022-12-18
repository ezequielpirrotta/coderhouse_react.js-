import React, { useState , useEffect} from "react";
import ItemList from "./ItemList";
import products_info from '../../assets/products.json';
import { useParams } from "react-router-dom";

function ItemListContainer() 
{
    const [products, setProducts] = useState([]);
    const {cat} = useParams();
    useEffect( () => {
        const promesa = new Promise((resolve) =>{
            setTimeout(() => {
                resolve(cat? products_info.filter(item => item.type === cat): products_info);
            }, 2000);
        })
        
        promesa.then((data) => {
            if(data.length > 0) {
                setProducts(data);
            }
            else {
                setProducts(null)
            }

        });
    },[cat]);
    return (
        <div id="products" className="container-fluid justify-content-center">
            <ItemList products={products}/>
        </div>
    );
}

export default ItemListContainer;