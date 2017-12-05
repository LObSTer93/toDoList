import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import ToDo from "./ToDo";

class ToDoList extends React.Component{

    constructor(props) {
        super(props);
        this.filterTodos = this.filterTodos.bind(this);
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

    render(){
        const { todos } = this.props;
        return (
            <ul>
                {todos
                    .filter(this.filterTodos)
                    .map(todo => <ToDo todo={todo}/>)
                }
            </ul>
        )
    }
}

ToDoList.propTypes = {
    todos: PropTypes.array,
    visibilityFilter: PropTypes.string
};

const mapStateToProps = state => {
    const {todos, visibilityFilter} = state;
    return {
        todos,
        visibilityFilter: visibilityFilter
    }
};

export default connect(mapStateToProps)(ToDoList)