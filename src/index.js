import TodoList from "./components/TodoList.js";
import TaskList from "./components/TaskList.js";
import "./styles.css";

const app = document.getElementById("app");
const todoList = new TodoList(app);
todoList.render();

const modal = document.createElement("div");
modal.id = "modal";
document.body.appendChild(modal);

const taskList = new TaskList();
modal.appendChild(taskList.render());
