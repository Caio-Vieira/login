import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

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
        <>
            <h1>Bem vindo {data.user}</h1>
            <button onClick={clean}>Sair</button>
        </>
    );
}

export default Home;