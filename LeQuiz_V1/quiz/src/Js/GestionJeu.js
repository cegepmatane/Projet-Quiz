import QuestionsServiceDAO from '../Accesseur/QuestionsServiceDAO';
import io from "socket.io-client";

let instance = null;

class GestionJeu{

    constructor(){
        if (!instance) {
            instance = this;
        }
        this.questionsServiceDAO = new QuestionsServiceDAO();
        this.scoreJoueur = 0;


        return instance;
    }

    verifierReponse(reponseEntree, reponseBonne){
        if(reponseEntree === reponseBonne)
            return true;
        else
            return false;
    }

    getScoreJoueur(){
        return this.scoreJoueur;
    }

}

export default GestionJeu;