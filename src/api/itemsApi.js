export async function itemsApi() {
  const response = await fetch("https://pokeapi.co/api/v2/item/");
  if (!response.ok) {
    throw new Error(response);
  }
  const data = await response.json();

  const items = data.results.map((item) => ({ name: item.name }));

  return items;
}
