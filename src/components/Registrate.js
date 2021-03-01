import React, { useState } from "react";
import ReactDOM from "react-dom";


const Registrate = () => {
 
    function LogOnConsole(){
        console.log("LOL");
    }

    function RegistrationForm(props) {
        const [state , setState] = useState({
            name : "",
            class : ""
        })
        const handleChange = (e) => {
            const {id , value} = e.target   
            setState(prevState => ({
                ...prevState,
                [id] : value
            }))
        }
    }

    const [ConsultarAlunos, setConsultarAlunos] = useState(true);

  return (
    <div className="body">
        <div className="consultMenu">
            <div className=" consultMenuVoltar"> {/*This should make the page go back to body on app */}
                <a  onClick={console.log('O link foi clicado.')}>
                    <span>
                        <div className="classMenuButtonMargin_voltar"/>
                        Voltar
                    </span>
                </a>
            </div>
            <div className="classMenuButton_consult"> {/*This should make the page go consult students */}
                <a  onClick={console.log('O link foi clicado.')}>
                    <span>
                        <div className="classMenuButtonMargin_consult"/>
                        Consultar Alunos
                    </span>
                </a>
            </div>
            <div className="classMenuButton_consult">{/*This should make the page go consult classes */}
                <a href="#" onClick={LogOnConsole()}>
                    <span>
                        <div className="classMenuButtonMargin_consult"/>
                        Consultar Salas
                    </span>
                </a>
            </div>
        </div>
        {ConsultarAlunos == true ? 
        <div className="table students">
            {/* Insert table for Consult here */}
            <div className="table_description list_item" >
                    <div className="list_item_name list_item_border">Nome</div>
                    <div className="list_item_id list_item_border">ID</div>
                    <div className="list_item_classrom list_item_border">Sala</div>
            </div>
            <ul class="list">
                <li className="list_item" >
                    <div className="list_item_name list_item_border">Jill</div>
                    <div className="list_item_id list_item_border">001</div>
                    <div className="list_item_classrom list_item_border">1</div>
                </li>
                <li className="list_item" >
                    <div className="list_item_name list_item_border">Jill</div>
                    <div className="list_item_id list_item_border">002</div>
                    <div className="list_item_classrom list_item_border">1 </div>
                </li>
                <li className="list_item" >
                    <div className="list_item_name list_item_border">Jill</div>
                    <div className="list_item_id list_item_border">003</div>
                    <div className="list_item_classrom list_item_border">1</div>
                </li>
            </ul>
        </div>
        : 
        <div className="table classes">
            {/* Insert table for Consult here */}
            <div className="table_description list_item" >
                    <div className="list_item_name list_item_border">Sala</div>
                    <div className="list_item_id list_item_border">ID</div>
                    <div className="list_item_classrom list_item_border">Quantidade de alunos</div>
            </div>
            <ul class="list">
                <li className="list_item" >
                    <div className="list_item_name list_item_border">A1</div>
                    <div className="list_item_id list_item_border">s01</div>
                    <div className="list_item_classrom list_item_border">10</div>
                </li>
                <li className="list_item" >
                    <div className="list_item_name list_item_border">A2</div>
                    <div className="list_item_id list_item_border">s02</div>
                    <div className="list_item_classrom list_item_border">21 </div>
                </li>
                <li className="list_item" >
                    <div className="list_item_name list_item_border">A3</div>
                    <div className="list_item_id list_item_border">s03</div>
                    <div className="list_item_classrom list_item_border">10</div>
                </li>
            </ul>
        </div>
        }
    </div>
  );
};

export default Registrate;