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

    patchTodo: async (id, completed) => {
      try {
        return await repository.patchTodo(id, completed);
      } catch (err) {
        throw err;
      }
    },
    
    deleteTodo: async (id) => {
      try {
        return await repository.deleteTodo(id);
      } catch (err) {
        throw err;
      }
    },
  };
};

module.exports = todoService;
