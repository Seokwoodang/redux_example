import { combineReducers } from "redux";
import { todoReducer } from "./todoReducer";
import { todoReducerTest } from "./todoReducerTest";

const rootReducer = combineReducers({ todoReducer, todoReducerTest });

export default rootReducer;
