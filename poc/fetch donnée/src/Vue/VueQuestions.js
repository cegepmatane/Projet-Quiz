import React, { useState, useEffect, useRef }  from 'react';
import axios from 'axios';
//import QuestionsDAO from '../Accesseur/QuestionsDAO';
// import QuestionsServiceDAO from '../Accesseur/QuestionsServiceDAO';
import GestionJeu from '../Js/GestionJeu';
import io from "socket.io-client";

const VueQuestions = () =>{
    
    const gestionJeu = new GestionJeu();
    //const ENDPOINT = 'http://lequizdesquiz.ddns.net:5000';
    const ENDPOINT = 'http://localhost:5000';
    const URL = 'http://lequizdesquiz.tikenix.me:9647/getQuestionnaire/questionnaire_star_wars';
    let socket = io(ENDPOINT);
    const [estChargee, setEstChargee] = useState(false);
    const [estSelectionerbouton1, setEstSelectionerbouton1] = useState(Boolean);
    const [estSelectionerbouton2, setEstSelectionerbouton2] = useState(Boolean);
    const [estSelectionerbouton3, setEstSelectionerbouton3] = useState(Boolean);
    const [estSelectionerbouton4, setEstSelectionerbouton4] = useState(Boolean);
    const [question, setQuestion] = useState('');
    const [bonneReponseModel, setBonneReponse] = useState('n');
    const [proposition1, setProposition1] = useState('');
    const [proposition2, setProposition2] = useState('');
    const [proposition3, setProposition3] = useState('');
    const [proposition4, setProposition4] = useState('');
    const [listeQuestions, setListeQuestions] = useState({ questions: [] });

    const fetchData = useRef(() => {});

    fetchData.current = async () => {
        return await axios.get(URL).then((data) =>{
            return data.data
        }).catch(erreur => {
            console.error(erreur);
        });
    };

    useEffect(() => {
        fetchData.current().then(data => {
            setListeQuestions(data);
            setEstChargee(true);
        });
    },[]);

    useEffect(() => {
        socket.on('startGame', (index) => {
            if(estChargee){
                initialiserSelectionParDefault();
                setQuestion(listeQuestions[index].question);
                setProposition1(listeQuestions[index].proposition1);
                setProposition2(listeQuestions[index].proposition2);
                setProposition3(listeQuestions[index].proposition3);
                setProposition4(listeQuestions[index].proposition4);
                setBonneReponse(listeQuestions[index].reponse);
            }
        });
    });


    const verifierBonneReponse = (evenementBouton) =>{
        let nomClasseBouton = evenementBouton.target.className;
        let bonneReponse = bonneReponseModel;
        let reponseEntree1 = proposition1;
        let reponseEntree2 = proposition2;
        let reponseEntree3 = proposition3;
        let reponseEntree4 = proposition4;

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
        setEstSelectionerbouton2(false);
        setEstSelectionerbouton3(false);
        setEstSelectionerbouton4(false);
    }

    const initialiserSelectionBouton2 = () =>{
        setEstSelectionerbouton1(false);
        setEstSelectionerbouton3(false);
        setEstSelectionerbouton4(false);
    }

    const initialiserSelectionBouton3 = () =>{
        setEstSelectionerbouton2(false);
        setEstSelectionerbouton1(false);
        setEstSelectionerbouton4(false);
    }

    const initialiserSelectionBouton4 = () =>{
        setEstSelectionerbouton2(false);
        setEstSelectionerbouton3(false);
        setEstSelectionerbouton1(false);
    }

    const initialiserSelectionParDefault = () =>{
        setEstSelectionerbouton1(true);
        setEstSelectionerbouton2(true);
        setEstSelectionerbouton3(true);
        setEstSelectionerbouton4(true);
    }

    return(
        <div id="test" className="contenue-jeu-question">
            <div className="question">
                <h2>{question}</h2>
            </div>
            <div className="contenue-choix-reponse">
                <button className={(estSelectionerbouton1)?"reponse-1":"reponse-desactive"} onClick={(evenementBouton)=>{verifierBonneReponse(evenementBouton)}}> {proposition1}</button>
                <button className={(estSelectionerbouton2)?"reponse-2":"reponse-desactive"} onClick={(evenementBouton)=>{verifierBonneReponse(evenementBouton)}}> {proposition2}</button>
                <button className={(estSelectionerbouton3)?"reponse-3":"reponse-desactive"} onClick={(evenementBouton)=>{verifierBonneReponse(evenementBouton)}}> {proposition3}</button>
                <button className={(estSelectionerbouton4)?"reponse-4":"reponse-desactive"} onClick={(evenementBouton)=>{verifierBonneReponse(evenementBouton)}}> {proposition4}</button>
            </div>
        </div>
    );
}

export default VueQuestions;