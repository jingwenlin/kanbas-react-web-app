import React, { useState } from "react";
import ArrayStateVariable from "./ArrayStateVariable";
import BooleanStateVariables from "./BooleanStateVariables";
import ChildStateComponent from "./ChildStateComponent";
import ClickEvent from "./ClickEvent";
import Counter from "./Counter";
import DateStateVariable from "./DateStateVariable";
import EventObject from "./EventObject";
import HelloWorld from "./HelloWorld";
import LifeIsGood from "./LifeIsGood";
import ObjectStateVariable from "./ObjectStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import StringStateVariables from "./StringStateVariables";
import Counterr from "./CounterRedux/Counterr";
import TodoList from "./CounterRedux/todos/TodoList";

function Assignment4(){
    const[message, setMessage] = useState("Hello World");
    function sayHello() {
        alert("Hello");
      }
    
    return(
        <div>
        <h1>Assignment 4</h1>
        <TodoList/>
        <Counterr/>
        <HelloWorld />
        <LifeIsGood />
        <ClickEvent />
        <PassingDataOnEvent/>
        <PassingFunctions theFunction={sayHello} />
        <EventObject/>
        <Counter/>
        <BooleanStateVariables/>
        <StringStateVariables/>
        <DateStateVariable/>
        <ObjectStateVariable/>
        <ArrayStateVariable/>
        <ParentStateComponent/>
        </div>
    );
}

export default Assignment4;