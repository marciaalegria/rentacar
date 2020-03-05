import React from 'react';
import Logo from './assets/components/Logo';

import Auth from './Auth';

import {useUser} from 'reactfire';
import Available from './assets/components/Available';


      
function App() {
  const user = useUser();

  return (
    <div className="App">
       
       {user&&<p>Hola: {user.email} </p>
    }
      <Logo/>
      <Auth/>
      <Available/>

    </div>
  );
}



export default App;
