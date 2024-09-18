import React from "react";
import Producto from "./Producto";

const ListaDeProducto = ({producto}) =>{
    return (
        <div>
            {producto.map((producto, index) =>(
                <Producto
                producto ={producto}
                />
            ))}
        </div>
    );
}
export default ListaDeProducto;

