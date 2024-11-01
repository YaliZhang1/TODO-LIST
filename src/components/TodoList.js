// src/components/TodoList.js

import TodoItem from "./TodoItem";
import {
  saveTodosToLocalStorage,
  getTodosFromLocalStorage,
} from "../utils/localStorage";

class TodoList {
  constructor(container) {
    this.container = container;
    this.todos = getTodosFromLocalStorage();
    this.render();
    this.initAddTodo();
  }

  initAddTodo() {
    const input = document.createElement("input");
    const addButton = document.createElement("button");
    addButton.textContent = "Add Todo";

    addButton.addEventListener("click", () => {
      const text = input.value.trim();
      if (text) {
        this.addTodo(text);
        input.value = ""; // Clear input after adding
      }
    });

    this.container.appendChild(input);
    this.container.appendChild(addButton);
  }

  addTodo(text) {
    const newTodo = { id: Date.now(), text, completed: false };
    this.todos.push(newTodo);
    saveTodosToLocalStorage(this.todos);
    this.render();
  }

  deleteTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    saveTodosToLocalStorage(this.todos);
    this.render();
  }

  toggleTodo(id) {
    const todo = this.todos.find((todo) => todo.id === id);
    if (todo) {
      todo.completed = !todo.completed;
      saveTodosToLocalStorage(this.todos);
      this.render();
    }
  }
  onclickTodo(id) {
    // 获取待办事项的详细信息（假设你有一个方法可以根据 ID 获取待办事项）
    const todo = this.todos.find((todo) => todo.id === id);

    // 填充模态框内容
    document.getElementById("todo-details").textContent = todo.text;

    // 显示模态框
    const modal = document.getElementById("modal");
    modal.style.display = "block";

    // 关闭模态框的逻辑
    document.getElementById("close").onclick = function () {
      modal.style.display = "none";
    };

    // 点击模态框外部关闭模态框
    window.onclick = function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };
  }

  render() {
    this.container.innerHTML = "";

    // Re-render the input and button for adding todos
    this.initAddTodo();

    const ul = document.createElement("ul");

    this.todos.forEach((todo) => {
      const todoItem = new TodoItem(
        todo,
        (id) => this.deleteTodo(id),
        (id) => this.toggleTodo(id),
        (id) => this.onclickTodo(id)
      );
      ul.appendChild(todoItem.render());
    });

    this.container.appendChild(ul);
  }
}

export default TodoList;
