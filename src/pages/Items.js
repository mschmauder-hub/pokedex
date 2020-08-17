import React, { useEffect, useState } from "react";
import List from "../components/List";
import ListItemIcon from "../components/ListItemIcon";
import ListItem from "../components/ListItem";
import ListItemText from "../components/ListItemText";
import { itemsApi } from "../api/itemsApi";

function Items() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchItems() {
      const newItems = await itemsApi();
      setItems(newItems);
    }
    fetchItems();
  }, []);

  return (
    <>
      <header className="app__header">
        <span>Pokedex</span>
        <input className="app__searchBar" placeholder="input" />
      </header>
      <main className="app__pokeList colorful-border">
        {items.map((item) => (
          <List>
            <ListItem>
              <ListItemIcon />
              <ListItemText primary={item.name} />
            </ListItem>
          </List>
        ))}
      </main>
    </>
  );
}

export default Items;
