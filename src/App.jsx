import './App.css';
import React from "react";
import Card from './componentes/layout/Card';
import FilhoT from '.componentes/Familia/FilhoT'

export default () => {

    return (
        <div className="App">
            <h1>Fundamentos React</h1>
            <div className="Cards">
                
                <Card titulo="Pai e Filho" color='#DC143C'>
                    <FilhoT nome= 'Gustavo' sobrenome='Alberto'/>
                </Card>
                
            </div>
            
        </div>
    )

}