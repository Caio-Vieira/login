import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { authUserAction } from "../Action/authUserAction"

function Home(props) {

    const {data} = useSelector(state => state.auth)
    const dispatch = useDispatch()

    return (
        <>
            <h1>Bem vindo {data.hasUser}</h1>
            <button onClick={()=> dispatch( {type:'CLEAN'} )}>Sair</button>
        </>
    );
}

export default Home;