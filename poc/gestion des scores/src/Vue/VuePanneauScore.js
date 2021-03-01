import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";
import Message from "./Components/Messages/Message/Message";

const ENDPOINT = 'http://localhost:5000';

let socket;

const VuePanneauScore = ({ }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [affichageScores, setAffichageScores] = useState([]);

    useEffect(() => {
        const { name, room } = queryString.parse(window.location.search);

        socket = io(ENDPOINT);

        setRoom(room);
        setName(name)

        socket.emit('join', { name, room }, (error) => {
            if(error) {
                alert(error);
            }
        });
    }, [ENDPOINT, window.location.search]);

    useEffect(() => {

        socket.on("changementPanneauScores", (data) => {
            console.log(data);
            console.log(data.tableauScores);
            setAffichageScores(data.tableauScores);
        });
    }, []);

    const sendMessage = (event) => {
        event.preventDefault();
        setMessage("1");
        if(message) {
            socket.emit('addScore', message, () => setMessage(''));
        }
    }

    return (
        <div className="panneau-score">
            <div className="titre-score-contenant">
                <h1 className="titre-score">Score</h1>
            </div>
            <ul className="liste-scores">{affichageScores.map((obj, i) => <li key={i} className="score"><span className="utilisateur">{obj.pseudo}</span><span>{obj.score}</span></li>)}</ul>
            <button  className="sendButton" onClick={e => sendMessage(e)}>EnvoyerScore</button>
        </div>
    );
}

export default VuePanneauScore;
