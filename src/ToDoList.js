import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import * as actions from "./actions"

class ToDoList extends React.Component{

    constructor(props) {
        super(props);
        this.id=0;
        this.saveInput = this.saveInput.bind(this);
        this.addTodo = this.addTodo.bind(this);
    }

    renderList(){
        const { todos, toggleTodo } = this.props;
        return (todos.map(todo => {
            return (
                <li
                        key={todo.id}
                        onClick={() => toggleTodo(todo.id)}
                        style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
                    {todo.text}
                </li>
            )
        }))
    }

    addTodo(){
        const { addTodo } = this.props;
        addTodo(this.id++, this.input.value);
        this.input.value = '';
    }

    saveInput(input){
        this.input = input;
    }

    render(){
        return (
            <div>
                <input ref={this.saveInput}/>
                <button onClick={this.addTodo}>
                    Add todo
                </button>
                <ul>
                    {this.renderList()}
                </ul>
            </div>
        );
    }
}

ToDoList.propTypes = {
    todos: PropTypes.array,
    addTodo: PropTypes.func,
    toggleTodo: PropTypes.func
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
        },
        toggleTodo: (id) => {
            dispatch(actions.toggleTodo(id))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList)