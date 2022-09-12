import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function Home(props) {

    const {data} = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function clean() {
        dispatch( {type:'CLEAN'} )
        localStorage.removeItem('auth')
        navigate('/')
    }

    return (
        <div className="container">
            <h1>Bem-vindo {data.username}</h1>
            <Link to="/about">Sobre o projeto</Link>
            <Button className="mt-3" onClick={clean} variant="primary">Sair</Button>
        </div>
    );
}

export default Home;