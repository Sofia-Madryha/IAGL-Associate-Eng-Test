import axios from "axios";
import { DELETE_TODO, FETCH_TODOS, NEW_POST, TOGGLE_TODO } from "./types";

export function fetchTodos() {
  return function (dispatch) {
    return axios.get("http://localhost:9091/api/todo").then(({ data }) => {
      dispatch(setTodos(data.todos));
    });
  };
}

function setTodos(data) {
  return {
    type: FETCH_TODOS,
    payload: data,
  };
}

export function addTodo(postData) {
  return function (dispatch) {
    return axios
      .post("http://localhost:9091/api/todo", postData)
      .then(({ data }) => {
        dispatch(setTodo(data));
      });
  };
}

function setTodo(data) {
  return {
    type: NEW_POST,
    payload: data,
  };
}

export function updateTodoComplete(id, completed) {
  return function (dispatch) {
    return axios
      .patch(`http://localhost:9091/api/todo/${id}`, { completed })
      .then(({ data }) => {
        dispatch(toggleComplete(data));
      });
  };
}

function toggleComplete(data) {
  return {
    type: TOGGLE_TODO,
    payload: data,
  };
}

export function deleteTodo(id) {
  return function (dispatch) {
    return axios.delete(`http://localhost:9091/api/todo/${id}`).then(() => {
      dispatch(removeTodo(id));
    });
  };
}

function removeTodo(id) {
  return {
    type: DELETE_TODO,
    payload: id,
  };
}
