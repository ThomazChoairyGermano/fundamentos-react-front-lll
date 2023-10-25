import React from "react";
import Primeiro from './componentes/basicos/Primeiro'
import PrimeiroProps from "./componentes/basicos/PrimeiroProps";

export default () => {

    return (
        <div>
            <Primeiro/>
            <PrimeiroProps titulo="Titulo 1" subtitulo="Subtitulo 1"/>
        </div>
    )

}