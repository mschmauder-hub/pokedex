import React, { useState, useEffect } from "react";
import List from "../components/List";
import ListItemIcon from "../components/ListItemIcon";
import ListItemText from "../components/ListItemText";
import ListItem from "../components/ListItem";
import { fetchPokemons } from "../api/pokemonApi";
import { LoadingScreen } from "../components/LoadingScreen";

function Pokemons() {
  const [pokemons, setPokemons] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function setPokemon() {
      setLoading(true);

      const allPokemons = await fetchPokemons();
      setPokemons(allPokemons);
      setLoading(false);
    }
    setPokemon();
  }, []);

  return (
    <>
      <header className="app__header">
        <span>Pokedex</span>
        <input className="app__searchBar" placeholder="input" />
      </header>
      <main className="app__pokeList colorful-border">
        <List>
          {loading && <LoadingScreen />}

          {pokemons?.map((pokemon) => (
            <ListItem key={pokemon.id} href={pokemon.link}>
              <ListItemIcon imgSrc={pokemon.imgSrc} altText={pokemon.name} />
              <ListItemText primary={pokemon.name} secondary={pokemon.id} />
            </ListItem>
          ))}
        </List>
        )
      </main>
    </>
  );
}

export default Pokemons;
