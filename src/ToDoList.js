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
        this.filterTodos = this.filterTodos.bind(this);
        this.renderLi = this.renderLi.bind(this);
    }

    renderLink(filter, text){
        const { setVisibilityFilter, visibilityFilter } = this.props;
        if(visibilityFilter === filter){
            return (
                <span onClick={() => setVisibilityFilter(filter)}>
                    {text}
                </span>
            )
        }
        return (
            <a href='#' onClick={() => setVisibilityFilter(filter)}>
                {text}
            </a>
        )
    }

    renderLi(todo){
        const { toggleTodo } = this.props;
        return (
            <li key={todo.id}
                onClick={() => toggleTodo(todo.id)}
                style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
                {todo.text}
            </li>
        )
    }

    filterTodos(todo){
        const { visibilityFilter } = this.props;
        switch(visibilityFilter){
            case "ALL":{
                return true;
            }
            case "COMPLETED":{
                return todo.completed
            }
            case "ACTIVE":{
                return !todo.completed
            }
            default:
                return true;
        }
    }

    renderList(){
        const { todos } = this.props;
        return todos
            .filter(this.filterTodos)
            .map(this.renderLi);
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
                <p>
                    Show:{' '}
                    {this.renderLink("ALL", "All ")}
                    {this.renderLink("COMPLETED", "Completed ")}
                    {this.renderLink("ACTIVE", "Active")}
                </p>
            </div>
        );
    }
}

ToDoList.propTypes = {
    todos: PropTypes.array,
    addTodo: PropTypes.func,
    toggleTodo: PropTypes.func,
    setVisibilityFilter: PropTypes.func,
    visibilityFilter: PropTypes.string
};

const mapStateToProps = state => {
    return {
        todos: state.todos,
        visibilityFilter: state.visibilityFilter
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addTodo: (id, value) => {
            dispatch(actions.addTodo(id, value))
        },
        toggleTodo: (id) => {
            dispatch(actions.toggleTodo(id))
        },
        setVisibilityFilter: filter => {
            dispatch(actions.setVisibilityFilter(filter))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList)