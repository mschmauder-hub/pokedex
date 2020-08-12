import React from "react";
import "./App.css";
import List from "./components/List";

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <span>Pokedex </span>
        <input className="app__searchBar" placeholder="input" />
      </header>

      <main className="app__pokeList">
        <List children="Text" />
      </main>

      <footer>Footer</footer>
    </div>
  );
}

export default App;
