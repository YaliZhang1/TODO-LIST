// src/components/TaskItem.js

class TaskItem {
    constructor(task) {
      this.task = task;
    }
  
    render() {
      const li = document.createElement("li");
      li.textContent = this.task.title;
      li.addEventListener("click", () => this.showTaskDetails());
  
      return li;
    }
  
    showTaskDetails() {
      const modal = document.getElementById("modal");
      document.getElementById("todo-details").innerHTML = `
        <strong>Title:</strong> ${this.task.title}<br>
        <strong>Description:</strong> ${this.task.description}<br>
        <strong>Priority:</strong> ${this.task.priority}<br>
        <strong>Due Date:</strong> ${this.task.dueDate}
      `;
      modal.style.display = "block";
    }
  }
  
  export default TaskItem;
  