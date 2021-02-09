import '../Decoration/pageConnexion.css';
import React from "react";
import TopPage from "../Vue/TopPage.js";
import VueFormulaire from "../Vue/VueFormulaire.js";
class VueConnexion extends React.Component {

    render(){
        return (
            <div>
                <TopPage/>
                <div className="page-connexion">
                    <div className="page-connexion-body">
                        <div className="box-decoration">
                            <VueFormulaire/>
                        </div>
                    </div>
                    <footer className="page-connexion-piedpage"> Copyright Kenny Simon @2021</footer>
                </div>
            </div>
        );
    }
}

export default VueConnexion;
