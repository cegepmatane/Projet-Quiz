import React from 'react';
import './Decoration/App.css';
import VueAccueil from './Vue/VueAccueil';
import { BrowserRouter as Router, Route, Redirect, Link, Switch } from "react-router-dom";

class App extends React.Component {
  
  test(utilisateur){
    /**/
  }

  render(){
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/accueil" component={VueAccueil} />
            <Redirect to="/"/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;