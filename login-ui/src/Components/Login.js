import React, { useState, useEffect } from "react";
import { authUser } from '../Action/authUserAction'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'

function Login() {

    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { auth, data } = useSelector(state => state.auth)
    const navigate = useNavigate()

    useEffect(() => {
        if (auth) {
            navigate('/home')
        }
    }, [data])

    return (
        <div>
            <input type="text" name="email" onChange={e => setEmail(e.target.value)} />
            <input type="password" name="password" onChange={e => setPassword(e.target.value)} />
            <button onClick={() => dispatch(authUser({ email, password }))}>Login</button>
        </div>
    );
}

export default Login;