import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { fetchPokemon } from "../api/pokemonApi";
import { LoadingScreen } from "../components/LoadingScreen";

function Pokemon() {
  const [pokemon, setPokemon] = useState(null);
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { name } = useParams();
  let history = useHistory();

  useEffect(() => {
    async function getPokemon() {
      try {
        setIsLoading(true);
        const fetchedPokemon = await fetchPokemon(name);
        setPokemon(fetchedPokemon);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setError(error);
      }
    }

    getPokemon();
  }, [name]);

  function handleClick() {
    history.goBack();
  }

  function handleGoToItems() {
    history.push("/items");
  }

  if (error) {
    return <div>Error!</div>;
  }

  if (isloading || !pokemon) {
    return <LoadingScreen />;
  }

  return (
    <div>
      <button onClick={handleClick}>Back</button>
      <button onClick={handleGoToItems}>Items</button>
      <div>{pokemon.name}</div>
      <img src={pokemon.imgSrc} alt={pokemon.name} />
      <div>{pokemon.id}</div>
    </div>
  );
}

export default Pokemon;
