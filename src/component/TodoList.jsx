import Todo from "./Todo";
import { fetchTodos } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return (
    <ul className="flex flex-col gap-4 w-full">
      {todos && todos.length ? (
        todos.map((todo, index) => {
          return <Todo key={`todo-${index}`} todo={todo} />;
        })
      ) : (
        <div className="flex flex-col items-center text-xl">
          No todos, yay!
          <img src="/img/cat.png" width={300} />
        </div>
      )}
    </ul>
  );
};
export default TodoList;
