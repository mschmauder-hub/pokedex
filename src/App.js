import React from "react";
import "./App.css";
import List from "./components/List";
import ListItemIcon from "./components/ListItemIcon";
import ListItemText from "./components/ListItemText";
import ListItem from "./components/ListItem";

const bulbasaur = {
  name: "Bulbasaur",
  imgSrc: "https://img.pokemondb.net/artwork/large/bulbasaur.jpg",
  id: "001",
  link: "#bulbasaur",
};
const ivysaur = {
  name: "Ivysaur",
  imgSrc: "https://img.pokemondb.net/artwork/large/ivysaur.jpg",
  id: "002",
  link: "#ivysaur",
};
const pokemons = [bulbasaur, ivysaur];

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <span>Pokedex </span>
        <input className="app__searchBar" placeholder="input" />
      </header>
      <main className="app__pokeList colorful-border">
        <List>
          {pokemons.map((pokemon) => (
            <ListItem key={pokemon.id} href={pokemon.link}>
              <ListItemIcon imgSrc={pokemon.imgSrc} altText={pokemon.name} />
              <ListItemText primary={pokemon.name} secondary={pokemon.id} />
            </ListItem>
          ))}
        </List>
      </main>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
