import React, { useEffect } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authUserAction } from "../Action/authUserAction"

function Main() {

    const { auth, data } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const hasUser = JSON.parse(localStorage.getItem("auth"))

    useEffect(() => {
        if (hasUser) {
            dispatch(authUserAction(hasUser))
        }
    }, [])

    useEffect(() => {
        if (auth) {
            navigate('/home')
        }
    }, [auth])

    return (
        <div>
            <nav>
                <h1>Tela de Login</h1>
            </nav>
            {
                auth ? <Outlet />
                    :
                    <ul>
                        <li><Link to="/signIn">Sign In</Link></li>
                        <li><Link to="/signUp">Sign Up</Link></li>
                    </ul>
            }
        </div>
    );
}

export default Main;