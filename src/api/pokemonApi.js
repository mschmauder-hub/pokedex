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
    link: `#${pokemon.name.toLowerCase()}`,
  }));

  const uniquePokemons = pokemons.filter(
    (pokemon, index) =>
      pokemons.findIndex((other) => other.id === pokemon.id) === index
  );

  return uniquePokemons;
}
