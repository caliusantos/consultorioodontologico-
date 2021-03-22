import React from 'react';

import EstruturaPagina from '../../componentes/EstruturaPagina';
import Mapa from '../../componentes/Mapa';
import './estilo.css';

const Contato = ()=> {
    return(
        <EstruturaPagina>
            <div className="contato-container">
                <div className="contato-mapa">
                    <h2 className="titulo-sessao">Horários de <b>atendimento</b></h2>
                    <p>Agende uma consulta pelo telefone: (11) 5432-7000</p>

                    <ul className="lista-medicos">
                        <li>
                            <img className="img-aparelho" src="assets/medico01.png" alt="Foto do Dr. Hélio" title="|Foto do Dr.Hélio"/>
                            <p>Doutor Hélio</p>
                            <p>Segundas, quartas,  e sextas das 09:00 ás 16:00 </p>
                        </li>
                        
                        <li>
                            <img className="img-aparelho" src="assets/medico02.png" alt="Foto do Dr. Carlos" title="|Foto do Dr. Carlos"/>
                            <p>Doutor Carlos</p>
                            <p>Terças, Quintas das 13:00 ás 18:00 </p>
                        </li>

                        <li>
                            <img className="img-aparelho" src="assets/medico03.png" alt="Foto do Dr. Susana" title="|Foto do Dr.Susana"/>
                            <p>Doutor Susana</p>
                            <p>Terças, quintas,  e sábados das 08:00 ás 12:00 </p>
                        </li>
                    </ul>
                </div>

                <div className="contato-mapa">
                    <h2 className="titulo-sessao">Onde estamos<b>Localizados</b>?</h2>
                    <p>R. Bento Branco de Andrade Filho, 379 - São paulo - SP. Cep 04757-000</p>
                    <Mapa />
                </div>
            </div>
        </EstruturaPagina>
    );
}

export default Contato;