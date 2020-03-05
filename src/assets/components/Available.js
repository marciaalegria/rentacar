import React, {Component} from 'react';
import cars from '../data/cars.json';
import Logo from './Logo';


//se crea componente que mostrara autos disponibles
class Available extends Component {
render(){
    return (
        <div>
            <div>
                img
            </div>
            <div>
                precio
            </div>
            <div>
                boton reservar
            </div>
        </div>
    )
}
}

export default Available;