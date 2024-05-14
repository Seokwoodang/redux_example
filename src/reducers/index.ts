import { combineReducers } from "redux";
import { todoReducer } from "./todoReducer";
import { todoActionToolkit } from "./todoToolkit";

const rootReducer = combineReducers({ todoReducer, todoActionToolkit });

export default rootReducer;
