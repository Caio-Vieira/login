import React, { useState } from "react";
import {createUser} from '../Action/createUserAction'
import { useDispatch, useSelector } from "react-redux";


function Login() {

    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    return (
        <div>
            <input type="text" name="email" onChange={e => setEmail(e.target.value)} />
            <input type="password" name="password" onChange={e => setPassword(e.target.value)} />
            <button onClick={() => dispatch(createUser({email, password}))}>Register</button>
        </div>
    );
}

export default Login;