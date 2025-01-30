import React from "react";
import "../assets/styles/Companies.css";
import prologis from "../assets/images/prologis.png";
import tower from "../assets/images/tower.png";
import equinix from "../assets/images/equinix.png";
import realty from "../assets/images/realty.png";

const Companies= () =>{
    return(
      <div className="companies">
        <img src={prologis} alt="prologis" />
        <img src={tower} alt="tower" />
        <img src={equinix} alt="equinix" />
        <img src={realty} alt="realty" />
      </div>
    );
}

export default Companies;