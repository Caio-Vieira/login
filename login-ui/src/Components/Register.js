import React, { useEffect, useState } from "react";
import { createUser } from '../Action/createUserAction'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Register() {
    const dispatch = useDispatch()
    const [message, setMessage] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const { success, error } = useSelector((state) => state.register)

    useEffect(() => {
        if (error) {
           setMessage("erro")
        }
    }, [error])

    useEffect(() => {
        if (success) {
            setTimeout(() => {
                navigate('/')
            }, 2000)
        }
    }, [success])

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(createUser({ email, password }))
    }

    return (
        <div className="container"> 

            {message}

            <form onSubmit={handleSubmit}>
                <input type="text" name="username" onChange={e => setUsername(e.target.value)} placeholder="Digite o nome de usuário" />
                <input type="email" name="email" onChange={e => setEmail(e.target.value)} placeholder="Digite o seu e-mail"/>
                <input type="password" name="password" onChange={e => setPassword(e.target.value)} placeholder="Digite a sua senha" />
                <button type="submit">Registrar</button>
            </form>
        </div>
    );
}

export default Register;