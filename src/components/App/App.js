import React from "react";
import AppHeader from "../AppHeader/AppHeader";
import ListSection from "../ListSection/ListSection";
import "./App.css";
import tasks from "./tasksStore.js";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: tasks,
      completed: [],
      complete: false,
    };
    this.myId = `task-${Math.random()}`;
  }

  showAll = () => {
    this.setState((prevState) => {
      console.log(this.state.complete);
      return {
        complete: false,
      };
    });
  };

  showUncomplete = () => {
    this.setState(({ tasks }) => {
      const newArr = tasks.filter((item) => item.completed);
      return {
        completed: newArr,
        complete: true,
      };
    });
  };

  addItem = (title, body) => {
    const newItem = {
      _id: this.myId,
      completed: false,
      body,
      title,
    };
    this.setState(({ tasks }) => {
      //Создаем новый массив, в который сначала передаем новый объект, а затем
      // деструктурируем остальные объекты, которые были в нашем массиве
      // объектов до этого
      const afterAddingArr = [newItem, ...tasks];
      return {
        tasks: afterAddingArr,
      };
    });
  };
  onDeleteAll = () => {
    this.setState(({ tasks }) => {
      return {
        tasks: [],
        completed: [],
      };
    });
  };

  onDelete = (id) => {
    this.setState(({ tasks }) => {
      const index = tasks.findIndex((elem) => {
        return elem._id === id;
      });
      const newArr = [...tasks.slice(0, index), ...tasks.slice(index + 1)];
      return {
        tasks: newArr,
      };
    });
  };

  onToggleCompleted = (id) => {
    this.setState(({ tasks }) => {
      const index = tasks.findIndex((elem) => {
        return elem._id === id;
      });
      const oldItem = tasks[index];
      const newItem = { ...oldItem, completed: !oldItem.completed };

      const newArr = [
        ...tasks.slice(0, index),
        newItem,
        ...tasks.slice(index + 1),
      ];
      return {
        tasks: newArr,
      };
    });
  };

  render() {
    const { tasks, complete, completed } = this.state;
    const Empty = () => {
      <h1>Пока пусто, добавьте чего нибудь</h1>;
    };
    return (
      <div className="main-container mt-5">
        <AppHeader onAdd={this.addItem} />
        <ListSection
          tasks={complete ? completed : tasks}
          onDelete={this.onDelete}
          onToggleCompleted={this.onToggleCompleted}
          onDeleteAll={this.onDeleteAll}
          showUncomplete={this.showUncomplete}
          showAll={this.showAll}
        />
      </div>
    );
  }
}

//TODO  общем, постараться реализовать "подъем состояния" или историю
// массивов, типо когда мы добавляем или удаляем, чтобы этот объект
// добавлялся в другой массив и мы могли видеть историю массива, что мы
// добавляли через push, решить куда этот массив будет записываться (state
// или просто функция какая-то)
