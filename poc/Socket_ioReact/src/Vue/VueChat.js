import React from 'react';
import '../Decoration/VueChat.css';
import openSocket from "socket.io-client";

const socket = openSocket('http://localhost:9000');
var testChangement = "";

function MessagesDuChat(props) {
    if(props.text){
        const texte = props.text;
        if(testChangement !== texte){
            console.log(texte)

            const newText = texte.split('utilisateur:');
            newText += newText.split('message:');
            console.log(newText);
            testChangement = texte;
        }

        return <div className="message">
            <span className="utilisateur">User 1 :</span>
            <p>{texte}</p>
            <hr></hr>
        </div>
        
    }
    else{
        return <div className="message">
            <span className="utilisateur">User 1 :</span>
            <p>Admin : Bienvenue</p>
            <hr></hr>
        </div>
    }
    
}

class VueChat extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            nomUtilisateur: '',
            messageAEnvoyer: '',
            messagesAffiches: ''
        };
        socket.on("message", (msg) =>{
            //console.log("message : "+msg);
            var construireMessage= this.state.messagesAffiches + msg;
            this.setState({
                messagesAffiches: construireMessage
            })
            MessagesDuChat(msg)
        });
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    
    handleChange(event) {
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    handleSubmit(event) {
        console.log("Utilisateur : " + this.state.nomUtilisateur + " message : " + this.state.messageAEnvoyer);
        
        socket.emit("message", "utilisateur:" + this.state.nomUtilisateur + " message: "+ this.state.messageAEnvoyer);
        this.setState({
            messageAEnvoyer: ''
        })
        
        event.preventDefault();
    }

    render(){
        return(
        <div className="contenue-vue-chat">
            <div className="titre-chat-contenant">
                <h1 className="titre-chat">Le Tchat</h1>
            </div>
            <div className="message-contenant">
                <MessagesDuChat text={this.state.messagesAffiches}/>
    
                
            </div>
            <form className="formulaire" onSubmit={this.handleSubmit}>
                <label>Pseudo</label>
                <input
                    type="text"
                    name="nomUtilisateur"
                    value={this.state.nomUtilisateur}
                    onChange={this.handleChange}
                    className="input"
                    required={true}
                    autoComplete="off"
                
                />
                <label>Message</label>
                <input
                    type="text"
                    name="messageAEnvoyer"
                    value={this.state.messageAEnvoyer}
                    onChange={this.handleChange}
                    className="input"
                    required={true}
                    autoComplete="off"
                />
                <input type="submit" value="Envoyer" className="bouton-envoi-message"/>
            </form>
        </div>
        );
    }
}
export default VueChat;