import React from "react";
import ReactDom from "react-dom";

import { useEffect, useState } from "react";

const locallySourcedToken = localStorage.getItem('token');





const Login = (props) => {
    const {setUser, user } = props;
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const [isLoggedIn, setIsLoggedIn] = useState(false);

    // useEffect(() => {
    //     if (localStorage.getItem("token")) {
    //         setIsLoggedIn(true)
    //     } else {
    //         setIsLoggedIn(false);
    //     }

    // },[])

    const handleSubmit = async (event) => {
        event.preventDefault();
        loginUser(username, password)
        setUsername('');
        setPassword('');
      
        // setIsLoggedIn(true)
        //question about fetching from our backend
    }
    useEffect(()=>{
        console.log("This is the userState", user)
        console.log("this is the userId", user?.id)
        console.log("this is the orderId", user?.userId)
    },[user])
        

        const loginUser = async (username, password) => {
            console.log(".........")
            try {
                const response = await fetch('http://localhost:4000/api/users/login', {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({

                        username: username,
                        password: password

                    })
                })
                console.log("this is the response from loginuser", response)
                if (response) {
                    const {  token, user  } = await response.json();
                    localStorage.setItem("token", token)
                  
                    setUser(user);
                }
            } catch (error) {
                console.error(error);
            }
        }

        
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
                    {user ?
                            <h3>Logged in</h3>
                        : ''}
                </div>
                <br></br>
                <button type='submit'>
                    Log In
                </button>


            </form>

            {/* <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input type= "text" value={username} placeholder="Enter username" onChange={(event) => setUsername(event.target.value)}> </input> <br></br> 
            
            {/* <label>Password</label>
            <input type= "text" value={password} placeholder="Enter password" onChange={(event) = setPassword(event.target.value)}> </input> <br></br>  */}

            {/* <button type="submit" className="button">Login</button>
            </form> */}



        </div>
    )
}

export default Login;