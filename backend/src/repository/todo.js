const { v4: uuidv4 } = require("uuid");

let todoList = {
  todos: [
    {
      id: "1",
      task: "This is a todo example",
      completed: false,
    },
  ],
};

module.exports = {
  getTodos: () => Promise.resolve(todoList),

  postTodo: (todo) => {
    if (!todo || !todo.task) {
      return Promise.reject({ status: 400, msg: "Task is required" });
    }

    const newTodo = {
      id: uuidv4(),
      task: todo.task,
      completed: false,
    };

    todoList.todos.push(newTodo);
    return Promise.resolve(newTodo);
  },

  patchTodo: (id, completed) => {
    const todo = todoList.todos.find((todo) => todo.id === id);

    if (!todo) {
      return Promise.reject({ status: 404, msg: "Task not found" });
    }

    if (typeof completed !== "boolean") {
      return Promise.reject({
        status: 400,
        msg: "Completed must be a boolean value.",
      });
    }

    todo.completed = completed;

    return Promise.resolve(todo);
  },

  deleteTodo: (id) => {
    const index = todoList.todos.findIndex((todo) => todo.id === id);
    if (index === -1) {
      return Promise.reject({ status: 404, msg: "Task not found" });
    }
    todoList.todos.splice(index, 1);
    return Promise.resolve({ status: 204, taskId: id });
  },
};
