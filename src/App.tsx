import React, { RefObject, useRef, useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./reducers/todoReducer";
import { Route, Routes } from "react-router-dom";
import MainPage from "./page/mainPage";
import ReduxPage from "./page/reduxPage";
import RecoilPage from "./page/recoilPage";
import ZustandPage from "./page/zustandPage";

function App() {
  const dispatch = useDispatch();
  const textRef = useRef<HTMLInputElement | null>(null);
  const todoList = useSelector((state: any) => state.todoReducer);

  const handleAddTodo = () => {
    const text = textRef.current?.value;
    if (text) dispatch<any>(addTodo(text));
  };

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/redux" element={<ReduxPage />} />
      <Route path="/recoil" element={<RecoilPage />} />
      <Route path="/zustand" element={<ZustandPage />} />
    </Routes>
  );
}

export default App;
