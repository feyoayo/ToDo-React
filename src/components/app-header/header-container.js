import React from "react";

export default class HeaderContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };
    this.onAddTitle = this.onAddTitle.bind(this);
    this.onAddBody = this.onAddBody.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onAddTitle({ target }) {
    this.setState({
      title: target.value,
    });
  }
  onAddBody({ target }) {
    this.setState({
      body: target.value,
    });
  }
  onSubmit(e) {
    e.preventDefault();
    const title = this.state.title;
    const body = this.state.body;
    this.props.onAdd(title, body);
  }
  render() {
    return (
      <form name="addTask" onSubmit={this.onSubmit}>
        <input
          type="text"
          name="title"
          className="form-control"
          placeholder="Task title"
          onChange={this.onAddTitle}
        />
        <input
          type="text"
          name="body"
          id="body"
          className="form-control mt-3"
          placeholder="Task body"
          onChange={this.onAddBody}
        />
        <button type="submit" className="btn btn-dark mt-4">
          Add task
        </button>
      </form>
    );
  }
}
