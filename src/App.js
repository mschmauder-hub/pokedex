import React from "react";
import "./App.css";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Pokemons from "./pages/Pokemons";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/pokemons">
            <Pokemons />
          </Route>
          <Route path="/items"></Route>
        </Switch>
        <footer>
          <Link to="/pokemons">Pokemons</Link>
          <Link to="/items">Items</Link>
        </footer>
      </div>
    </Router>
  );
}

export default App;
