const ADD_TODO = "ADD_TODO";
const TODO_TOGGLED = "TODO_TOGGLED";

export interface AddTodoAction {
  type: typeof ADD_TODO;
  payload: {
    id: string;
    text: string;
  };
}

export interface TodoToggledAction {
  type: typeof TODO_TOGGLED;
  payload: { id: string }; // Only the ID is needed for toggling
}

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export type TodoAddReturn = {
  type: "ADD_TODO";
  payload: {
    id: string;
    text: string;
  };
};

export type TodoToggleReturn = {
  type: "TODO_TOGGLED";
  payload: {
    id: string;
  };
};

// ReturnType<typeof addTodo> | ReturnType<typeof todoToggled>;
