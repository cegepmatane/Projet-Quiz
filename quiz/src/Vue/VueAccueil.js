import React from 'react';
import Logo from '../logo.svg';
import '../Decoration/VueAccueil.css';

function VueAccueil(){
    return(
        <div className="vue-accueil-html">
            <div className="titre">
                <h1>Le Quiz des Quiz</h1>
                <img src="https://place-hold.it/100x80" className="logo"/>
            </div>
                <div className="contenue">
                <div className="contenue-chat">
                    
                </div>
                <div className="contenue-jeu">
                    
                </div>
                <div className="contenue-info">
                    
                </div>
            </div>
        </div>
    );
}

export default VueAccueil;