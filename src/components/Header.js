import React, { useState } from "react";
import ReactDOM from "react-dom";
import bell from "../images/bell.png";
import cog from"../images/cog.png";
import user from"../images/user.png";

const Header = () => {
 

  return (
    <div className="header">
      <div className="headerLogoContainer">
        logo
        {/*
          <img src={logo} />
        */}
      </div>
      <div className= "headerIconContainer">   
        <div className="headerIcon">
          <img src={cog}/>
        </div>
        <div className="headerIcon">
          <img src={bell}/>
        </div>
        <div className="headerIcon userIcon">
          <img src={user} onMouseEnter/>
        </div>
      </div>
    </div>
  );
};

export default Header;