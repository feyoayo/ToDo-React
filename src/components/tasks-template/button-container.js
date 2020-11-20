import React from "react";

const ButtonContainer = () => {
  return (
    <div className="container d-flex justify-content-between">
      <button id="allTasks" className="btn btn-dark">
        All Tasks
      </button>
      <button id="notCompleted" type="button" className="btn btn-dark">
        Not Completed
      </button>
      <button id="deleteAll" type="button" className="btn btn-danger mr-0">
        Delete All
      </button>
    </div>
  );
};

export default ButtonContainer;
