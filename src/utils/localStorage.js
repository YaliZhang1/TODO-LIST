export const saveTodosToLocalStorage = (todos) => {
  localStorage.setItem("todo-list", JSON.stringify(todos));
};

export const getTodosFromLocalStorage = () => {
  const todosJSON = localStorage.getItem("todo-list");
  return todosJSON ? JSON.parse(todosJSON) : [];
};
