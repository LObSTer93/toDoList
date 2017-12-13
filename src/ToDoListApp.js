import React from "react";

import ToDoList from "./toDoList/ToDoList";
import AddToDo from "./AddToDo";
import Footer from "./footer/Footer"

export default () => {
    return (
        <div>
            <AddToDo/>
            <ToDoList/>
            <Footer/>
        </div>
    );
}