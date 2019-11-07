import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home";
import { Switch, Route } from "react-router-dom";
import ListBeers from "./components/ListBeers";
import SingleBeer from "./components/SingleBeer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component={ListBeers} />
          <Route exact path="/:_id" component={SingleBeer} />
        </Switch>
      </div>
    );
  }
}

export default App;
