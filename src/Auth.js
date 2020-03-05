import React, { useState } from 'react';
import 'firebase/auth';
import {useFirebaseApp, useUser} from 'reactfire';

export default (props) => {
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');

    const firebase = useFirebaseApp();
    const user= useUser();

    const submit = async () => {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
    }

    const login = async ()=>{
        await firebase.auth().signInWithEmailAndPassword(email,password);
    }

    const logout = async ()=>{
        await firebase.auth().signOut();
    }
    return (
        <div>
            { {user, email}}
            {
                !user &&
            <div>
                <label htmlFor="email">correo electrónico</label>
                <input type="email" id="email" onChange= {(ev)=> setEmail(ev.target.value)} />
                <label htmlFor="password">contraseña</label>
                <input type="password" id="" onChange= {(ev)=> setPassword(ev.target.value)} />
                <button onClick={submit}>Crear Cuenta</button>
                <button onClick={login}>Iniciar Sesión</button>
            </div>
            }
            {
                user &&<button onClick={logout}>Cerrar Sesión</button>
            }
        </div>
    )
}