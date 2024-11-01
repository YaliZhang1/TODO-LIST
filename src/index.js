import TodoList from "./components/TodoList.js";

import "./styles.css";

const app = document.getElementById("app");
const todoList = new TodoList(app);
todoList.render();
