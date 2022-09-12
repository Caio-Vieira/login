import React, { useEffect } from "react";
import { Outlet, useNavigate, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authUserAction } from "../Action/authUserAction"

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
        auth ? navigate('/home') : navigate('/signIn')
    }, [auth])

    return (
        <>
            {auth ? <Outlet /> : <Navigate to="/signIn" />}
        </>
    );
}

export default Main;