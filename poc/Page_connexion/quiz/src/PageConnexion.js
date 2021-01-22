import './pageConnexion.css';
import React from "react";
import TopPage from "./components/TopPage";
import Formulaire from "./components/Formulaire";

function PageConnexion() {
    return (
        <div>
            <TopPage/>
            <div className="page-connexion">
                <div className="page-connexion-body">
                    <div className="box-decoration">
                        <Formulaire/>
                    </div>
                    
                </div>
                <footer className="page-connexion-piedpage"> Copyright Kenny Simon @2021</footer>
            </div>
        </div>
        
    );
}

export default PageConnexion;
