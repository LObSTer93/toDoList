import React from "react";

import ToDoList from "./toDoList/ToDoList";
import AddToDo from "./AddToDo";
import Footer from "./footer/Footer"

export default class ToDoListApp extends React.Component{

    render(){
        return (
            <div>
                <AddToDo/>
                <ToDoList/>
                <Footer/>
            </div>
        );
    }
}