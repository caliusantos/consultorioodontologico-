import React from 'react';
import {Link} from 'react-router-dom';
import EstruturaPagina from '../../componentes/EstruturaPagina';

import './estilo.css';


const Convenios = () => {
    return(
        <EstruturaPagina>
            <div className="convenios-consultorio">
                <h1 className="titulos-convenios">Convênio Dentistas</h1>
                <h3 className="subtitulo">O Plano Odontológico Ideal Para Você</h3>
                <h5 className="descricao">Seu sorriso merece o melhor plano odontológico nacional. Tenha um plano plano odontológico, tenha o plano dentes saúdaveis </h5>

                <div className="convênios-container">
                
                <h2 class="primiero-plano">Plano Individual</h2>
                <p><b>Mensal</b>R$: 24,50 <b>carência zero</b> </p>
                <p>Sem carência para emergências e atendimento de urgência</p>

                <h2 class="segundo-plano"> Plano Empresarial</h2>
                <p><b>Mensal</b>R$: 33,90 <b> partir de 3 vezes</b></p>
                <p>Possibilidade de isenção de carência. Incluir a documentação Ortodôntica</p>
                </div>

            </div>

            <div>
                <Link to="/contato" className="btn-contato">Entrar em contato</Link>
            </div>
        </EstruturaPagina>
    );
}

export default Convenios;