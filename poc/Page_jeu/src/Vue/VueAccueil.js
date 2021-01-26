import React from 'react';
import '../Decoration/VueAccueil.css';
import LogoQuiz from '../Image/logo-quiz.png';
import Questions from '../Componant/Questions.js';

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
                    <Questions />
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