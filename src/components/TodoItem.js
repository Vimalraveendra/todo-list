import React from "react";
import { ReactComponent as Delete } from "../assets/delete.svg";
import { ReactComponent as Edit } from "../assets/edit.svg";

const TodoItem = ({ item, deleteItem, id, handleEditItem, index }) => {
  return (
    <React.Fragment>
      {item.length > 0 && (
        <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
          <span>{item}</span>
          <div className="todo-icon">
            <span
              className="mx-2 text-success"
              onClick={() => handleEditItem(id, index)}
            >
              <Edit />
            </span>
            <span className="text-danger mx-2" onClick={() => deleteItem(id)}>
              <Delete />
            </span>
          </div>
        </li>
      )}
    </React.Fragment>
  );
};

export default TodoItem;
