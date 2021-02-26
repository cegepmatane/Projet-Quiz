import '../Decoration/pageConnexion.css';
import logo from '../Image/logo_quiz.jpg';
function TopPage(){
    return (
        <div>
            <header className="page-connexion-head">
                <img src={logo} className="page-connexion-logo" alt="logo"/>
                <label className="page-connexion-titre">Le Quiz des Quiz !</label>
            </header>
        </div>
    )
}
export default TopPage