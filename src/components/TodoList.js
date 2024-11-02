// src/components/TodoList.js

import TodoItem from "./TodoItem";
import TaskList from "./TaskList";
import {
  saveTodosToLocalStorage,
  getTodosFromLocalStorage,
} from "../utils/localStorage";

class TodoList {
  constructor(container) {
    this.container = container;
    this.todos = getTodosFromLocalStorage();
    this.taskList = new TaskList();
    this.render();
    this.initAddTodo();
    this.setupModal();
  }
  initAddTodo() {
    const div = document.createElement("div");

    div.style.justifyContent = "center";
    div.style.display = "grid";
    div.style.gridTemplateColumns = "8fr 2fr";
    div.style.gridTemplateRows = "2fr";
    div.style.gap = "15px";

    const input = document.createElement("input");
    const addButton = document.createElement("button");
    addButton.textContent = "Add Todo";
    addButton.style.backgroundColor = "#add8e6";
    addButton.style.color = "white";
    addButton.style.borderRadius = "5px";
    addButton.style.padding = "10px 20px";
    addButton.style.border = "none";

    addButton.addEventListener("click", () => {
      const text = input.value.trim();
      if (text) {
        this.addTodo(text);
        input.value = "";
      }
    });
    div.appendChild(input);
    div.appendChild(addButton);
    this.container.appendChild(div);
  }
  setupModal() {
    const modal = document.getElementById("modal");
    const viewTaskSection = document.getElementById("view-task-detail");
    viewTaskSection.style.display = "none";
    document.getElementById("close").onclick = () => {
      modal.style.display = "none";
    };

    window.onclick = (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };
  }
  showAddTaskSection(todoId) {
    const addTaskSection = document.getElementById("add-task-section");
    addTaskSection.style.display = "block";

    const createTaskButton = document.getElementById("create-task");
    createTaskButton.onclick = () => {
      const title = document.getElementById("task-title").value;
      const description = document.getElementById("task-desc").value;
      const priorityInput = document.querySelector(
        'input[name="priority"]:checked' //input[name="priority"]：这一部分选择具有 name 属性值为 "priority" 的任何 <input> 元素。这通常用于选择输入字段，例如单选按钮或复选框，以便按名称对输入进行分组。
        // :checked：这个伪类仅选择当前被选中的 <input> 元素（例如，选中的单选按钮或复选框）。因此，这个选择器只会匹配同时满足 name 为 "priority" 和被选中的输入。
      );

      const priority = priorityInput ? priorityInput.value : "Not set"; //如果有选中的优先级输入，则将其值赋给 priority；如果没有选中的输入，则将 "Not set" 赋给 priority。这种写法简洁明了，常用于处理可能为空的变量，以便提供默认值。
      const dueDate = document.getElementById("due-date").value;
      const newTask = { id: Date.now(), title, description, priority, dueDate };

      const todo = this.todos.find((todo) => todo.id === todoId);
      todo.tasks = todo.tasks || [];
      todo.tasks.push(newTask);

      saveTodosToLocalStorage(this.todos);
      this.onclickTodo(todoId); //更新你刚刚添加进去的东西

      document.getElementById("task-title").value = "";
      document.getElementById("task-desc").value = "";
      //初始化优先级选项框，如果这时候又选，则把它改成没有选中的状态，就是清空的功能
      if (priorityInput) {
        priorityInput.checked = false;
      }
      //将日历也清空
      document.getElementById("due-date").value = "";
      this.updateTaskList(todoId);
    };
  }

  updateTaskList(todoId) {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = "";

    const todo = this.todos.find((todo) => todo.id === todoId);
    //tasks?表示tasks如果是undefined或是null，则不再继续往下运行forEach
    todo.tasks?.forEach((task) => {
      const taskItem = document.createElement("li");
      taskItem.textContent = task.title;
      taskItem.onclick = () => this.viewTask(task);

      const toggleButton = document.createElement("button");
      toggleButton.textContent = task.completed ? "Not Done" : "Done";

      taskItem.style.textDecoration = task.completed ? "line-through" : "none";

      toggleButton.onclick = () => {
        task.completed = !task.completed;
        this.saveEdit("task-completed", task.id, task.completed);
        this.updateTaskList(todoId);
      };

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.disabled = !task.completed;
      deleteButton.onclick = () => {
        const confirmDelete = confirm(
          "Are you sure you want to delete this task?"
        );
        if (confirmDelete) {
          todo.tasks = todo.tasks.filter((t) => t.id !== task.id);
          saveTodosToLocalStorage(this.todos);
          this.updateTaskList(todoId);
        }
      };

      taskItem.appendChild(toggleButton);
      taskItem.appendChild(deleteButton);
      taskList.appendChild(taskItem);
    });
  }

  viewTask(task) {
    const viewTaskDetail = document.getElementById("task-detail-list");
    viewTaskDetail.innerHTML = "";

    const listItem = document.createElement("li");
    listItem.className = this.getPriorityClass(task.priority);

    const titleElement = document.createElement("h4");
    titleElement.innerHTML = `Title: <span id="task-title">${task.title}</span>`;

    const descriptionElement = document.createElement("p");
    descriptionElement.innerHTML = `Description: <span id="task-desc-edit">${task.description}</span>`;
    const descriptionEditButton = document.createElement("button");
    descriptionEditButton.textContent = "Edit";
    descriptionEditButton.onclick = () =>
      this.editField("task-desc-edit", task.id, task, descriptionEditButton);
    descriptionElement.appendChild(descriptionEditButton);

    const priorityElement = document.createElement("p");
    priorityElement.innerHTML = `Priority: <span id="task-priority">${task.priority}</span>`;
    const priorityEditButton = document.createElement("button");
    priorityEditButton.textContent = "Edit";
    priorityEditButton.onclick = () =>
      this.editField("task-priority", task.id, task, priorityEditButton);
    priorityElement.appendChild(priorityEditButton);

    const dueDateElement = document.createElement("p");
    dueDateElement.innerHTML = `Due Date: <span id="task-due-date">${task.dueDate}</span>`;
    const dueDateEditButton = document.createElement("button");
    dueDateEditButton.textContent = "Edit";
    dueDateEditButton.onclick = () =>
      this.editField("task-due-date", task.id, task, dueDateEditButton);
    dueDateElement.appendChild(dueDateEditButton);

    listItem.appendChild(titleElement);
    listItem.appendChild(descriptionElement);
    listItem.appendChild(priorityElement);
    listItem.appendChild(dueDateElement);
    viewTaskDetail.appendChild(listItem);
    document.getElementById("view-task-detail").style.display = "block";
  }

  getPriorityClass(priority) {
    switch (priority) {
      case "High":
        return "priority-high";
      case "Medium":
        return "priority-medium";
      case "Low":
        return "priority-low";
      default:
        return "priority-none";
    }
  }

  editField(field, taskId, task, editButton) {
    const fieldElement = document.getElementById(field);
    const currentValue = fieldElement.textContent;

    let input;
    if (field === "task-priority") {
      fieldElement.innerHTML = "";
      ["High", "Medium", "Low"].forEach((priority) => {
        const label = document.createElement("label");
        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "priority";
        radio.value = priority;
        radio.checked = task.priority === priority;

        label.appendChild(radio);
        label.appendChild(document.createTextNode(priority));
        fieldElement.appendChild(label);
      });
    } else {
      input = document.createElement("input");
      input.type = field === "task-due-date" ? "date" : "text";
      input.value = currentValue;
      fieldElement.innerHTML = "";
      fieldElement.appendChild(input);
    }

    editButton.style.display = "none";

    const checkButton = document.createElement("button");
    checkButton.textContent = "✔️";
    checkButton.onclick = () => {
      const newValue =
        field === "task-priority"
          ? document.querySelector('input[name="priority"]:checked')?.value
          : input.value;
      this.saveEdit(field, taskId, newValue);
      fieldElement.textContent = newValue;
      editButton.style.display = "inline";
      checkButton.remove();
      crossButton.remove();
    };

    const crossButton = document.createElement("button");
    crossButton.textContent = "❌";
    crossButton.onclick = () => {
      this.cancelEdit(task, field, editButton, checkButton, crossButton);
    };

    fieldElement.appendChild(checkButton);
    fieldElement.appendChild(crossButton);
  }

  saveEdit(field, taskId, newValue) {
    const todo = this.todos.find((todo) =>
      todo.tasks.find((task) => task.id === taskId)
    );
    const task = todo.tasks.find((task) => task.id === taskId);

    if (field === "task-desc-edit") {
      task.description = newValue;
    } else if (field === "task-priority") {
      task.priority = newValue;

      const taskContainer = document
        .getElementById("task-detail-list")
        .querySelector("li");
      taskContainer.className = this.getPriorityClass(newValue);
    } else if (field === "task-due-date") {
      task.dueDate = newValue;
    } else if (field === "task-completed") {
      task.completed = newValue;
    }

    saveTodosToLocalStorage(this.todos);
  }

  cancelEdit(task, field, editButton, checkButton, crossButton) {
    const fieldElement = document.getElementById(field);
    const originalValue =
      field === "task-desc-edit"
        ? task.description
        : field === "task-priority"
        ? task.priority
        : task.dueDate;

    fieldElement.innerHTML = originalValue;
    editButton.style.display = "inline";
    checkButton.remove();
    crossButton.remove();
  }

  addTodo(text) {
    const newTodo = { id: Date.now(), text, completed: false, tasks: [] };
    this.todos.push(newTodo);
    saveTodosToLocalStorage(this.todos);
    this.render();
  }

  onclickTodo(id) {
    const todo = this.todos.find((todo) => todo.id === id);
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const taskList = document.getElementById("task-list");

    modalTitle.textContent = todo.text;
    taskList.innerHTML = "";

    this.updateTaskList(todo.id);
    this.showAddTaskSection(todo.id);
    modal.style.display = "block";
  }

  deleteTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    saveTodosToLocalStorage(this.todos);
    this.render();
  }

  render() {
    this.container.innerHTML = "";
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
