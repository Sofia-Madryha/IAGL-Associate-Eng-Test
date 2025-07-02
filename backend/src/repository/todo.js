let todoList = {
  todos: [
    {
      task: "This is a todo example",
    },
  ],
};

module.exports = {
  getTodos: () => Promise.resolve(todoList),

  postTodo: (newTodo) => {
    if (!newTodo || !newTodo.task) {
      return Promise.reject({ status: 400, msg: "Task is required" });
    }
    todoList.todos.push(newTodo);
    return Promise.resolve(newTodo);
  },
};
