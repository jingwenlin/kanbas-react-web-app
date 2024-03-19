import React, { useState } from "react";
import { useSelector } from "react-redux";
import { LabState } from "./store";
function HelloWorld(){
    const { message } = useSelector((state: LabState) => state.helloReducer);
    return <div>{message}</div>;
}

export default HelloWorld;