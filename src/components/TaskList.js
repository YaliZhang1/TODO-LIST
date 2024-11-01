import TodoItem from "./TodoItem";

class TaskList {
  constructor(items) {
    this.items = items || [];
    this.modal = this.createModal();
  }

  // 创建模态框
  createModal() {
    const modal = document.createElement("div");
    modal.id = "modal";
    modal.style.display = "none"; // 初始隐藏
    modal.className = "modal";

    const modalContent = document.createElement("div");
    modalContent.className = "modal-content";

    // 关闭按钮
    const closeButton = document.createElement("button");
    closeButton.textContent = "关闭";
    closeButton.addEventListener("click", () => {
      modal.style.display = "none"; // 关闭模态框
    });

    modalContent.appendChild(closeButton);
    modal.appendChild(modalContent);
    document.body.appendChild(modal); // 将模态框添加到页面上

    return modal;
  }

  // 显示模态框并在其中显示 TaskItem 表单
  showModalWithTaskItem() {
    const modalContent = this.modal.querySelector(".modal-content");

    // 清空现有内容
    while (modalContent.childNodes.length > 1) {
      modalContent.removeChild(modalContent.lastChild);
    }

    // 创建并添加 TaskItem 表单
    const taskItem = new TaskItem(this.addTask.bind(this));
    modalContent.appendChild(taskItem.render());

    // 显示模态框
    this.modal.style.display = "block";
  }

  // 添加任务的方法
  addTask(task) {
    this.items.push({
      id: Date.now(), // 生成唯一的ID
      ...task,
    });
    this.render();
  }

  render() {
    const container = document.createElement("div");

    // 添加按钮，点击时打开模态框并显示 TaskItem 表单
    const addTaskButton = document.createElement("button");
    addTaskButton.textContent = "添加任务";
    addTaskButton.addEventListener(
      "click",
      this.showModalWithTaskItem.bind(this)
    );

    container.appendChild(addTaskButton);

    // 渲染任务列表
    const ul = document.createElement("ul");
    this.items.forEach((item) => {
      const todoItem = new TodoItem(
        item,
        this.handleDelete.bind(this),
        this.handleToggle.bind(this),
        this.showModal.bind(this)
      );
      ul.appendChild(todoItem.render());
    });

    container.appendChild(ul);

    return container;
  }
}

export default TaskList;
