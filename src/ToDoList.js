import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import * as actions from "./actions"

class ToDoList extends React.Component{

    constructor(props) {
        super(props);
        this.id=0;
    }

    render(){
        return (
            <div>
                <button onClick={
                    () => this.props.dispatch(actions.addTodo(this.id++, "Test"))
                }>
                    Add todo
                </button>
                <ul>
                    {this.props.todos.map(todo =>
                        <li key={todo.id}>
                            {todo.text}
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

ToDoList.propTypes = {
    dispatch: PropTypes.func.isRequired,
    todos: PropTypes.array.isRequired
};

export default connect()(ToDoList)