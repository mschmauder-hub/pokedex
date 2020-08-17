import React from "react";

import "./listItem.css";
import { Link } from "react-router-dom";

const ListItem = ({ href, children }) => {
  return (
    <Link to={href} className="listItem">
      {children}
    </Link>
  );
};

export default ListItem;
