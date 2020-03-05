import React, { Component } from 'react';
import Available from '../components/Available';
import Delete from '../components/Delete';


class Home extends Component{
    
    render(){
    return(
        <div className="Logo">
            <Logo/>
        </div>
        <div className="Container">
            <Available/>
        </div>
        <div className="Container">
            <Delete/>
        </div>
        )

    }
}

export default Home;