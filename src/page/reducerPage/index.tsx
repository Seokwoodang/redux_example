import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../reducers/todoReducer";

const ReducerPage = () => {
  const dispatch = useDispatch();
  const textRef = useRef<HTMLInputElement | null>(null);
  const todoList = useSelector((state: any) => state.todoReducer);

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
};

export default ReducerPage;
