import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const LineItem = ({ items, handleCheck, handleDelete }) => {
  return (
    <li className="item" >
      <input
        type="checkbox"
        onChange={() => handleCheck(items.id)}
        checked={items.checked}
      />
      <label
        style={items.checked ? { textDecoration: "line-through" } : null}
        onDoubleClick={() => handleCheck(items.id)}
      >
        {items.item}
      </label>
      <FaTrashAlt
        onClick={() => handleDelete(items.id)}
        role="button"
        tabIndex="0"
        aria-label={`Delete ${items.item}`}
      />
    </li>
  );
};

export default LineItem;
