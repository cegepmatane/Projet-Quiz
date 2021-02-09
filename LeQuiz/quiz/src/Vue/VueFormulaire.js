import '../Decoration/pageConnexion.css';
import React from "react";
import { utilisateursData } from "../data/UtilisateursData.js";
import App from '../App';
import VueAccueil from './VueAccueil';

class VueFormulaire extends React.Component {
    recupUser;
    constructor(props) {
        super(props);
        this.state = {
            nomUtilisateur: '',
            motDePasse: '',
            incorrectLabel: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    handleSubmit(event) {
        //alert('Le nom a été soumis : ' + this.state.nomUtilisateur + '\r et le mot de passe : ' + this.state.motDePasse );
        //console.log(this.state.nomUtilisateur === utilisateursData[0].username && this.state.motDePasse === utilisateursData[0].password );
        console.log("Utilisateur :" + this.state.nomUtilisateur + "motdepasse : " + this.state.motDePasse);

       // Code avec fichier JSON
        this.recupUser = utilisateursData.filter((item) => {
            return item.username === this.state.nomUtilisateur;
        });
        
        if(this.recupUser.length === 0 || this.state.motDePasse !== this.recupUser[0].password){
            console.log("utilisateur non existant ou mot de passe incorrect");
            this.setState({
                incorrectLabel: "utilisateur non existant ou mot de passe incorrect"
            });
        }
        else{
            console.log("Mot de passe correct !");
            window.location.href += "accueil";
        }

        //Code avec REST Api
        
        /*(async () => {
            const res = await fetch('http://149.56.45.139:9647/getUser/'+this.state.nomUtilisateur);
            const utilisateurData = await res.json()
            if((typeof utilisateurData[0]) === "undefined" || utilisateurData[0].motdepasse !== this.state.motDePasse){
                this.setState({
                    incorrectLabel: "utilisateur non existant ou mot de passe incorrect"
                });
            }
            else{
                console.log("Utilisateur inscrit !")
                // TODO : Faire le code avec React Router pour changement de pages
            }
        })()*/
 
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="page-connexion-formulaire">
                <label>
                    Nom d'utilisateur:
                    
                </label>
                <input
                    type="text"
                    name="nomUtilisateur"
                    value={this.state.nomUtilisateur}
                    onChange={this.handleChange}
                    className="page-connexion-formulaire-aremplir"
                    required={true}
                />
                <label>
                    Mot de passe :
                    
                </label>
                <input
                name="motDePasse"
                value={this.state.motDePasse}
                onChange={this.handleChange}
                type = "password"
                className="page-connexion-formulaire-aremplir"
                required={true}
                />
                <p className="page-connexion-msgIncorrect">{this.state.incorrectLabel}</p>
                <input type="submit" value="Jouer !" className="page-connexion-formulaire-bouton"/>
            </form>
        );
    }
}
export default VueFormulaire