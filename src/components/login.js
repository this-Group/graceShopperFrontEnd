import React from "react";
import ReactDom from "react-dom";
// import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState } from "react";

// const {loginUser} = require('../../db/users');



const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(null);

    // useEffect(() => {
    //     if (localStorage.getItem("token")) {
    //         setIsLoggedIn(true)
    //     } else {
    //         setIsLoggedIn(false);
    //     }

    // },[])

    const handleSubmit = async (event) => {
        event.preventDefault();
        // setIsLoggedIn(true)
        //question about fetching from our backend
        const loginUser = async (username, password) => {
            try {
                const response = await fetch('http:localhost:4000/api/login' , {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                    
                            username: username,
                            password: password
                        
                    })
                })

                if (response){
                    const { data : {token}}= await response.json();
                    localStorage.setItem("token", token)
                    // setUsername('');
                    // setPassword('');    
                }
            } catch (error) {
                console.log(err);
            }
        }
        loginUser(username, password)
        setUsername('');
        setPassword('');
        // const response = await fetch(createUser {
        //     method: "POST",
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         user: {
        //             username: username,
        //             password: password
        //         }
        //     })
        // })

        
    }

    return(
        <div className="loginUserForm">
            {
                !isLoggedIn
            ?
            <>
            <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input type= "text" value={username} placeholder="Enter username" onChange={(event) => setUsername(event.targe.value)}> </input> <br></br> 
            
            <label>Password</label>
            <input type= "text" value={password} placeholder="Enter password" onChange={(event) = setPassword(event.targe.value)}> </input> <br></br> 

            <button type="submit" className="button">Login</button>
            </form></>
            :
            null
    }

        </div>
    )
}

export default Login;