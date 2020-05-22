import React from 'react';
import './App.css';

import Inicio from './inicio/Inicio';
import Prueba from './prueba/Prueba';
import AcercaDe from './acercade/AcercaDe';
import Elementos from './elementos/Elementos';
import ElementosDetalle from './elementos-detalle/ElementosDetalle';
import Otro from './otro/Otro';
import Pokemon from './pokemon/Pokemon';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';

import {useSelector, useDispatch} from 'react-redux';
import Forms from './forms/Forms';



function NavComponent(){
  return (
    <ul>
      <Link to="/">
        <li>Inicio</li>
      </Link>
      <Link to="/prueba">
        <li>Prueba</li>
      </Link>
      <Link to="/acerca">
        <li>AcercaDe</li>
      </Link>
      <Link to="/elementos">
        <li>Elementos</li>
      </Link>
      <Link to="/otro">
        <li>Otro</li>
      </Link>
      <Link to="/pokemon">
        <li>Pokemon</li>
      </Link>
      <Link to="/forms">
        <li>Forms</li>
      </Link>
    </ul>
  );
}


function App() {

  const main = useSelector(state => state.main)



  
  return (
    <BrowserRouter>
        
        <h1>Menu Principal</h1>
        <h3>Estado Redux: {main.numero}</h3>
        <NavComponent />
        <hr></hr>

        <Switch>
          {/* si va ah tener mas cosas despues de la ruta inicial  poner exact */}
          {/* si tiene algo adicionala la ruta colocar al final colocar exact en la ruta original */}
          <Route path="/" exact component={Inicio} />
          <Route path="/prueba" component={Prueba} />
          <Route path="/acerca" component={AcercaDe} />
          <Route path="/elementos" exact component={Elementos} />
          <Route path="/elementos/:id" component={ElementosDetalle} />
          <Route path="/otro" component={Otro} />
          <Route path="/pokemon" component={Pokemon} />
          <Route path="/forms" component={Forms} />
        </Switch>
    </BrowserRouter>
    
  );
}

export default App;
