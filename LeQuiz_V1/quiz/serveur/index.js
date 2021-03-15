const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');

const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');

const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);
var tableauScores= [];
const PORT = process.env.PORT || 5000;
let index ;

// (() => {
//   setInterval(() => {
//     index = getRandomInt(29);
//     //console.log(index);
//   }, 1000);
// })()

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

app.use(cors());
app.use(router);

io.on('connect', (socket) => {
//console.log(socket.id);
  socket.on('join', ({ name, room }, callback) => {
    console.log(name, room);
    const { error, user } = addUser({ id: socket.id, name, room });

    if(error) return callback(error);

    socket.join(user.room);

    socket.emit('message', { user: 'admin', text: `${user.name}, bienvenue dans le salon ${user.room}.`});
    socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} a rejoint le chat!` });

    io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });

    callback();
  });

  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit('message', { user: user.name, text: message });

    callback();
  });
  
  socket.on('addScore', (message) => {
    //console.log(socket.id);
    const user = getUser(socket.id);
    //console.log(user);
    //tableauScores.map(function(e) { return e.pseudo; }).indexOf(user.name);
    if(tableauScores.map(function(e) { return e.pseudo; }).indexOf(user.name) === -1){
      console.log("if tableauScores");
      tableauScores.push({"pseudo" : user.name,score : 0});
      console.log(tableauScores);
    }
    tableauScores[tableauScores.map(function(e) { return e.pseudo; }).indexOf(user.name)].score += parseInt(message);
    //console.log(tableauScores);
    //io.to(user.room).emit('changementPanneauScores', { user: user.name, tableauScores: tableauScores });
    socket.broadcast.emit('changementPanneauScores', { user: user.name, tableauScores: tableauScores });
    //callback();
  });

  socket.on('start', () => {
    tableauScores = [];
      setInterval(() => {
        index = getRandomInt(29);
        socket.broadcast.emit('startGame', index);
      }, 8000);
  });

  socket.on('disconnect', () => {
    const user = removeUser(socket.id);

    if(user) {
      io.to(user.room).emit('message', { user: 'Admin', text: `${user.name} has left.` });
      io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room)});
    }
  })
});

server.listen(PORT, () => console.log(`Serveur démarré.`));