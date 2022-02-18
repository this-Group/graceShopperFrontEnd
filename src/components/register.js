import React from "react";
import ReactDom from "react-dom";
// import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";

// const {createUser} = require('../../db/users');

const createUser = async (username, password) => {
    console.log('This is the createUser func');
    const response = await fetch('https:localhost:4000/api/signup', {
        method: "POST",
        headers: {
            'Content-Type' : 'application/json',
        },
        body: {
            username: username,
            password: password
        }
    });
    // if (response) {
    //     const {token } = await response.json();
    //     localStorage.setItem("token", token)
    // }
    return response;
}


const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        createUser(username, password)
        setUsername('');
        setPassword('');

    }    
        
    return (
        <div>
            <form onSubmit={handleSubmit} className="registerForm">
                <input type = "text" placeholder = "New Username" value = {username} onChange={(event) => setUsername(event.target.value)}></input><br></br>
                <input type = "text" placeholder = "New Password" value = {password} onChange={(event) => setPassword(event.target.value)}></input><br></br>
                <button type = "submit" className="button">
                    Create New Account
                </button>
               
            </form>

        </div>

    )


}

export default Register;