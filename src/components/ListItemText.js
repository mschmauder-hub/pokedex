import React from "react";
import "./listItemText.css";

const ListItemText = ({ primary, secondary }) => {
  return (
    <div className="listItem__text">
      <span className="listItem__text-primary">{primary}</span>
      <span className="listItem__text-secondary">{secondary}</span>
    </div>
  );
};

export default ListItemText;
