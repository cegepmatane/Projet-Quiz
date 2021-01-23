import React from 'react';
import '../Decoration/VueAccueil.css';
import LogoQuiz from '../logo-quiz.png';

function VueAccueil(){
    return(
        <div className="vue-accueil-html">
            <div className="titre">
                <h1>Le Quiz des Quiz</h1>
            </div>
            <img src={LogoQuiz} className="logo"/>

            <div className="contenue">
                <div className="contenue-chat">
                    <div className="chat"></div>
                </div>
                <div className="contenue-jeu">
                    <div className="contenue-jeu-question">
                        <div className="question">
                            <h2>Voici une question?</h2>
                        </div>
                        <div className="contenue-choix-reponse">
                            <a href="#" className="reponse-1"> Réponse 1</a>
                            <a href="#" className="reponse-2"> Réponse 2</a>
                            <a href="#" className="reponse-3"> Réponse 3</a>
                            <a href="#" className="reponse-4"> Réponse 4</a>
                        </div>
                    </div>
                    <a href="#" className="quiter-partie">Quiter la partie</a>
                </div>
                <div className="contenue-info">
                <div className="info"></div> 
                </div>
            </div>
        </div>
    );
}

export default VueAccueil;