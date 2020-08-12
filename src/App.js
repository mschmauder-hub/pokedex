import React from "react";
import "./App.css";
import List from "./components/List";
import ListItemIcon from "./components/ListItemIcon";
import ListItemText from "./components/ListItemText";
import ListItem from "./components/ListItem";
import bulbasaur from "./assets/bulbasaur.svg";

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <span>Pokedex </span>
        <input className="app__searchBar" placeholder="input" />
      </header>

      <main className="app__pokeList colorful-border">
        <List>
          <ListItem href="#">
            <ListItemIcon imgSrc={bulbasaur} altText="bulbasaur" />
            <ListItemText primary="Bulbasaur" secondary="#001" />
          </ListItem>
          <ListItem href="#">
            <ListItemIcon imgSrc={bulbasaur} altText="bulbasaur" />
            <ListItemText primary="Bulbasaur" secondary="#001" />
          </ListItem>
          <ListItem href="#">
            <ListItemIcon imgSrc={bulbasaur} altText="bulbasaur" />
            <ListItemText primary="Bulbasaur" secondary="#001" />
          </ListItem>
          <ListItem href="#">
            <ListItemIcon imgSrc={bulbasaur} altText="bulbasaur" />
            <ListItemText primary="Bulbasaur" secondary="#001" />
          </ListItem>
          <ListItem href="#">
            <ListItemIcon imgSrc={bulbasaur} altText="bulbasaur" />
            <ListItemText primary="Bulbasaur" secondary="#001" />
          </ListItem>
          <ListItem href="#">
            <ListItemIcon imgSrc={bulbasaur} altText="bulbasaur" />
            <ListItemText primary="Bulbasaur" secondary="#001" />
          </ListItem>
        </List>
      </main>

      <footer>Footer</footer>
    </div>
  );
}

export default App;
