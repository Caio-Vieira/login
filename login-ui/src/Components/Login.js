import React, { useState } from "react";
import Action from '../Action/index'


function Login() {

    const [text, setText] = useState("")
    const [password, setPassword] = useState("")
   
   
    return (
        <div>
            <input type="text" name="email" onChange={e => setText(e.target.value)} />
            <input type="password" name="password" onChange={e => setPassword(e.target.value)}/>
            <button onClick={()=>{Action({text, password})}}>Login</button>
        </div>
    );
}

export default Login;