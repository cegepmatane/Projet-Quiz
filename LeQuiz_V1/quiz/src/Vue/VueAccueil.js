import React from 'react';
import '../Decoration/VueAccueil.css';
import LogoQuiz from '../Image/logo-quiz.png';
import VueQuestions from '../Vue/VueQuestions.js';
import Chat from '../Vue/Chat.js';
import VuePanneauScore from '../Vue/VuePanneauScore.js';
import io from "socket.io-client";
import ReactAudioPlayer from 'react-audio-player';
import MusiqueFond from "../Sons/Puzzle-Game_Looping.mp3";

const ENDPOINT = 'http://lequizdesquiz.tikenix.me:4000';
let socket = io(ENDPOINT);

const VueAccueil = () =>{

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
                    <button className="quitter-partie" onClick={ () => { socket.emit('start'); } }>Start
                    </button>
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
export default VueAccueil;