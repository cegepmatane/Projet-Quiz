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
                console.log("message : "+msg);
				socket.emit("message", msg);
                
            });

        });

        const port = 9000;
        io.listen(port);
        console.log('listening on port ', port);
        








/*server.listen(5000, () => {
    console.log("Ecoute sur le port 5000...");

}) */
