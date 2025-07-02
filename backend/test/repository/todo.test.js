const repository = require("../../src/repository/todo");

describe("TODO repository", () => {
  it("should return the todo list", async () => {
    const expected = {
      todos: [
        {
          task: "This is a todo example",
        },
      ],
    };
    const actual = await repository.getTodos();
    expect(actual).toEqual(expected);
  });

  it("should return the created todo task", async () => {
    const expected = {
      task: "This is new task",
    };

    const actual = await repository.postTodo(expected);
    expect(actual).toEqual(expected);
  });

  it("400: should return message when task is empty", async () => {
    const newTodo = { task: "" };

    await expect(repository.postTodo(newTodo)).rejects.toEqual({
      status: 400,
      msg: "Task is required",
    });
  });

  it("400: should return message when task is not provided", async () => {
    await expect(repository.postTodo()).rejects.toEqual({
      status: 400,
      msg: "Task is required",
    });
  });
});
