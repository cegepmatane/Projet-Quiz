const express = require('express')
const bodyParser = require('body-parser')
const cors = require("cors")
const app = express()
const port = 9647

app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.get('/', (request, response) => {
  response.json({ info: 'API Node.js, Express, et Postgres' })
})

const db = require('./queries')
//app.get('/getUsers', db.getUsers) //commande pour lister tout les utilisateurs, à décommenter uniquement en mode débug!
app.get('/getUser/:pseudo', db.getUserByPseudo)
app.post('/user', db.createUser)
app.put('/updateUser/:id', db.updateUser)
app.put('/udateScore/:pseudo', db.updateScore)
//app.delete('/user/:id', db.deleteUser) //commande pour supprimer un utilisateur, a mettre en place plus tard si l'on fait un mode admin
app.get('/getQuestionnaire/:nomQuestionnaire', db.getQuestionnairebyNom)
app.listen(port, () => {
  console.log(`Application fonctionnelle sur le port ${port}.`)
})

