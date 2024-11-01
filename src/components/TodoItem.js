// src/components/TodoItem.js

class TodoItem {
  constructor(item, onDelete, onToggle) {
    this.item = item;
    this.onDelete = onDelete;
    this.onToggle = onToggle;
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

    li.appendChild(checkbox);
    li.appendChild(deleteButton);

    return li;
  }
}

export default TodoItem;
