import React from 'react';
import '../Decoration/VueAccueil.css';
import LogoQuiz from '../Image/logo-quiz.png';
import VueQuestions from '../Vue/VueQuestions.js';
import Chat from '../Vue/Chat.js';
import VuePanneauScore from '../Vue/VuePanneauSocre.js';
import GestionJeu from '../Js/GestionJeu.js';
import ReactAudioPlayer from 'react-audio-player';
import MusiqueFond from "../Sons/Puzzle-Game_Looping.mp3";
class VueAccueil extends React.Component{

    constructor(location){
        super(location);
        console.log("new VueAccueil");
        window.addEventListener("click",this.test);
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
                <ReactAudioPlayer
                    volume={0.03}
                    src={MusiqueFond}
                    autoPlay
                    loop
                    hidden
                />
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
                        <button className="quitter-partie">Quitter la partie</button>
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