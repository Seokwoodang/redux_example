import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../reducers/todoReducer";
import { useNavigate } from "react-router-dom";

interface TodoItem {
  id: string;
  text: string;
  completed: boolean;
}

const ReduxPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const textRef = useRef<HTMLInputElement | null>(null);
  const todoList: TodoItem[] = useSelector((state: any) => state.todoReducer);

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
      <div>
        {todoList.map((value) => {
          return (
            <>
              <div></div>
              <div></div>
            </>
          );
        })}

        {todoList.map((value, index) => {
          return <div>{value.text}</div>;
        })}
      </div>
      <button onClick={() => navigate(`/`)}>뒤로가기</button>
    </div>
  );
};

export default ReduxPage;
