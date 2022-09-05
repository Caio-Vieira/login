import React, { useEffect } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authUserAction } from "../Action/authUserAction"
import Login from "./Login";

function Main() {

    const { auth } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const hasUser = JSON.parse(localStorage.getItem("auth"))

    useEffect(() => {
        if (hasUser) {
            dispatch(authUserAction(hasUser))
        }
    }, [])

    useEffect(() => {
        auth ? navigate('/home') : navigate('/')
    }, [auth])

    return (
        <>
            {auth ? <Outlet /> :
                <div className="container">
                    <Link to="/signUp">Registrar-se</Link>
                    <Login />
                </div>
            }
        </>
    );
}

export default Main;