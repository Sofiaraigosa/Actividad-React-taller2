import React, {useState} from "react";

const ContadorFuncional = ()=> {
    const [contador, setcontador] =useState(0);
    return(
        <div>
            <p>Contador Funcional: {contador}</p>
            <button onClick = {() => setcontador(contador + 1)}>Incrementar</button>
        </div>
    );
}
export default ContadorFuncional;