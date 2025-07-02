const todoService = (repository) => {
  return {
    getTodos: async () => {
      return await repository.getTodos();
    },

    postTodo: async (newTodo) => {
      try {
        return await repository.postTodo(newTodo);
      } catch (err) {
        throw err;
      }
    },
  };
};

module.exports = todoService;
