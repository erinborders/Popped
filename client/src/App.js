import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home.js'
import LandingPage from './components/LandingPage.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
            <Switch>
              <Route exact path="/" component={LandingPage}/>
              <Route path="/events" component={Home} />
              <Route render={() => <div>Not Found</div>} />
            </Switch>
      </Router>
    </div>
  );
}

export default App;
