import React from "react";
import { FaBook } from "react-icons/fa";

const InputValue = ({
  item,
  handleOnChange,
  handleSubmit,
  editItem,
  handleCancel,
  error,
}) => {
  return (
    <React.Fragment>
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <FaBook />
              </div>
            </div>
            <input
              type="text"
              placeholder="enter the item name"
              className="form-control text-capitalize"
              value={item}
              onChange={handleOnChange}
            />
          </div>
          <div className="input-group-prepend">
            <button
              type="submit"
              className={
                editItem
                  ? "btn btn-block btn-success text-uppercase mt-3"
                  : "btn btn-block btn-primary text-uppercase mt-3"
              }
            >
              {editItem ? "edit item" : "add item"}
            </button>
            {editItem ? (
              <button
                className="btn btn-block btn-info text-uppercase mt-3"
                type="button"
                onClick={handleCancel}
              >
                Cancel
              </button>
            ) : null}
          </div>
          {error && (
            <p className="text-danger error">Please enter a valid value</p>
          )}
        </form>
      </div>
    </React.Fragment>
  );
};

export default InputValue;
