import React, {useState, useEffect} from 'react';

export default function Info(props) {
    return (
        <div 
            className={props.info ? 'info__box info__box--act' : 'info__box'}
        >
            <h1>
                Este portfólio versão 1.0 foi desenvolvido em ReactJS e Wordpress Headless com consumo de API via GraphQL no fim do verão de 2022. 
            </h1>
            <h2>Fotografia dos trabalhos</h2>
            <h3>Fulano de Tal</h3>
            <h2>Soundtrack do Showreel</h2>
            <h3>Podeserdesligado</h3>
        </div>
    )
}
 