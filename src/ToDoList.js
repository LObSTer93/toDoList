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
        const { addTodo } = this.props;
        return (
            <div>
                <input ref={ node => {
                    this.input = node;
                }}/>
                <button onClick={() => {
                    addTodo(this.id++, this.input.value);
                    this.input.value = '';
                }
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
    todos: PropTypes.array,
    addTodo: PropTypes.func
};

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addTodo: (id, value) => {
            dispatch(actions.addTodo(id, value))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList)