import React from "react";
import ListItemIcon from "./ListItemIcon";
import ListItemText from "./listItemText";
import "./listItem.css";

const ListItem = (props) => {
  return (
    <a className="listItem">
      <ListItemIcon />
      <ListItemText children={props.children} />
    </a>
  );
};

export default ListItem;
