import React from 'react';
import {Link} from 'react-router-dom'

import EstruturaPagina from '../../componentes/EstruturaPagina';

import './estilo.css';


const Missao = () => {
    return(
        <EstruturaPagina>
            <div className="missao-consultorio">
                <div className="missao-doutor"></div>
                <h1>Qual é a nossa<b> missão</b></h1>
                <ul className="missao-lista">
                    <li>
                        <p>Preservar a saúde, o sorriso e a qualidade de vida das pessoas, a partir de um atendimento profissional, ético e personalizado.</p>
                    </li>

                    <li>
                         <p>Promover com excelência a ética e a saúde bucal,valorizando a participação multiprofissional, recursos técnologicos e visando a satisfação do cliente. </p>    
                    </li>  
                    <li>
                         <p>Prestar serviços de implantodontia e assegurar confiança, precisão e rapidez no diagnótico e tratamento. </p>    
                    </li>  
                    <li>
                         <p>Oferecer soluções em saúde bucal, por meio de um serviço voltado para o bem estar do cliente.</p>    
                    </li>  
                </ul>
            </div>

            <div>
                <Link to="/contato" className="btn-contato">Entrar em contato</Link>
            </div>

        </EstruturaPagina>
    );
}

export default Missao;

