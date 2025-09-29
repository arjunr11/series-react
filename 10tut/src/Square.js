import React from "react";

const Square = ({ colorValue }) => {
  return (
    <section style={{ backgroundColor: colorValue }} className="square">
      <p>{colorValue ? colorValue : "Empty Value"}</p>
    </section>
  );
};

Square.defaultProps = {
  colorValue: "Empty Color Value",
};


export default Square;
