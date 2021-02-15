import React from 'react';
import '../Decoration/VueAccueil.css';
import LogoQuiz from '../Image/logo-quiz.png';
import VueQuestions from '../Vue/VueQuestions.js';
import VueChat from '../Vue/VueChat.js';
import VuePanneauScore from '../Vue/VuePanneauScore.js';
import GestionJeu from '../Js/GestionJeu.js';



class VueAccueil extends React.Component{

    constructor(){
        super();
        console.log("new VueAccueil");
    }
    
    render(){
        return(
            <div className="vue-accueil-html">
                <div className="titre">
                </div>

                <div className="contenue">
                    <div className="contenue-chat">
                        <div className="chat">
                            <VueChat/>
                        </div>
                    </div>
                    <div className="contenue-jeu">
                        
                    </div>
                    <div className="contenue-info">
                        <div className="info">

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default VueAccueil;