// src/components/TaskList.js

import TaskItem from "./TaskItem";

class TaskList {
  constructor() {
    this.tasks = {};
  }

  addTask(todoId, task) {
    if (!this.tasks[todoId]) {
      this.tasks[todoId] = [];
    }
    this.tasks[todoId].push(task);
  }

  renderTasks(todoId) {
    const ul = document.createElement("ul");
    (this.tasks[todoId] || []).forEach((task) => {
      const taskItem = new TaskItem(task);
      ul.appendChild(taskItem.render());
    });
    return ul;
  }
}

export default TaskList;
