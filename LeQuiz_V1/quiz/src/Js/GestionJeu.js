import QuestionsServiceDAO from '../Accesseur/QuestionsServiceDAO';
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

    actionAfficherListeQuestion(){

    }

    verifierReponse(reponseEntree, reponseBonne){

        if(reponseEntree === reponseBonne){
            console.log("BONNE REPONSE");
            this.scoreJoueur++;
            console.log(this.getScoreJoueur());
        }else{
            console.log("TES NUL");
            console.log("La bonne reponse est : " + reponseBonne);
        }
    }

    getScoreJoueur(){
        return this.scoreJoueur;
    }

}

export default GestionJeu;