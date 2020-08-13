import React from "react";

import "./listItem.css";

const ListItem = ({ href, children }) => {
  return (
    <a href={href} className="listItem">
      {children}
    </a>
  );
};

export default ListItem;
