import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";

const ENDPOINT = 'http://localhost:5000';

let socket;
socket = io(ENDPOINT);

const VuePanneauScore = ({ }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [affichageScores, setAffichageScores] = useState([]);

    useEffect(() => {
        socket.on("changementPanneauScores", (data) => {
            console.log(data.tableauScores);
            setAffichageScores(data.tableauScores);
        });
    });

    return (
        <div className="panneau-score">
            <div className="titre-score-contenant">
                <h1 className="titre-score">Score</h1>
            </div>
            <ul className="liste-scores">{affichageScores.map((obj, i) => <li key={i} className="score"><span className="utilisateur">{obj.pseudo} : </span><span>{obj.score}</span></li>)}</ul>
        </div>
    );
}
export default VuePanneauScore;
