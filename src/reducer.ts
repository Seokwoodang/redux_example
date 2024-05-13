import { nanoid } from "@reduxjs/toolkit";
import {
  AddTodoAction,
  Todo,
  TodoAddReturn,
  TodoToggleReturn,
  TodoToggledAction,
} from "./reducerType";

const ADD_TODO = "ADD_TODO";
const TODO_TOGGLED = "TODO_TOGGLED";

export const addTodo = (text: string): AddTodoAction => ({
  type: ADD_TODO,
  payload: { text, id: nanoid() },
});

export const todoToggled = (id: string): TodoToggledAction => ({
  type: TODO_TOGGLED,
  payload: { id },
});

type TodoAction = TodoAddReturn | TodoToggleReturn;

export const todosReducer = (
  state: Todo[] = [],
  action: TodoAction
): Todo[] => {
  switch (action.type) {
    case ADD_TODO:
      return state.concat({
        id: action.payload.id,
        text: action.payload.text,
        completed: false,
      });
    case TODO_TOGGLED:
      return state.map((todo) => {
        if (todo.id !== action.payload.id) return todo;
        return {
          ...todo,
          completed: !todo.completed,
        };
      });
    default:
      return state;
  }
};
