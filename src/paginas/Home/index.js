import React from 'react';
import {Link } from 'react-router-dom';

import EstruturaPagina from '../../componentes/EstruturaPagina';
import './estilo.css';

const Home =() => {
    return(
        <EstruturaPagina>
            <div className="home-apresentacao">
                <div className="limitar-conatiner">
                    <h1>Os melhores <span>aparelhos dentários</span>!</h1>
                    <p>Confira abaixo todas as especialidades odontológicas que temos a sua disposição</p>

                    <ul className="lista-servicos">
                        <li>
                            <img src="assets/dente.png" alt="logo" title="logo" />
                            <p>Pré-avaliação</p>
                        </li>
                    
                        <li>
                            <img src="assets/dente.png" alt="logo" title="logo" />
                            <p>Aparelho Dentario</p>
                        </li>
                 
                        <li>
                            <img src="assets/dente.png" alt="logo" title="logo" />
                            <p>Raio-X Digital</p>
                        </li>
                   
                        <li>
                            <img src="assets/dente.png" alt="logo" title="logo" />
                            <p>Clareamento Dental</p>
                        </li>
                    </ul>

                </div>
                <h2 className="Titulo-sessao"> Por que usar <b>Aparelho</b>?</h2>
                <img className="img-aparelho" src="assets/aparelho.png" alt="Imagem do uso de um aparelho" title="Imagem do uso de um aparelho"/>

                <ul className="lista-sobre-aparelho limitar-conatiner">
                    <li>
                        <h3>Alinhar os dentes</h3>
                        <p>Dentes desalinhados causam problemas nos dentes e podem afetar a digestão dos alimentos e a respiração</p>
                    </li>

                    <li>
                        <h3>Melhorar a dicção e a higiene dentária</h3>
                        <p>Muitas pessoas não conseguem usar fio dental devido á posição da sua dentição. Contudo, a correção possibilita o cuidado com a saúde bocal de forma bem mais ampla</p>
                    </li>
                    
                    <li>
                        <h3>Corrigir espaço entre os dentes</h3>
                        <p>Uma definição desalinhada e com espaço significativos incomodam muitas pessoas. usar aparelho nos dentes é uma das formas mais eficientes para que esses problemas possam ser corrigidos</p>
                    </li>
                </ul>
               
                <div className="home-depoimentos">
                    <h2 className="titulo-sessao">Veja o que nosso <b>clientes</b> estão falando...</h2>
                    <ul className=" lista-depoimentos">
                        <li>
                            <img className="img-aparelho" src="assets/cliente01.png" alt="Cliente Aurelino" title="Cliente Aurelino" />
                            <p>Aurelino da Cunha</p>
                            <p>Usei aparelho por dois anos e agora posso sorrir novamente </p>
                        </li>
                       
                        <li>
                            <img className="img-aparelho" src="assets/cliente02.png" alt="Cliente Carolina" title="Cliente Carolina" />
                            <p>Carolina da Ferrari </p>
                            <p>Meus dentes ceram espaçosos e depois de 1 ano estão no lugar certo</p>
                        </li>
                       
                        <li>
                            <img className="img-aparelho" src="assets/cliente03.png" alt="Cliente Jéssica" title="Cliente Jéssica" />
                            <p>Jéssica do Alçapão</p>
                            <p>Comecei a usar ano passado e já estou notando a diferença</p>
                        </li>
                    </ul>
                </div>

                <div>
                <Link to="/contato" className="btn-contato">Entrar em Contato</Link>
                </div>

            </div>
        </EstruturaPagina>
    );
}
export default Home;