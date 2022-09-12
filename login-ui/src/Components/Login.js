import React, { useState } from "react";
import { authUser } from '../Action/authUserAction'
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

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
                    <input type="text" name="email" onChange={e => setEmail(e.target.value)} required={true} placeholder="Digite o seu e-mail" />
                    <input type="password" name="password" onChange={e => setPassword(e.target.value)} required={true} placeholder="Digite a sua senha" />
                    <button type="submit">Entrar</button>
                </form>
            </div>
            <div className="box">
                <Link to="/signUp">Criar uma conta</Link>
            </div>
        </div>
    );
}

export default Login;