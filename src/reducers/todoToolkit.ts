import { createSlice } from "@reduxjs/toolkit";

interface TodoState {
  todoList: { text: string; id: string; complete: boolean }[];
}

const initialState: TodoState = {
  todoList: [],
};

export const todoActionToolkit = createSlice({
  name: "todoActions",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todoList = [...state.todoList, action.payload];
    },
  },
});

export default todoActionToolkit.reducer;
