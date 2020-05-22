import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {incrementarPor} from '../redux/actions/ActionsPrincipal'

function OtroSubDos(){

    const main = useSelector(state => state.main)

    const dispatch = useDispatch()

    const actualizarEstado = () => {
        dispatch(incrementarPor(200));
    }



    return (
        <div>  
            <h1> OtroSub2Component</h1>
            <h2>Estado: {main.numero} </h2>
            <button onClick={()=>actualizarEstado()}>Actualizar Estado Global</button>

        </div>

    );
}


export default OtroSubDos;