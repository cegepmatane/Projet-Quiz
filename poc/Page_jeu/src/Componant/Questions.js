import React from 'react';
import QuestionsDAO from '../Accesseur/QuestionsDAO';

class Questions extends React.Component{

    constructor(){
        super();
    }

    state = {
        question: 'rien'
    }

    test = () =>{
        this.setState({
            question: new QuestionsDAO().test()
        })
    }

    render(){
        return(
            <div className="contenue-jeu-question">
                <div className="question">
                    <h2>{this.state.question}?</h2>
                </div>
                <div className="contenue-choix-reponse">
                    <a href="#" className="reponse-1"> Réponse 1</a>
                    <a href="#" className="reponse-2"> Réponse 2</a>
                    <a href="#" className="reponse-3"> Réponse 3</a>
                    <a href="#" className="reponse-4"> Réponse 4</a>
                    <a href="#"className="quiter-partie" onClick={this.test}>test</a>
                </div>
            </div>
        );
    }
}

export default Questions;