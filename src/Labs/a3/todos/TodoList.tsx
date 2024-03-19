import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import todos from "./todos.json";
import { LabState } from "../../a4/store";
const TodoList = () => {
  const { count } = useSelector((store: LabState) => store.counterReducer);
 return(
   <>
     <h3>Todo List!! {count}</h3>
     <ul className="list-group">
       { todos.map(todo => {
           return(<TodoItem todo={todo}/>);
         })}
     </ul>
   </>
 );
}
export default TodoList;