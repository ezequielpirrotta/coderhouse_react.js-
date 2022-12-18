import ItemCount from "./ItemCount";
import Error from "../errors_&_timeout/Error";

const ItemDetail = ({product}) => 
{
    if(product !== undefined) {
        if(!Array.isArray(product)) {
            return(
                <div className="row justify-content-center">
                   <div className="product col-md-4 ">
                        <div className ="card" width= "18rem">
                            <img src={product.image} className ="card-img-top" alt={product.name}/>
                            <div className ="card-body">
                                <h1 className="card-title">{product.name}</h1>
                                <p className="card-text">{product.description}</p>
                                <p>{"Precio: " + product.currency + product.price}</p>
                                <ItemCount stock={product.stock}/>
                            </div>
                        </div>   
                    </div>
                </div>
            );
        }
        return(
            <Error status={"wait"} quantity={1}/>
        );
    }
    else {
        return(
            <Error status={"empty"} quantity={1}/>
        )
    }
    
}
export default ItemDetail;

//<ItemCount stock={product.stock}/>