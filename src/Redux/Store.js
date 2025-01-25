import { createStore } from "redux";
import { taskReducer } from "./Task/TaskReducer";

export const store = createStore(taskReducer);