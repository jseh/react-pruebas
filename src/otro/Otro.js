import React from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import OtroSub from '../otro-sub/OtroSub';
import OtroSubDos from '../otro-sub-dos/OtroSubDos';


function Otro({match}){
    return (
        <div>  
            <h1>Sub Menu de navegacion</h1>
            <ul>
                <Link to="/otro/sub">
                    <li>OtroSub</li>
                </Link>

                <Link to="/otro/sub2">
                    <li>OtroSub2</li>
                </Link>

                <Link to="/">
                    <li>Volver a Inicio</li>
                </Link>
            </ul>
            

            <Switch>
                <Route path="/otro/sub" component={OtroSub} />
                <Route path="/otro/sub2" component={OtroSubDos} />
                
            </Switch>

        </div>

    );
}


export default Otro;