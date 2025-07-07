import React from "react";
import "./styles.css";
import TodoForm from "./component/TodoForm";
import TodoList from "./component/TodoList";

export default function TodoApp() {
  return (
    <div className="flex flex-col  mt-20 max-w-xl mx-auto p-6 bg-indigo-50 shadow-xl rounded-2xl">
      <h1 className="text-center text-2xl uppercase mb-6">Todo List</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}
