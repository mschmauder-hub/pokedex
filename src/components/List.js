import React from "react";
import ListItem from "./ListItem";

function List(props) {
  return (
    <nav>
      <ListItem children={props.children} />
    </nav>
  );
}

export default List;
