import React, {Component} from 'react';
// import './Inicio.css';

class ComponenteHijo extends Component {

    render(){

        const { propFuncion, prop1 } = this.props;
        return (
            <div>
                <h2>Hola desde componente hijo</h2>
                <p>prop1: {prop1}</p>
                <button onClick={()=> propFuncion("todo bien")}>Enviar Datos al Padre</button>
            </div>
        )
    }

}

export default ComponenteHijo;