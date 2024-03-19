import { configureStore } from "@reduxjs/toolkit";
import helloReducer from "../a4/helloReducer";
import counterReducer from "./CounterRedux/counterReducer";
import addReducer from "./AddRedux/addReducer";
import todosReducer from "./CounterRedux/todos/todosReducer";

export interface LabState {
  helloReducer: {
    message: string;
  };
  counterReducer: {
    count:number;
  };
  addReducer: {
    sum: number;
  };
  todosReducer:{
    todos:{id:string;title:string}[];
    todo:{title:string};
  };

}
const store = configureStore({
  reducer: {
    helloReducer,counterReducer,addReducer,todosReducer
  },
});
export default store;