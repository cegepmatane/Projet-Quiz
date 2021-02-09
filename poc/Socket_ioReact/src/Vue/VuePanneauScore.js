import React from 'react';
import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');

class VuePanneauScore extends React.Component{
    constructor(props){
        super(props);
        socket.on("nomUtilisateur", (msg) =>{
            console.log("nom utilisateur : "+msg);
            this.setState({
                utilisateur: msg
            })
        });
    }
    state = {
        utilisateur: "user1"
    }
    
    render(){
        return(
            <div className="panneau-score">
            <div className="titre-score-contenant">
                <h1 className="titre-score">Score</h1>
            </div>
                <div className="score">
                    <span className="utilisateur">{this.state.utilisateur}</span>
                    <span>300</span>
                    <hr></hr>
                </div>
                <div className="score">
                    <span className="utilisateur">User 2 :</span>
                    <span>200</span>
                    <hr></hr>
                </div>
                <div className="score">
                    <span className="utilisateur">User 3 :</span>
                    <span>100</span>
                    <hr></hr>
                </div>
            </div>
        );
    }
}
export default VuePanneauScore;