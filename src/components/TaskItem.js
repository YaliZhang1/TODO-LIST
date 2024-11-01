// src/components/TaskItem.js

class TaskItem {
  constructor(onAddTask) {
    this.onAddTask = onAddTask; // 用于添加任务的回调函数
  }

  render() {
    const form = document.createElement("form");

    // 创建任务输入框
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "输入任务内容";
    input.className = "task-input";

    // 创建日期输入框
    const dateInput = document.createElement("input");
    dateInput.type = "date";
    dateInput.className = "task-date";

    // 创建优先级选择框
    const prioritySelect = document.createElement("select");
    prioritySelect.className = "task-priority";
    ["低", "中", "高"].forEach((level) => {
      const option = document.createElement("option");
      option.value = level;
      option.textContent = level;
      prioritySelect.appendChild(option);
    });

    // 创建添加任务按钮
    const addButton = document.createElement("button");
    addButton.textContent = "添加任务";
    addButton.className = "add-task-button";

    // 添加任务按钮点击事件
    addButton.addEventListener("click", () => {
      const task = {
        text: input.value,
        date: dateInput.value,
        priority: prioritySelect.value,
        completed: false,
      };

      if (this.onAddTask) {
        this.onAddTask(task); // 调用传入的 onAddTask 回调函数
      }

      // 清空输入框内容
      input.value = "";
      dateInput.value = "";
      prioritySelect.value = "低";
    });

    // 将元素添加到容器
    form.appendChild(input);
    form.appendChild(dateInput);
    form.appendChild(prioritySelect);
    form.appendChild(addButton);

    return form;
  }
}

export default TaskItem;
