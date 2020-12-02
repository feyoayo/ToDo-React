import React from "react";
import TaskTemplate from "../tasks-template/task-template";
import ButtonContainer from "../tasks-template/button-container";

const ListSection = ({ tasks, onCompleteHandler, onDeleteHandler}) => {
  const elements = tasks.map((item) => {
    const { _id, title, body, completed } = item;

    return (
      <li
        key={_id}
        className="list-group-item d-flex align-items-center justify-content-between flex-wrap mt-2"
      >
        <TaskTemplate
          title={title}
          body={body}
          completed={completed}
          onCompleteHandler={() => onCompleteHandler(_id)}
          deleteHandler={() => onDeleteHandler(_id)}
        />
      </li>
    );
  });
  return (
    <div className="tasks-list-section mt-5">
      <div className="container">
        <ButtonContainer />
        <ul className="list-group mt-5"> {elements}</ul>
      </div>
    </div>
  );
};

export default ListSection;
