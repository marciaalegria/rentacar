import React from 'react';
import Logo from './assets/components/Logo';

import Auth from './Auth';

import {useUser} from 'reactfire';


      
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
