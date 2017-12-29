import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import * as actions from "../actions";

class ToDo extends React.Component{

    constructor(props){
        super(props);
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick(){
        const { toggleTodo } = this.props;
        return toggleTodo();
    }

    render() {
        const {todo} = this.props;
        return (
            <li key={todo.id}
                onClick={this.handleOnClick}
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

const mapDispatchToProps = (dispatch, ownProps)  => {
    return {
        toggleTodo: () => dispatch(actions.toggleTodo(ownProps.todo.id))
    }
};

export default connect(null, mapDispatchToProps)(ToDo)