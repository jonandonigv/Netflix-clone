import React, { useState } from 'react'
import './login.scss'

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = (e) => {
        e.preventDefault();
        
    }
    return (
        <div className='login'>
            <form action="" className="loginForm">
                <input type="text" placeholder='email' className="loginInput" onChange={(e) => {setEmail(e.value)}}/>
                <input type="password" placeholder='password' className="loginInput" onChange={(p) => setPassword(p.value)}/>
                <button className='loginButton' onClick={handleLogin()}>Login</button>
            </form>
        </div>
    )
}
