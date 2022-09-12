import React from "react";
import { Link } from "react-router-dom";

function About(params) {
    return (
        <div className="container">
            <p>
                Olá, meu nome é Caio esse projeto foi feito com o intuito de praticar meus conhecimentos em React, Redux e Node.
            </p>
            <Link to="/home">voltar</Link>
        </div>
    )
}

export default About