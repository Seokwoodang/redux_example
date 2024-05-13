import { nanoid } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
};

const ADD_TODO = "ADD_TODO";
const TODO_TOGGLED = "TODO_TOGGLED";

export const addTodoTest = (text) => ({
  type: ADD_TODO,
  payload: { text, id: nanoid() },
});

export const todoToggledTest = (id) => ({
  type: TODO_TOGGLED,
  payload: { id },
});

export const todoReducerTest = (state = initialState.todoList, action) => {
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
