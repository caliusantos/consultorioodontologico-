import React from 'react';
import { Link } from 'react-router-dom';

import EstruturaPagina from '../../componentes/EstruturaPagina';

import './estilo.css';


const Agenda = () => {
    return(
        <EstruturaPagina>
            <div className="agenda-consultorio">
                <h1>Agende uma Consulta</h1>
                <div className="agenda-container">

                <form className="agende-consulta">
                    <label><input placeholder="nome completo" type="text" name="name"/> </label>
                    <br></br>
                    
                    <label> <input placeholder="Email" Type="text" name="name"/></label>
                    <br></br>
                    
                    <label> <input placeholder="Data de Nascimento" Type="text" name="name"/></label>
                    <br></br>
                    
                    <label> <input placeholder="Genero" Type="text" name="name"/></label>
                    <br></br>
                    
                    <label> <input placeholder="Rg;" Type="text" name="name"/></label>
                    <br></br>
                    
                    <label> <input placeholder="Endereço" Type="text" name="name"/></label>
                    <br></br>
                    
                    <label> <input placeholder="Uf" Type="text" name="name"/></label>
                    <br></br>
                    
                    <label> <input placeholder="Telefone" Type="text" name="name"/></label>
                    <br></br>

                    </form>
                </div>

                <div>
                    <Link to="/contato" className="btn-container">Concluir o Agendamento</Link>
                </div>


            </div>
        </EstruturaPagina>
    );
}

export default Agenda;