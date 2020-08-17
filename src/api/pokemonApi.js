export async function fetchPokemons() {
  const response = await fetch("https://unpkg.com/pokemons/pokemons.json");
  if (!response.ok) {
    throw new Error(response);
  }

  const data = await response.json();

  const pokemons = data.results.map((pokemon) => ({
    name: pokemon.name,
    id: pokemon.national_number,
    imgSrc: pokemon.sprites.large,
    link: pokemon.name,
  }));

  const uniquePokemons = pokemons.filter(
    (pokemon, index) =>
      pokemons.findIndex((other) => other.id === pokemon.id) === index
  );

  return uniquePokemons;
}
export async function fetchPokemon(pokemonName) {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  );
  if (!response.ok) {
    throw new Error(response);
  }

  const data = await response.json();
  const pokemon = {
    name: data.name,
    id: data.id,
    imgSrc: data.sprites.front_default,
  };

  return pokemon;
}
