import React, {Component, setState} from 'react';
import './Prueba.css';
import ComponenteHijo from '../componente-hijo/ComponenteHijo';
import PropTypes from 'prop-types'
class Prueba extends Component {
    
    
    constructor(props) {
        super(props);
        // uncamente se puede asignar el estado en el contrcutor
        this.state = {
            dato: "ok",
            numero: 2
        };

      }

    // la usar lambda deja acceder al this del Prueba
    modDato = () => {
        console.log("modificando el estado");
        // se puedne modificar las variables de forma indepentiendot y no pasa nada
        this.setState({dato: "not okey"});

    }

    modNumero = () => {
        this.setState({numero: this.state.numero + 1000});
    }

    // siempre usar la forma de lambda  para acceder al this de la clase
    recibir = (e) => {
        console.log(e);        
        this.setState({dato: "ok de nuevo"});

    }

    render(){
        // se debe escribir en render en hook puede colocarse en cualquier parte de la funcion
        // const [datos, setDatos] = setState([]);

        return (
            <div>
                <h1>Hola desde Prueba</h1>
                <p>Mensaje: {this.state.dato}, Numero: {this.state.numero}</p>
                <button onClick={this.modDato}>Modificar Mensaje</button>
                <button onClick={this.modNumero}>Modificar Numero: Actualiza prop1</button>

                <ComponenteHijo prop1={this.state.numero} propFuncion={this.recibir} />
            </div>
        )
    }

}

// define los tipos de las propiedades que se le pueden pasar al  componente
Prueba.propType = {
    propFuncion: PropTypes.func.isRequired
}

export default Prueba;