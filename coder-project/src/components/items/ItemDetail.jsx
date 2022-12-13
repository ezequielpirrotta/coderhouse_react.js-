import ItemCount from "./ItemCount";

const ItemDetail = ({product}) => 
{
    if(product.length !== 0)
    {
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
    else {
        return(
            <div className="row justify-content-center">
                <div className="product col-md-4 alert alert-warning" role="alert">
                    Espera mientras cargamos tu producto!
                </div>
            </div>
        )
    }
    
}
export default ItemDetail;

//<ItemCount stock={product.stock}/>