/*const express = require('express');
const path = require('path');
const app = express();
const https = require('https');
const fs = require('fs');

app.use(express.static(path.join(__dirname, 'build')));


app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(3000, function () {
    console.log('Serveur allumé sur le port 3000');
})

https.createServer({
        key: fs.readFileSync('./server.key'),
        cert: fs.readFileSync('./server.crt'),
        passphrase: 'motdepasseSSL#'
},
    app).listen(3000, function () {
    console.log('Serveur allumé sur le port 3000');
});*/




const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(3000);