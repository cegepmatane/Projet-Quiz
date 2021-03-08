import React from 'react';
import QuestionsDAO from '../Accesseur/QuestionsDAO';
import GestionJeu from '../Js/GestionJeu.js';
import SonBouton from "../Sons/171697__nenadsimic__menu-selection-click.wav";
import SonChangement from "../Sons/257357__brnck__button-click.wav";
class VueQuestions extends React.Component{

    constructor(){
        super();
         this.questionDAO = new QuestionsDAO();
         this.gestionJeu = new GestionJeu();
         this.test();
         this.sonClick = new Audio(SonBouton);
         this.sonClick.volume = 0.4;
         this.sonChangement = new Audio(SonChangement);
         this.sonChangement.volume = 0.2;
    }

    state = {
        question: '',
        propositions: ["","","",""],
        bonneReponse: "",
        estSelectionerbouton1: true,
        estSelectionerbouton2: true,
        estSelectionerbouton3: true,
        estSelectionerbouton4: true 
    }

    verifierBonneReponse = (evenementBouton) =>{
        this.sonClick.play();
        let nomClasseBouton = evenementBouton.target.className;
        let bonneReponse = this.state.bonneReponse;
        let reponseEntree1 = this.state.propositions[0];
        let reponseEntree2 = this.state.propositions[1];
        let reponseEntree3 = this.state.propositions[2];
        let reponseEntree4 = this.state.propositions[3];

        switch (nomClasseBouton) {
            case "reponse-1":
                this.initialiserSelectionBouton1();
                this.gestionJeu.verifierReponse(reponseEntree1,bonneReponse);
                break;

            case "reponse-2":
                this.initialiserSelectionBouton2();
                this.gestionJeu.verifierReponse(reponseEntree2,bonneReponse);
                break;

            case "reponse-3":
                this.initialiserSelectionBouton3();
                this.gestionJeu.verifierReponse(reponseEntree3,bonneReponse);
                break;

            case "reponse-4":
                this.initialiserSelectionBouton4();
                this.gestionJeu.verifierReponse(reponseEntree4,bonneReponse);
                break;
        
            default:
                this.initialiserSelectionParDefault();
                break;
        }
    }

    initialiserSelectionBouton1 = () =>{
        this.setState({
            estSelectionerbouton2: false,
            estSelectionerbouton3: false,
            estSelectionerbouton4: false
        })
    }

    initialiserSelectionBouton2 = () =>{
        this.setState({
            estSelectionerbouton1: false,
            estSelectionerbouton3: false,
            estSelectionerbouton4: false
        })
    }

    initialiserSelectionBouton3 = () =>{
        this.setState({
            estSelectionerbouton2: false,
            estSelectionerbouton1: false,
            estSelectionerbouton4: false
        })
    }

    initialiserSelectionBouton4 = () =>{
        this.setState({
            estSelectionerbouton2: false,
            estSelectionerbouton3: false,
            estSelectionerbouton1: false
        })
    }

    initialiserSelectionParDefault = () =>{
        this.setState({
            estSelectionerbouton1: true,
            estSelectionerbouton2: true,
            estSelectionerbouton3: true,
            estSelectionerbouton4: true
        })
    }

    test = () =>{
        setInterval(() => {
            this.sonChangement.play();
            this.initialiserSelectionParDefault();
            this.question = this.questionDAO.listerQuestionSuivante();
            this.setState({
                question: this.question.question,
                propositions: this.question.propositions,
                bonneReponse: this.question.reponse
            })
        }, 8000);
    }

    render(){
        return(
            <div className="contenue-jeu-question">

                <div className="question">
                    <h2>{this.state.question}</h2>
                </div>
                <div className="contenue-choix-reponse">
                    <button className={(this.state.estSelectionerbouton1)?"reponse-1":"reponse-desactive"} onClick={(evenementBouton)=>{this.verifierBonneReponse(evenementBouton)}}>{this.state.propositions[0]}</button>
                    <button className={(this.state.estSelectionerbouton2)?"reponse-2":"reponse-desactive"} onClick={(evenementBouton)=>{this.verifierBonneReponse(evenementBouton)}}> {this.state.propositions[1]}</button>
                    <button className={(this.state.estSelectionerbouton3)?"reponse-3":"reponse-desactive"} onClick={(evenementBouton)=>{this.verifierBonneReponse(evenementBouton)}}> {this.state.propositions[2]}</button>
                    <button className={(this.state.estSelectionerbouton4)?"reponse-4":"reponse-desactive"} onClick={(evenementBouton)=>{this.verifierBonneReponse(evenementBouton)}}> {this.state.propositions[3]}</button>
                </div>
            </div>
        );
    }
}

export default VueQuestions;