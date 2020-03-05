import React, { Component } from 'react';
import Available from '../components/Available';
import Logo from '../components/Logo';
//import Delete from '../components/Delete';


class Home extends Component{
    
    render(){
    return(
        <div>
        <div className="Logo">
            <Logo/>
        </div>
        <div className="Container">
            <Available/>
        </div>
        <div className="Container">
           
        </div>
        </div>
        )

    }
}

export default Home;