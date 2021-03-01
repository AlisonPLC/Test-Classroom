import React, { useState } from "react";
import ReactDOM from "react-dom";


const BodyElement = () => {
 

  return (
    <div className="body">
      <div className = "menusContainer">
        <div className="sideMenu">
          <div className="sideMenu sideMenuMargin">
          <div className="classMenuButton">
             <a href="./Consult.js">
              <span>
                <div className="classMenuButtonMargin"/>
                Consultar Alunos
              </span>
             </a>
           </div>
            
           <div className="classMenuButton">
            <a href="#">
              <span>
                <div className="classMenuButtonMargin"/>
                Consultar Alunos
              </span>
            </a>
           </div>
          </div>
          <div className="sideMenu sideMenuMargin">
          <div className="classMenuButton">
             <a href="#">
              <span>
                <div className="classMenuButtonMargin"/>
               Cadastrar Alunos
              </span>
             </a>
           </div>
            
           <div className="classMenuButton">
            <a href="#">
              <span>
                <div className="classMenuButtonMargin"/>
                Consultar Sala
              </span>
            </a>
           </div>

           <div className="classMenuButton">
            <a href="#">
              <span>
                <div className="classMenuButtonMargin"/>
                Consultar "Coffee Break"
              </span>
            </a>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyElement;