import React, { useState } from 'react'
import { useContext } from 'react';
import './login.scss'
import { login } from '../../context/authContext/ApiCall';
import { AuthContext } from '../../context/authContext/AuthContext';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {isFetching, dispatch} = useContext(AuthContext);

   function handleLogin(e) {
        e.preventDefault();
        login({ email, password }, dispatch);
    };

    return (
        <div className="login">
            <form action="" className="loginForm">
                <input type="text" placeholder='email' className="loginInput" onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder='password' className="loginInput" onChange={(e) => setPassword(e.target.value)}/>
                <button className="loginButton" onClick={handleLogin} disabled={isFetching}>Login</button>
            </form>
        </div>
    );
}

export default Login