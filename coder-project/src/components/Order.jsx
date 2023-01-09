import { Link } from "react-router-dom";

const Order = ({order}) => 
{
    return(
        <div className="card" width= "18rem" >
            
            <div className="card-body">
                <h5 className="card-title">{"Orden "+order.id}</h5>
                <p className="card-text">{"Precio: " + order.currency + order.price}</p>
                {
                    () => {

                        let count = 0;
    
                        order.items.map((item) => {
                            count++
                            return(
                                <div className={"col-sm accordion"+count} id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id={"heading"+count}>
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse"+count} aria-expanded="true" aria-controls={"collapse"+count}>
                                            <img src={item.image} alt={item.name} width={64}/>
                                            <span>{item.name}</span>
                                            <span className="badge bg-primary rounded-pill">{item.quantity}</span>
                                        </button>
                                        </h2>
                                        <div id={"collapse"+count} className="accordion-collapse collapse " aria-labelledby={"heading"+count} data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <table className="table table-responsive" data-toggle="collapse">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col" className="text-center">Cantidad</th>
                                                            <th scope="col" className="text-center">Precio</th>
                                                            <th scope="col">&nbsp;</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr key={item.id}>
                                    
                                                            <td className="text-center align-middle">{item.quantity}</td>
                                                            <td className="text-center align-middle">{item.currency} {item.quantity * item.price}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>      
                            )  
                        })
                    } 
                }
            </div>
        </div>
    );
}
export default Order;