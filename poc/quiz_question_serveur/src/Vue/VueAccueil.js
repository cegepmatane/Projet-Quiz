import React , { useState, useEffect } from 'react';
import '../Decoration/VueAccueil.css';
import LogoQuiz from '../Image/logo-quiz.png';
import VueQuestions from '../Vue/VueQuestions.js';
import Chat from '../Vue/Chat.js';
import VuePanneauScore from '../Vue/VuePanneauSocre.js';
import io from "socket.io-client";

//const ENDPOINT = 'http://lequizdesquiz.ddns.net:5000';
const ENDPOINT = 'http://localhost:5000';
let socket = io(ENDPOINT);

const VueAccueil = () =>{
    
    const test = ()=>{
        console.log('call test')
        socket.emit('start',() =>{
            console.log('emit vers serveur');
        });
    }


    /*useEffect(() => {
        socket.on('startGame', () => {
            console.log('c commance');
        });
    }, []);*/

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
                    <button className="quitter-partie">Quitter la partie</button>
                    <button className="quitter-partie" onClick={() =>{socket.emit('start',() =>{
            console.log('emit vers serveur');
        });}}>Start</button>
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