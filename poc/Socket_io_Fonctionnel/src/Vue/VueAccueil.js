import React from 'react';
import '../Decoration/VueAccueil.css';
import LogoQuiz from '../Image/logo-quiz.png';
import VueQuestions from '../Vue/VueQuestions.js';
import Chat from '../Vue/Chat.js';
import VuePanneauScore from '../Vue/VuePanneauSocre.js';
import GestionJeu from '../Js/GestionJeu.js';
import queryString from 'query-string';
class VueAccueil extends React.Component{

    constructor(location){
        super(location);
        console.log("new VueAccueil");
        window.addEventListener("click",this.test);
        //const { name, room } = queryString.parse(window.location.search);
        //console.log(window.location.search);
        //console.log(name+room);
    }

    test = ()=>{
        this.setState({point:new GestionJeu().getScoreJoueur()})
    }

    state = {
        point: 0
    }

    render(){
        return(
            <div className="vue-accueil-html">
                <div className="titre">
                    <h1>Le Quiz des Quiz</h1>
                </div>
                <img src={LogoQuiz} className="logo" alt="logo"/>

                <div className="contenue">
                    <div className="contenue-chat">
                        <div className="chat">
                            <Chat/>
                        </div>
                    </div>
                    <div className="contenue-jeu">
                        <VueQuestions />
                        <button className="quiter-partie">Quitter la partie</button>
                    </div>
                    <div className="contenue-info">
                        <div className="info">
                            <VuePanneauScore />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default VueAccueil;