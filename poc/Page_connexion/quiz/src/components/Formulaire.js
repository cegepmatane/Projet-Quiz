import '../pageConnexion.css';
import React from "react";
import { utilisateursData } from "./utilisateurs";

class Formulaire extends React.Component {
    recupUser;
    constructor(props) {
        super(props);
        this.state = {
            nomUtilisateur: '',
            motDePasse: '',
            incorrectLabel: ''
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
        }
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="page-connexion-formulaire">
                <label>
                    Nom d'utilisateur:
                    <input
                        type="text"
                        name="nomUtilisateur"
                        value={this.state.nomUtilisateur}
                        onChange={this.handleChange}
                        className="page-connexion-formulaire-aremplir"
                    />
                </label><br/>
                <label>
                    Mot de passe :
                    <input
                        name="motDePasse"
                        value={this.state.motDePasse}
                        onChange={this.handleChange}
                        type = "password"
                        className="page-connexion-formulaire-aremplir"
                    />
                </label><br/>
                <p>{this.state.incorrectLabel}</p>
                <input type="submit" value="Jouer !" className="page-connexion-formulaire-bouton"/>
            </form>
        );
    }
}
export default Formulaire