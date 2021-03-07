import React from 'react';
// import QuestionModele from '../Modele/QuestionModele';

class QuestionsServiceDAO extends React.Component{
    
    state = {
        listeQuestions: null
    }

    async componentDidMount(){
        //console.log("call?");
        let url = "http://lequizdesquiz.tikenix.me:9647/getQuestionnaire/questionnaire_star_wars";
        const reponse = await fetch(url);
        const questions = await reponse.json();
        this.setState({ listeQuestions: questions } );
        console.log(this.state.listeQuestions[0].question)
    }

    // listerQuestions(){
    //     console.log(this.state.listeQuestions);
    //     return this.state.listeQuestions;
    // }

    // listerQuestionParId(id){

    // }

    // listerQuestionSuivante(){

    // }

    render(){
        return null;
    }

}
export default QuestionsServiceDAO;