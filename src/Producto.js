import React from "react";

function Producto(props){
    return (
        <div>
            <h4>Producto: {props.producto.nombreProducto} Precio: $ {props.producto.precio}</h4>
            
        </div>
    );
}
export default Producto;