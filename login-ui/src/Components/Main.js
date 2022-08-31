import React from "react";
import { Outlet, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Main() {
    const {auth, data} = useSelector(state => state.auth)
    return (
        auth ? <Outlet /> :
        <div>
            <nav>
                <h1>Tela de Login</h1>
                <ul>
                    <li><Link to="/signIn">Sign In</Link></li>
                    <li><Link to="/signUp">Sign Up</Link></li>
                </ul>
            </nav>
            <Outlet/>
        </div>

    );
}

export default Main;