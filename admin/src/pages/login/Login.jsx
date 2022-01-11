import React, { useState } from 'react'
import { useContext } from 'react';
import './login.scss'
import { login } from '../../context/authContext/ApiCall';
import { AuthContext } from '../../context/authContext/AuthContext';

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {isFetching, dispathc} = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        login({email, password}, dispathc);
    }
    return (
        <div className='login'>
            <form action="" className="loginForm">
                <input type="text" placeholder='email' className="loginInput" onChange={(e) => {setEmail(e.value)}}/>
                <input type="password" placeholder='password' className="loginInput" onChange={(p) => setPassword(p.value)}/>
                <button className='loginButton' onClick={handleLogin()} disabled={isFetching}>Login</button>
            </form>
        </div>
    )
}
