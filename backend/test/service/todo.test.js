describe("TODO Service", () => {
  it("should be able to get todos from repository", async () => {
    const expected = {
      todos: [
        {
          task: "This is a task to be done",
        },
      ],
    };
    const todoRepository = {
      getTodos: async () => Promise.resolve(expected),
    };

    const todoService = require("../../src/service/todo")(todoRepository);
    const actual = await todoService.getTodos();
    expect(actual).toEqual(expected);
  });

  it("should be able to push new todo to repository", async () => {
    const todos = [
      {
        task: "This is a task to be done",
      },
    ];

    const todoRepository = {
      postTodo: (newTodo) => {
        todos.push(newTodo);
        return Promise.resolve(newTodo);
      },
    };

    const todoService = require("../../src/service/todo")(todoRepository);

    const newTask = {
      task: "This is a new task",
    };
    const actual = await todoService.postTodo(newTask);
    expect(actual).toEqual(newTask);

    expect(todos).toEqual([
      {
        task: "This is a task to be done",
      },
      {
        task: "This is a new task",
      },
    ]);
  });
});
