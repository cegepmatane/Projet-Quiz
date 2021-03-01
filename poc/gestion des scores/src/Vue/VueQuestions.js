import React, { useState, useEffect }  from 'react';
import QuestionsDAO from '../Accesseur/QuestionsDAO';
import GestionJeu from '../Js/GestionJeu.js';
import io from "socket.io-client";

const VueQuestions = () =>{

    let questionDAO = new QuestionsDAO();
    let gestionJeu = new GestionJeu();
    //const ENDPOINT = 'http://lequizdesquiz.ddns.net:5000';
    const ENDPOINT = 'http://localhost:5000';
    let socket = io(ENDPOINT);
    let estSelectionerbouton1 = true;
    let estSelectionerbouton2 = true;
    let estSelectionerbouton3 = true;
    let estSelectionerbouton4 = true;
    const [question, setQuestion] = useState('');
    const [bonneReponseModel, setBonneReponse] = useState('');
    const [propositions, setPropositions] = useState([]);

    useEffect(() => {
        socket.on('startGame', () => {
            setInterval(() => {
                initialiserSelectionParDefault()
                let questions = questionDAO.listerQuestionSuivante();
                setQuestion(questions.question);
                setPropositions(questions.propositions);
                setBonneReponse(questions.reponse);
            }, 8000);
        });
    }, []);


    const verifierBonneReponse = (evenementBouton) =>{
        let nomClasseBouton = evenementBouton.target.className;
        let bonneReponse = bonneReponseModel;
        let reponseEntree1 = propositions[0];
        let reponseEntree2 = propositions[1];
        let reponseEntree3 = propositions[2];
        let reponseEntree4 = propositions[3];

        switch (nomClasseBouton) {
            case "reponse-1":
                initialiserSelectionBouton1();
                gestionJeu.verifierReponse(reponseEntree1,bonneReponse);
                break;

            case "reponse-2":
                initialiserSelectionBouton2();
                gestionJeu.verifierReponse(reponseEntree2,bonneReponse);
                break;

            case "reponse-3":
                initialiserSelectionBouton3();
                gestionJeu.verifierReponse(reponseEntree3,bonneReponse);
                break;

            case "reponse-4":
                initialiserSelectionBouton4();
                gestionJeu.verifierReponse(reponseEntree4,bonneReponse);
                break;
        
            default:
                initialiserSelectionParDefault();
                break;
        }
    }

    const initialiserSelectionBouton1 = () =>{
        estSelectionerbouton2 = false;
        estSelectionerbouton3 = false;
        estSelectionerbouton4 = false;
    }

    const initialiserSelectionBouton2 = () =>{
            estSelectionerbouton1 = false;
            estSelectionerbouton3 = false;
            estSelectionerbouton4 = false;
    }

    const initialiserSelectionBouton3 = () =>{
        estSelectionerbouton2 = false;
        estSelectionerbouton1 = false;
        estSelectionerbouton4 = false;
    }

    const initialiserSelectionBouton4 = () =>{
        estSelectionerbouton2 = false;
        estSelectionerbouton3 = false;
        estSelectionerbouton1 = false;
    }

    const initialiserSelectionParDefault = () =>{
        estSelectionerbouton1 = true;
        estSelectionerbouton2 = true;
        estSelectionerbouton3 = true;
        estSelectionerbouton4 = true;
    }

    return(
        <div className="contenue-jeu-question">
            <div className="question">
                <h2>{question}</h2>
            </div>
            <div className="contenue-choix-reponse">
                <button className={(estSelectionerbouton1)?"reponse-1":"reponse-desactive"} onClick={(evenementBouton)=>{verifierBonneReponse(evenementBouton)}}> {propositions[0]}</button>
                <button className={(estSelectionerbouton2)?"reponse-2":"reponse-desactive"} onClick={(evenementBouton)=>{verifierBonneReponse(evenementBouton)}}> {propositions[1]}</button>
                <button className={(estSelectionerbouton3)?"reponse-3":"reponse-desactive"} onClick={(evenementBouton)=>{verifierBonneReponse(evenementBouton)}}> {propositions[2]}</button>
                <button className={(estSelectionerbouton4)?"reponse-4":"reponse-desactive"} onClick={(evenementBouton)=>{verifierBonneReponse(evenementBouton)}}> {propositions[3]}</button>
            </div>
        </div>
    );
}

export default VueQuestions;