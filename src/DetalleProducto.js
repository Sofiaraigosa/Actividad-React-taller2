import React from "react";

const DetalleProducto = ({nombre, precio, descripcion}) => {
    return (
        <div>
            <h3>{nombre = "Mesa Comedor"}</h3>
            <p>${precio = 205000}</p>
            <p>{descripcion = "La mejor mesa del mundo para comer tus deliciosas comidas"}</p>
        </div>
    );
}
export default DetalleProducto;