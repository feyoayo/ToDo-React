import React from "react";
import AppHeader from "../app-header/app-header";
import ListSection from "../tasks-list-section/task-list-section";
import "./app.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {
          _id: "5d2ca9e2e03d40b326596aa7",
          completed: true,
          body:
            "Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n",
          title: "Eu ea incididunt sunt consectetur fugiat non.",
        },
        {
          _id: "5d2ca9e29c8a94095c1288e0",
          completed: false,
          body:
            "Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n",
          title:
            "Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.",
        },
        {
          _id: "5d2ca9e2e03d40b3232496aa7",
          completed: true,
          body:
            "Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n",
          title: "Eu ea incididunt sunt consectetur fugiat non.",
        },
        {
          _id: "5d2ca9e29c8a94095564788e0",
          completed: false,
          body:
            "Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n",
          title:
            "Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.",
        },
      ],
    };
    this.myId = `task-${Math.random()}`;
    this.addItem = this.addItem.bind(this);
    this.onToggleCompleted = this.onToggleCompleted.bind(this);
  }

  addItem(title, body) {
    const newItem = {
      _id: this.myId,
      completed: false,
      body,
      title,
    };
    this.setState(({ tasks }) => {
      const afterAddingArr = [newItem, ...tasks];
      return {
        tasks: afterAddingArr,
      };
    });
  }
  onToggleCompleted(id) {
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
  }

  render() {
    const { tasks } = this.state;
    return (
      <div className="main-container mt-5">
        <AppHeader onAdd={this.addItem} />
        <ListSection tasks={tasks} onToggleCompleted={this.onToggleCompleted} />
      </div>
    );
  }
}
