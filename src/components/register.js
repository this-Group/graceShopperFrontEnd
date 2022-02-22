import React from "react";
import ReactDom from "react-dom";
// import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";

// const {createUser} = require('../../db/users');


// const createUser = async (username, password) => {
//     console.log('This is the createUser func');

//     console.log("new username and password", username, password)
    
//     const response = await fetch('http://localhost:4000/api/users/signup', {

//         method: "POST",
//         headers: {
//             'Content-Type' : 'application/json',
//         },

//         body: JSON.stringify({
//             username: username,
//             password: password
//         }),
//         mode: "cors",
//     });
//     console.log("this is the response", response)
//     return response;
// }


const Register = (props) => {
    const {createUser} = props

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

//     const createUser = async (username, password) => {
//         console.log('This is the createUser func');
    
//         console.log("new username and password", username, password)
        
//          fetch('http://localhost:4000/api/users/signup', {
            
    
//     //     const response = await fetch('https:localhost:4000/api/signup', {
    
//             method: "POST",
//             headers: {
//                 'Content-Type' : 'application/json',
//             },
    
//             body: JSON.stringify({
//                 username: username,
//                 password: password
//             }),
//             mode: "cors",
//         }).then (res => res.json()).then( data => {localStorage.setItem('token', data.token);
//             setUser(data.user);
//     })
        
    
    //         body: {
    //             username: username, 
    //             password: password
    //         }
    //     });
    
        // if (response) {
        //     const {token } = await response.json();
        //     localStorage.setItem("token", token)
        // }
     


    const handleSubmit = async (event) => {
        event.preventDefault();

        console.log("From handleSumbit for register", username, password)

        
        createUser(username, password)
        setUsername('');
        setPassword('');

    }    
        
    return (
        <div>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit} className="registerForm">
                <input type = "text" placeholder = "New Username" value = {username} onChange={(event) => setUsername(event.target.value)}></input><br></br>
                <br></br>
                <input type = "text" placeholder = "New Password" value = {password} onChange={(event) => setPassword(event.target.value)}></input><br></br>
                <br></br>
                <button type = "submit" className="button">
                    Create New Account
                </button>
                
               
            </form>

        </div>

    )


}

export default Register;