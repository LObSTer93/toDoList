import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import { withRouter } from "react-router-dom";

import ToDo from "./ToDo";

class ToDoList extends React.Component{

    render(){
        const { getVisibleTodos } = this.props;
        return (
            <ul>
                {getVisibleTodos().map(todo => <ToDo key={todo.id} todo={todo}/>)}
            </ul>
        )
    }
}

ToDoList.propTypes = {
    getVisibleTodos: PropTypes.func
};

const mapStateToProps = (state, {match}) => {
    const todos = state.todos;
    const getVisibleTodos = () => {
        switch(match.params.filter || "all"){
            case "all":{
                return todos;
            }
            case "completed":{
                return todos.filter(todo => todo.completed);
            }
            case "active":{
                return todos.filter(todo => !todo.completed);
            }
            default:
                return todos;
        }
    };
    return {
        getVisibleTodos
    }
};

export default withRouter(connect(mapStateToProps)(ToDoList))