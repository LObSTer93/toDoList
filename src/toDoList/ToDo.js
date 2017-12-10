import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import * as actions from "../actions";

class ToDo extends React.Component{

    render() {
        const {toggleTodo, todo} = this.props;
        return (
            <li key={todo.id}
                onClick={() => toggleTodo(todo.id)}
                style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
                {todo.text}
            </li>
        )
    }
}

ToDo.propTypes = {
    toggleTodo: PropTypes.func,
    todo: PropTypes.object
};

const mapDispatchToProps = dispatch => {
    return {
        toggleTodo: (id) => {
            dispatch(actions.toggleTodo(id))
        }
    }
};

export default connect(null, mapDispatchToProps)(ToDo)