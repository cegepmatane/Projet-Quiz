import React from 'react';
import '../Decoration/VueChat.css';

class VueChat extends React.Component{

    render(){
        return(
        <div className="contenue-vue-chat">
            <div className="titre-chat-contenant">
                <h1 className="titre-chat">Le Tchat</h1>
            </div>
            <div className="message-contenant">
                <div className="message">
                    <span className="utilisateur">User 1 :</span>
                    <p>Trop dur Zébi!!</p>
                    <hr></hr>
                </div>
                <div className="message">
                    <span className="utilisateur">User 2 :</span>
                    <p>J'avoue ma gueule</p>
                    <hr></hr>
                </div>
                <div className="message">
                    <span className="utilisateur">User 3 :</span>
                    <p>Salut :-)</p>
                    <hr></hr>
                </div>
                <div className="message">
                    <span className="utilisateur">User 1 :</span>
                    <p>YO</p>
                    <hr></hr>
                </div>
            </div>
            <form className="formulaire">
                <input type="text"></input>
                <button>Envoyer</button>
            </form>
        </div>
        );
    }
}
export default VueChat;