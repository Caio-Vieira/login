import React, { useEffect, useState } from "react";
import { createUser } from '../Action/createUserAction'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

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
        dispatch(createUser({ username, email, password }))
    }

    return (
        <div className="container">
            {message}

            <div className="box">
                <form onSubmit={handleSubmit}>
                    <input className="mt-3" type="text" name="username" onChange={e => setUsername(e.target.value)} placeholder="Digite o seu nome de usuário" />
                    <input className="mt-3" type="email" name="email" onChange={e => setEmail(e.target.value)} placeholder="Digite o seu e-mail" />
                    <input className="mt-3" type="password" name="password" onChange={e => setPassword(e.target.value)} placeholder="Digite a sua senha" />
                    <Button className="mt-3" type="submit" variant="primary">Registrar</Button>
                </form>
            </div>

            <div>
                <Link to="/signIn">Já tenho uma conta</Link>
            </div>
        </div>
    );
}

export default Register;