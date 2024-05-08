import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo, TodoToggledAction } from "./reducerType";

const todoSlice = createSlice({
  name: "todos",
  initialState: [] as Todo[],
  reducers: {
    todoAdded(state, action: PayloadAction<{ id: string; text: string }>) {
      state.push({
        id: action.payload.id,
        text: action.payload.text,
        completed: false,
      });
    },
    todoToggled(state, action: PayloadAction<TodoToggledAction["payload"]>) {
      const todo = state.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { todoAdded, todoToggled } = todoSlice.actions;
export default todoSlice.reducer;
