import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import LeagueDetail from './Component/LeagueDetails/LeagueDetail';
import LeagueList from './LeagueList/LeagueList';
import React from "react";
import ExploreLeague from './Component/ExploreLeague/ExploreLeague';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (

    <Router>     
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/league-:idLeague-:name">
            <LeagueSingle />
          </Route>
        </Switch>
    </Router> 
  );
}
function Home() {
  return (
    <div className="App" align="center">
      <div className="cardView">
        <Header></Header> 
      </div>
      <div className="container">
        <div className="row">
        <LeagueDetail></LeagueDetail> 
        <div>
      </div>
    </div>
    </div>
    </div> 
  );
}
function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}
function LeagueSingle(idLeague,name) {
  return (
    <ExploreLeague></ExploreLeague> 
  );
}
export default App;
