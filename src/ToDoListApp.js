import React from "react";
import { connect } from "react-redux";

import ToDoList from "./ToDoList";
import AddToDo from "./AddToDo";
import Footer from "./Footer"

class ToDoListApp extends React.Component{

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

export default connect()(ToDoListApp)