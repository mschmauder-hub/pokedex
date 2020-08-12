import React from "react";

const ListItemText = (props) => {
  return (
    <div className="text">
      <span className="">{props.children}</span>
      <span className="">{props.children}</span>
    </div>
  );
};

export default ListItemText;
