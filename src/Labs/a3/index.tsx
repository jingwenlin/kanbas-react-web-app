import Add from "./Add";
import Classes from "./Classes";
import ConditionalOutput from "./ConditionalOutput";
import Highlight from "./Highlight";
import JavaScript from "./JavaScript";
import Styles from "./Styles";
import PathParameters from "./routing/PathParameters";
import TodoItem from "./todos/TodoItem";
import TodoList from "./todos/TodoList";

function Assignment3() {
    return (
        <div>
            <h1>Assignment 3</h1>
            <TodoList/>
            <ul className="list-group">
                <TodoItem />
                <TodoItem
                    todo={{ done: false, title: "Buy bread", status: "IN PROGRESS" }}
                />
                <TodoItem
                    todo={{ done: true, title: "Feed dogs", status: "COMPLETED" }}
                />
            </ul>
            <Add a={3} b={4} />
            {Add({ a: 1, b: 2 })}
            <Highlight>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam
                vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident voluptates.
            </Highlight>
            <ConditionalOutput />
            <Styles />
            <Classes />
            <PathParameters />
            <JavaScript />
        </div>
    );
}

export default Assignment3;