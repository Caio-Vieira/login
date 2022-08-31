import React, { useState } from "react";
import Action from '../Action/index'


function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
   
   
    return (
        <div>
            <input type="text" name="email" onChange={e => setEmail(e.target.value)} />
            <input type="password" name="password" onChange={e => setPassword(e.target.value)}/>
            <button onClick={()=>{Action({email, password})}}>Login</button>
        </div>
    );
}

export default Login;