import '../pageConnexion.css';
import React from "react";

class Formulaire extends React.Component {
    constructor(props) {
        super(props);
        this.state = {nomUtilisateur: '',motDePasse: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    handleSubmit(event) {
        // coder ici pour la vérification du mot de passe + changement de page
        alert('Le nom a été soumis : ' + this.state.nomUtilisateur + '\r et le mot de passe : ' + this.state.motDePasse );
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="page-connexion-formulaire">
                <label>
                    Nom :
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
                        type="text"
                        name="motDePasse"
                        value={this.state.motDePasse}
                        onChange={this.handleChange}
                        type = "password"
                        className="page-connexion-formulaire-aremplir"
                    />
                </label><br/>
                <input type="submit" value="Jouer !" className="page-connexion-formulaire-bouton"/>
            </form>
        );
    }
}
export default Formulaire