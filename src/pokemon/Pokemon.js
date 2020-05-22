import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';


function Pokemon() {

    const API_URL = 'https://pokeapi.co/api/v2/pokemon'
    const API_LOCAL_URL = 'http://127.0.0.1:3000'


    useEffect(
        () => {
            traerCapturados()
        }, []
    );

    let miRef = useRef(null)
    let esVisible = false;

    const [getPokemon, setPokemon] = useState({})
    const [getCapturados, setCapturados] = useState([])

    const buscarPorNombre = async () => {

        console.log(miRef.current.value)
        let nombre = miRef.current.value
        
        try {
            let res = await axios.get(`${API_URL}/${nombre}`)
            console.log(res.data)
            setPokemon(res.data)

        } catch (e) {
            setPokemon({})
            console.log(e)
        }

        // if(json_res){
        //     console.log(json_res)
        // }

    }

    const capturar = async (id) => {
        console.log('capturado: '+id)

        try {
            await axios.post(`${API_LOCAL_URL}/capturar`, { nombre: getPokemon.name, imagenURL: getPokemon.sprites.front_default } )
            traerCapturados()
        } catch (e) {
            console.log(e)
        }


    }

    const traerCapturados = async () => {
        console.log('ejecutar consulta mongo')

        try {
            let res = await axios.get(`${API_LOCAL_URL}/capturados`)
            setCapturados(res.data)

        } catch (e) {
            setCapturados([])
            console.log(e)
        }


    }

    const liberar = async (id) => {
        console.log(id)

        try {
            await axios.get(`${API_LOCAL_URL}/remover/${id}`)
            traerCapturados()
        } catch (e) {
            console.log(e)
        }

    }


    return (
        <div>
            <h1>Pokemon</h1>
            
            {/* <form onSubmit={this.submitFormHandler}>
                <div>
                    <input type="text" name="name" ref="name" />
                </div>
            </form> */}

            <input type="text" name="input1" ref={miRef} />
            {/* <input type="text" name="input1" ref="input1" /> */}


            <button onClick={buscarPorNombre}>Buscar</button>
            { (Object.keys(getPokemon).length != 0 && getPokemon.constructor === Object) && (
                    <div>
                        <h1>{getPokemon.name}</h1>
                        <img src={getPokemon.sprites.front_default} />
                        <button onClick={() => capturar(getPokemon.id)}>Capturar</button>
                    </div>
                )
            }

            <h1>Capturados</h1>
            { (Object.keys(getCapturados).length != 0 ) && (
                    <div>
                       <ul>
                            {
                                getCapturados.map( 
                                    (p, i) => 
                                        <li key={i}> 
                                            <p>{p.nombre}</p><img src={p.imagenURL}/><button onClick={()=>liberar(p._id)}>Liberar</button>
                                        </li> 
                                    )
                            }
                       </ul>
                    </div>
                )
            }
        </div>
    );
}

export default Pokemon;