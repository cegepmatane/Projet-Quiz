//const app = require('express')();
//const server = require('http').createServer(app);
const io = require('socket.io')(); //(server)
//const gestion = require('../Js/GestionJeu.js');
var utilisateur = "";




        //import GestionJeu from '../Js/GestionJeu.js';
        io.on('connection', (socket) => {
            console.log('Un utilisateur s\'est connecté');

            socket.on('disconnect' , () => {
                console.log("Utilisateur déconnecté");
            });
            socket.on("message", (msg) =>{
                //io.emit("nomUtilisateur", msg);
                console.log("nom utilisateur : "+msg);
                utilisateur = msg;
                
            });
            socket.on("getNomUtilisateur", (msg) =>{
                //io.emit("nomUtilisateur", msg);
                console.log("nom utilisateur : "+msg);
                utilisateur = msg;
                io.emit("getNomUtilisateur", msg);

            });
        });

        const port = 8000;
        io.listen(port);
        console.log('listening on port ', port);
        








/*server.listen(5000, () => {
    console.log("Ecoute sur le port 5000...");

}) */
