import React from 'react';
import QuestionsDAO from '../Accesseur/QuestionsDAO';

class Questions extends React.Component{

    constructor(){
        super();
         this.DAO = new QuestionsDAO();
         
         /*setInterval(() => {
            this.question = this.DAO.listerQuestionSuivante();
            this.setState({
                question: this.question.question,
                proposition: this.question.propositions
            })
          }, 8000);*/
    }

    state = {
        question: 'rien',
        proposition: ["0","1","2","3"],
        hash: window.location.hash.substring(1),
        estSelectionerbouton1: true,
        estSelectionerbouton2: true,
        estSelectionerbouton3: true,
        estSelectionerbouton4: true 
    }

    verifierBonneReponse = (evenementBouton) =>{
        let nomClasseBouton = evenementBouton.target.className;
        //console.log(nomClasseBouton);

        switch (nomClasseBouton) {
            case "reponse-1":
                this.initialiserSelectionBouton1();
                console.log("test event 1");
                break;

            case "reponse-2":
                this.initialiserSelectionBouton2();
                console.log("test event 2");
                break;

            case "reponse-3":
                this.initialiserSelectionBouton3();
                console.log("test event 3");
                break;

            case "reponse-4":
                this.initialiserSelectionBouton4();
                console.log("test event 4");
                break;
        
            default:
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
            this.initialiserSelectionParDefault();
            this.question = this.DAO.listerQuestionSuivante();
            this.setState({
                question: this.question.question,
                proposition: this.question.propositions
            })
          }, 3000);
    }

    render(){
        return(
            <div className="contenue-jeu-question">
                <div className="question">
                    <h2>{this.state.question}</h2>
                </div>
                <div className="contenue-choix-reponse">
                    <button className={(this.state.estSelectionerbouton1)?"reponse-1":"reponse-desactive"} onClick={(evenementBouton)=>{this.verifierBonneReponse(evenementBouton)}}> {this.state.proposition[0]}</button>
                    <button className={(this.state.estSelectionerbouton2)?"reponse-2":"reponse-desactive"} onClick={(evenementBouton)=>{this.verifierBonneReponse(evenementBouton)}}> {this.state.proposition[1]}</button>
                    <button className={(this.state.estSelectionerbouton3)?"reponse-3":"reponse-desactive"} onClick={(evenementBouton)=>{this.verifierBonneReponse(evenementBouton)}}> {this.state.proposition[2]}</button>
                    <button className={(this.state.estSelectionerbouton4)?"reponse-4":"reponse-desactive"} onClick={(evenementBouton)=>{this.verifierBonneReponse(evenementBouton)}}> {this.state.proposition[3]}</button>
                    <a href="#"className="quiter-partie" onClick={this.test}>test</a>
                </div>
            </div>
        );
    }
}

export default Questions;