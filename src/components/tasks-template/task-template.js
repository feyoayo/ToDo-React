import React from "react";
import "./tasks-template.css";

export default class TaskTemplate extends React.Component {
  render() {
    const { title, body, completed, onCompleteHandler, deleteHandler } = this.props;
    let classNames =
      "d-flex align-items-center justify-content-between flex-wrap text-center list-container";

    if (completed) {
      classNames += " complete-class";
    }
    return (
      <div className={classNames}>
        <span className="todo-title">{title}</span>
        <p className="mt-2 w-100">{body}</p>
        <button className="btn btn-danger mr-0 delete-btn" onClick={deleteHandler}>Delete</button>
        <button className="btn btn-dark ml-0" onClick={onCompleteHandler}>
          Complete
        </button>
      </div>
    );
  }
}
