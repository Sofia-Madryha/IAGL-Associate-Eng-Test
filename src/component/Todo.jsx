import { useDispatch } from "react-redux";

import { deleteTodo, updateTodoComplete } from "../actions";
import { DeleteIcon } from "../assets/icons/DeleteIcon";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(updateTodoComplete(todo.id, !todo.completed));
  };

  const onDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  return (
    <li className="flex justify-between text-lg p-2 border-b border-indigo-200">
      <div className="flex items-center gap-3">
        <label className="flex items-center gap-3 cursor-pointer w-full">
          <input
            name="task"
            type="checkbox"
            checked={todo.completed}
            onChange={handleToggle}
            className="w-5 h-5 accent-indigo-500 rounded"
          />
          <span
            className={`flex-grow text-lg ${
              todo.completed ? "line-through text-gray-400" : ""
            }`}
          >
            {todo.task}
          </span>
        </label>
      </div>
      <button
        onClick={onDelete}
        className="text-indigo-300 hover:text-indigo-600 transition"
        aria-label="Delete task"
      >
        <DeleteIcon />
      </button>
    </li>
  );
};

export default Todo;
