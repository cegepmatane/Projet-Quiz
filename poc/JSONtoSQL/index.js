//Faire cette commande au niveau de la table que l'on veut remplir GRANT USAGE, SELECT ON SEQUENCE questionnaire_star_wars_id_seq to restapi;
const config = require('./quizz_harry_potter.json') //changer le chemin du JSON pour celui que l'on veut utiliser

const fs = require('fs')
const Pool = require('pg').Pool
const pool = new Pool({
    user: 'restapi',
    host: 'localhost',
    database: 'lequizdesquiz',
    password: 'motdepasseREST',
    port: 5432,
})
fs.readFile('./quizz_harry_potter.json', 'utf8', (err, jsonString) => { //changer le chemin du JSON pour celui que l'on veut utiliser
    if (err) {
        console.log("Erreur pour lire le fichier sur le disque : ", err)
        return
    }
    try {
        const quizzDebutant = JSON.parse(jsonString).quizz.fr.débutant
        const quizzConfirme = JSON.parse(jsonString).quizz.fr.confirmé
        const quizzExpert = JSON.parse(jsonString).quizz.fr.expert

        for (var question of quizzDebutant){
            pool.query("INSERT INTO questionnaire_harry_potter (question, proposition1, proposition2, proposition3, proposition4, reponse) " + //changer le nom de la table 
                "VALUES ($1, $2, $3, $4, $5, $6)",[question.question, question.propositions[0], question.propositions[1], question.propositions[2], question.propositions[3], question.réponse],

                (error, results) => {
                if (error) {
                    throw error
                }
                console.log(question.question+question.propositions[0]+question.propositions[1]+question.propositions[2]+question.propositions[3]+question.réponse);
            })
        }
        for (var question of quizzConfirme){
            pool.query("INSERT INTO questionnaire_harry_potter (question, proposition1, proposition2, proposition3, proposition4, reponse) " + //changer le nom de la table 
                "VALUES ($1, $2, $3, $4, $5, $6)",[question.question, question.propositions[0], question.propositions[1], question.propositions[2], question.propositions[3], question.réponse],

                (error, results) => {
                if (error) {
                    throw error
                }
                console.log(question.question+question.propositions[0]+question.propositions[1]+question.propositions[2]+question.propositions[3]+question.réponse);
            })
        }
        for (var question of quizzExpert){
            pool.query("INSERT INTO questionnaire_harry_potter (question, proposition1, proposition2, proposition3, proposition4, reponse) " + //changer le nom de la table 
                "VALUES ($1, $2, $3, $4, $5, $6)",[question.question, question.propositions[0], question.propositions[1], question.propositions[2], question.propositions[3], question.réponse],

                (error, results) => {
                if (error) {
                    throw error
                }
                console.log(question.question+question.propositions[0]+question.propositions[1]+question.propositions[2]+question.propositions[3]+question.réponse);
            })
        }
    } catch(err) {
        console.log('Error parsing JSON string:', err)
    }
})