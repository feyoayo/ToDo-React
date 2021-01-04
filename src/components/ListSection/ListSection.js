import React from "react";
import ButtonContainer from "./ButtonContainer";
import "./ListSection.css";

const ListSection = ({
  tasks,
  onToggleCompleted,
  onDelete,
  onDeleteAll,
  showUncomplete,
  showAll,
}) => {
  const elements = tasks.map((item) => {
    let classNames =
      "list-group-item d-flex align-items-center justify-content-between flex-wrap list-container mt-2";
    if (item.completed) {
      classNames += " complete-class";
    }
    return (
      <li key={item._id} className={classNames}>
        <TasksTemplate
          item={item}
          onDelete={onDelete}
          onToggleCompleted={onToggleCompleted}
        />
      </li>
    );
  });

  return (
    <div className="tasks-list-section mt-5">
      <div className="container">
        <ButtonContainer
          onDeleteAll={onDeleteAll}
          showUncomplete={showUncomplete}
          showAll={showAll}
        />
        <ul className="list-group mt-5">{elements}</ul>
      </div>
    </div>
  );
};
export default ListSection;

const TasksTemplate = ({ item, onToggleCompleted, onDelete }) => {
  const { title, body } = item;

  return (
    <>
      <span className="todo-title">{title}</span>
      <p className="todo-body mt-2 w-100">{body}</p>
      <button
        className="btn btn-danger mr-0 delete-btn"
        onClick={() => onDelete(item._id)}
      >
        Delete
      </button>
      <button
        className="btn btn-dark ml-0"
        onClick={() => onToggleCompleted(item._id)}
      >
        {/*На этом уровне в обработчик события нужно передавать аргументы, если оно касается конкретного итема*/}
        Complete
      </button>
    </>
  );
};
