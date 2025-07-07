import {
  DELETE_TODO,
  FETCH_TODOS,
  NEW_POST,
  TOGGLE_TODO,
} from "../actions/types";

const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_TODOS:
      return action.payload;
    case NEW_POST:
      return [...state, action.payload];
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
}
