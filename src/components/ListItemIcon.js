import React from "react";

function ListItemIcon({ imgSrc, altText }) {
  return <img className="listItem__image" src={imgSrc} alt={altText}></img>;
}

export default ListItemIcon;
