import React, { RefObject, useRef, useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./reducers/todoReducer";
import { addTodoTest } from "./reducers/todoReducerTest";
import { AddTodoAction } from "./reducers/reducerType";

function App() {
  const dispatch = useDispatch();
  const textRef = useRef<HTMLInputElement | null>(null);
  const todoList = useSelector((state: any) => state.todoReducer);

  console.log(todoList);

  const handleAddTodo = () => {
    const text = textRef.current?.value;
    if (text) dispatch<any>(addTodo(text));
  };

  return (
    <div>
      <div>Todo List</div>
      <div>
        <input ref={textRef} />
        <button onClick={() => handleAddTodo()}>추가</button>
      </div>
      <div></div>
    </div>
  );
}

export default App;
