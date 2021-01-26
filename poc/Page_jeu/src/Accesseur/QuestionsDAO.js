import React from 'react';
import {QuestionsData} from '../data/QuestionsData';
import QuestionModele from '../Modele/QuestionModele';

class QuestionsDAO{

    constructor(){
        this.listeQuestion = [];
        this.compteur = 0;

        for (let position in QuestionsData) {

            let question = new QuestionModele(QuestionsData[position].id, QuestionsData[position].question, 
                QuestionsData[position].propositions, QuestionsData[position].réponse);

                this.listeQuestion[question.id] = question;
        }
    }

    listerQuestions(){

    }

    listerQuestionSuivante(){
        this.compteur ++;
        if(this.compteur < this.listeQuestion.length)
            return this.listeQuestion[this.compteur];
        else{
            this.compteur = 1;
            return this.listeQuestion[this.compteur];
        }
            
    }
}

export default QuestionsDAO;