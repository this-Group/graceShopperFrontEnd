import React from "react";
import ReactDom from "react-dom";

import { useState } from "react";

const Login = (props) => {
    const { loginUser, isLoggedIn } = props
    
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = async (event) => {
        event.preventDefault();
        loginUser(username, password)
        setUsername('');
        setPassword('');
    }    

    return (
        <div className="loginUserForm">
            <form onSubmit={handleSubmit}>

                <h2>Log In</h2>

                <input type='text' placeholder='Username' value={username} onChange={(event) => setUsername(event.target.value)}>
                </input>
                <br></br>
                <br></br>
                <input type='text' placeholder='Password' value={password} onChange={(event) => setPassword(event.target.value)}>
                </input>
                <br></br>
                <div>
                    {isLoggedIn ?
                            <h3>Logged in</h3>
                        : ''}
                </div>
                <br></br>
                <button type='submit'>
                    Log In
                </button>


            </form>
 
        </div>
    )
}

export default Login;