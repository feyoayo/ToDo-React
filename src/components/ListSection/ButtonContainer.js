import React from "react";
import "./ListSection.css";

const ButtonContainer = (props) => {
  return (
    <div className="container button-container d-flex">
      <button
        id="allTasks"
        className="btn btn-dark"
        onClick={() => props.showAll()}
      >
        All Tasks
      </button>
      <button
        id="notCompleted"
        type="button"
        className="btn notCompleted btn-dark"
        onClick={() => props.showUncomplete()}
      >
        Not Completed
      </button>
      <button
        id="deleteAll"
        type="button"
        className="btn btn-danger mr-0"
        onClick={() => props.onDeleteAll()}
      >
        Delete All
      </button>
    </div>
  );
};

export default ButtonContainer;
