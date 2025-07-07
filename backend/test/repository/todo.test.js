const repository = require("../../src/repository/todo");

describe("TODO repository", () => {
  it("should return the todo list", async () => {
    const { todos } = await repository.getTodos();
    expect(Array.isArray(todos)).toBe(true);
    todos.forEach((todo) => {
      expect(todo).toMatchObject({
        id: "1",
        task: "This is a todo example",
        completed: false,
      });
    });
  });

  it("should return the created todo task", async () => {
    const newTask = {
      task: "This is new task",
    };

    const actual = await repository.postTodo(newTask);
    expect(actual).toMatchObject({
      id: expect.any(String),
      task: "This is new task",
      completed: false,
    });
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

  it("should return the updated todo task", async () => {
    const actual = await repository.patchTodo("1", true);
    expect(actual).toMatchObject({
      id: "1",
      task: "This is a todo example",
      completed: true,
    });
  });

  it("400: completed is not boolean", async () => {
    await expect(repository.patchTodo("1", "false")).rejects.toEqual({
      status: 400,
      msg: "Completed must be a boolean value.",
    });
  });

  it("404: task does not exist", async () => {
    await expect(repository.patchTodo("123", false)).rejects.toEqual({
      status: 404,
      msg: "Task not found",
    });
  });

  it("should delete task from list", async () => {
    await expect(repository.deleteTodo("1")).resolves.toEqual({
      status: 204,
      taskId: "1",
    });
  });

  it("404: task does not exist", async () => {
    await expect(repository.deleteTodo("123")).rejects.toEqual({
      status: 404,
      msg: "Task not found",
    });
  });
});
