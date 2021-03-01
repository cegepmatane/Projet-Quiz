import QuestionModele from '../Modele/QuestionModele';

class QuestionsServiceDAO{

    constructor(){
        this.listeQuestions = [];
        this.chargerListeQuestions();
    }

    chargerListeQuestions(){
        let ajax = new XMLHttpRequest()
        let url = 'http://lequizdesquiz.ddns.net:9647/getQuestionnaire/questionnaire_star_wars';
        ajax.open('GET', url, true);
        ajax.send('');
        ajax.onreadystatechange = () =>{
            if(ajax.readyState === 4){
                let questions = JSON.parse(ajax.response);
                questions.forEach(question => {
                    let questionModele = new QuestionModele(question.id, question.question, question.proposition1, question.proposition2, question.proposition3,
                        question.proposition4, question.reponse);

                    this.listeQuestions.push(questionModele);
                })
            }
        }
    }

    initialiserListeQuestions(questions){
        console.log(questions);
    }

    listerQuestions(){
        return this.listeQuestions;
    }

    listerQuestionParId(id){

    }

    listerQuestionSuivante(){

    }

}
export default QuestionsServiceDAO;