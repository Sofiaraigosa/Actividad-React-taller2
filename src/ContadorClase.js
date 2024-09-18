import React from "react";

class ContadorClase extends React.Component{
    constructor(props){
        super(props);
        this.state = {contador:0};
    }
    Incrementar = () => {
        this.setState({contador: this.state.contador +1});
    };
    render(){
        return (
            <div>
                <p>Contador Clase: {this.state.contador}</p>
                <button onClick = {this.Incrementar}>Incrementar</button>
            </div>
        );
    }
}
export default ContadorClase;