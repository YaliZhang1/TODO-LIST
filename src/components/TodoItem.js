// src/components/TodoItem.js

import TaskList from "./TaskList";

class TodoItem {
  constructor(item, onDelete, onToggle, onClick) {
    this.item = item;
    this.onDelete = onDelete;
    this.onToggle = onToggle;
    this.onClick = onClick; // 新增的点击事件处理函数
  }
  render() {
    const li = document.createElement("li");

    li.textContent = this.item.text;

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
    // 添加点击事件监听器以创建任务列表
    li.addEventListener("click", () => {
      this.onClick(this.item.id); // 调用传入的点击处理函数
    });

    li.appendChild(checkbox);
    li.appendChild(deleteButton);

    return li;
  }
}

export default TodoItem;
