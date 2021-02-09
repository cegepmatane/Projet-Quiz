let instance = null;

class GestionJeu{

    constructor(){
        if (!instance) {
            instance = this;
        }
        this.scoreJoueur = 0;

        return instance;
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
    
    test(msg){
        console.log(msg);
    }

}

export default GestionJeu;