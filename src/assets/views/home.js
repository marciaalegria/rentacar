import React, { Component } from 'react';
import Available from '../components/Available';
import Delete from '../components/Delete';


class Home extends Component{
    
    render(){
    return(
        <div>
        <Available/>
        </div>
        <div>
        <Delete/>
        </div>
        )

    }
}

export default Home;