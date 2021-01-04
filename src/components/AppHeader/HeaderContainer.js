import React from "react";

export default class HeaderContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };

  }
  onAddTitle = ({ target }) => {
    this.setState({
      title: target.value,
    });
  }
  onAddBody = ({ target }) =>{
    this.setState({
      body: target.value,
    });
  }
  onSubmit = (e) =>{
    e.preventDefault();
    const title = this.state.title;
    const body = this.state.body;
    const form = e.target
    this.props.onAdd(title, body);
    form.reset() //Нужна для того, чтобы
    // очистить нашу форму, после
    // сабмита(отправки данных). Работает
    // только на формах. Форму сначала надо
    // инициализировать
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
