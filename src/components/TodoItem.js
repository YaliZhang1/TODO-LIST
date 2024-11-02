// src/components/TodoItem.js

import TaskList from "./TaskList";

class TodoItem {
  constructor(item, onDelete, onToggle, onClick) {
    this.item = item;
    this.onDelete = onDelete;
    this.onToggle = onToggle;
    this.onClick = onClick;
  }
  render() {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = this.item.completed;

    checkbox.addEventListener("change", () => {
      this.onToggle(this.item.id);
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", () => {
      this.onDelete(this.item.id);
    });
    
    const textSpan = document.createElement("span");
    textSpan.textContent = this.item.text;
    textSpan.addEventListener("click", () => this.onClick(this.item.id));

    li.appendChild(textSpan);
    li.appendChild(checkbox);
    li.appendChild(deleteButton);

    return li;
  }
}

export default TodoItem;
