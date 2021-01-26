import React from 'react';
import QuestionsDAO from '../Accesseur/QuestionsDAO';

class Questions extends React.Component{

    constructor(){
        super();
         this.DAO = new QuestionsDAO();
    }

    state = {
        question: 'rien',
        proposition: ["0","1","2","3"]
    }

    test = () =>{
        this.question = this.DAO.listerQuestionSuivante();
        this.setState({
            question: this.question.question,
            proposition: this.question.propositions
        })
    }

    render(){
        return(
            <div className="contenue-jeu-question">
                <div className="question">
                    <h2>{this.state.question}</h2>
                </div>
                <div className="contenue-choix-reponse">
                    <a href="#" className="reponse-1"> {this.state.proposition[0]}</a>
                    <a href="#" className="reponse-2"> {this.state.proposition[1]}</a>
                    <a href="#" className="reponse-3"> {this.state.proposition[2]}</a>
                    <a href="#" className="reponse-4"> {this.state.proposition[3]}</a>
                    <a href="#"className="quiter-partie" onClick={this.test}>test</a>
                </div>
            </div>
        );
    }
}

export default Questions;