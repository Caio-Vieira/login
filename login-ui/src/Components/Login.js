import React, { useState } from "react";
import { authUser } from '../Action/authUserAction'
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function Login() {

    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(authUser({ email: email, password: password }))
        setTimeout(()=>{
            navigate('/home')
        }, 2000)
    }

    return (
        <div className="container">
            <div className="box">
                <form onSubmit={handleSubmit}>
                    <input className="mt-3" type="text" name="email" onChange={e => setEmail(e.target.value)} required={true} placeholder="Digite o seu e-mail" />
                    <input className="mt-3" type="password" name="password" onChange={e => setPassword(e.target.value)} required={true} placeholder="Digite a sua senha" />
                    <Button className="mt-3" type="submit" variant="primary">Entrar</Button>
                </form>
            </div>
            <div>
                <Link to="/signUp">Criar uma conta</Link>
            </div>
        </div>
    );
}

export default Login;