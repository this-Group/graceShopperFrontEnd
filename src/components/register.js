import React from "react";
import { useState } from "react";




const Register = (props) => {
    console.log("props from register", props)
    const {createUser, user} = props
    console.log("user from props from register", user)

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
     


    const handleSubmit = async (event) => {
        event.preventDefault();

        console.log("From handleSumbit for register", username, password)

        
        createUser(username, password);
        console.log("after create user");
        setUsername('');
        setPassword('');
        console.log("This is the userState", user)
        console.log("this is the userId", user.user.userId)
        console.log("this is the orderId", user.user.orderId)

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