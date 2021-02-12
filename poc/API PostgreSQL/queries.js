const Pool = require('pg').Pool
const pool = new Pool({
  user: 'restapi',
  host: 'localhost',
  database: 'lequizdesquiz',
  password: 'motdepasseREST',
  port: 5432,
})

// récupérer tout les utilisateurs (pour admin uniquement)
const getUsers = (request, response) => {
  pool.query('SELECT * FROM utilisateurs ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

// récupérer un utilisateur par son pseudo
const getUserByPseudo = (request, response) => {
  const pseudo = request.params.pseudo
  pool.query('SELECT * FROM utilisateurs WHERE pseudo = $1', [pseudo], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

// ajout d'un utilisateur à la bdd
const createUser = (request, response) => {
  const { pseudo, motdepasse } = request.body

  pool.query(
    'INSERT INTO utilisateurs (pseudo, motdepasse) VALUES ($1, $2)',
    [pseudo, motdepasse], 
    (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Utilisateur ajouté avec l'id: ${results.insertId}`)
  })
}

// Fonction update utilisateur
const updateUser = (request, response) => {
  const id = parseInt(request.params.id)
  const { pseudo, motdepasse, meilleurscore } = request.body

  pool.query(
    'UPDATE utilisateurs SET pseudo = $1, motdepasse = $2, meilleurscore = $3 WHERE user_id = $4',
    [pseudo, motdepasse, meilleurscore, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Utilisateur modifié avec l'id: ${id}`)
    }
  )
}

// Fonction update du score
const updateScore = (request, response) => {
  const pseudo = request.params.pseudo
  const meilleurscore = request.body

  pool.query(
    'UPDATE utilisateurs SET meilleurscore = $1 WHERE pseudo = $2',
    [meilleurscore, pseudo],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Utilisateur modifié avec l'id: ${id}`)
    }
  )
}
// Fonction delete
const deleteUser = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM utilisateurs WHERE user_id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User deleted with ID: ${id}`)
  })
}
 // Récupérer un questionnaire par rapport à son nom
const getQuestionnairebyNom = (request, response) => {
  const nomQuestionnaire = request.params.nomQuestionnaire
  const requettePreparee = "SELECT * FROM "+nomQuestionnaire+ " ORDER BY id ASC";
  pool.query(requettePreparee, (error, results) => {
    if (error) {
      if(error.message.indexOf("does not exist") !== -1){
        response.status(200).json("erreur : table non existante")
      }
      else{
        throw error
      }
      
    }
    else{
      response.status(200).json(results.rows)
    }
  })

}
module.exports = {
  getUsers,
  getUserByPseudo,
  createUser,
  updateUser,
  updateScore,
  deleteUser,
  getQuestionnairebyNom,
}


