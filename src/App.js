import React from 'react';
import Logo from './assets/components/Logo';
import './App.css';
import Auth from './Auth';

import {useUser} from 'reactfire';
import img2 from './assets/img/img2.png';

      


function App() {
  const user = useUser();

  return (
    <div className="App">
       <Logo/>
       {user&&<p>Usuario:{user.email} </p>
    }
     <Auth/>

    </div>
  );
}



export default App;
