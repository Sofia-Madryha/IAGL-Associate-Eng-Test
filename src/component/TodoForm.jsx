import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions";

const TodoForm = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(addTodo(data));
    reset();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col  mb-6"
      >
        <div className=" flex justify-between gap-2">
          <input
            {...register("task", { required: true })}
            placeholder="add your task here"
            className="flex-1 px-4 py-2 border border-indigo-600 bg-indigo-50 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600  text-white rounded-lg shadow hover:bg-indigo-800 transition"
          >
            Add
          </button>
        </div>
        {errors.task && (
          <p className="text-red-500 text-sm mt-1">Task is required.</p>
        )}
      </form>{" "}
    </>
  );
};

export default TodoForm;
