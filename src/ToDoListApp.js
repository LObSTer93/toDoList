import React from "react";

import ToDoList from "./ToDoList";
import AddToDo from "./AddToDo";
import Footer from "./Footer"

export default () => {
    return (
        <div>
            <AddToDo/>
            <ToDoList/>
            <Footer/>
        </div>
    );
}