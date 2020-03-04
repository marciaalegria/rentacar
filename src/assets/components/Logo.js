import React, {Component} from 'react';
import img2 from '../img/img2.png';

class Logo extends Component {

    render(){
        return <div className="logo-container">
                    <img src={img2} alt="logo"/>
        </div>
    }
}


export default Logo;