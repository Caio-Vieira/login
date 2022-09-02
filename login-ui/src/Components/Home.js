import React from "react";
import { useSelector } from "react-redux";
import {Navigate, Outlet} from 'react-router-dom'

function Home(props) {

    const {auth, data} = useSelector(state => state.auth)

    return (
        auth ?
        <h1>Bem vindo {data.user}</h1>
        : <Navigate to="/"/>
    );
}

export default Home;