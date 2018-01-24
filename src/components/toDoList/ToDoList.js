import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import { withRouter } from "react-router-dom";

import ToDo from "./ToDo";
import {getVisibleTodos} from "../../reducers/reducers";

class ToDoList extends React.Component{

    render(){
        const { visibleTodos } = this.props;
        return (
            <ul>
                {visibleTodos.map(todo => <ToDo key={todo.id} todo={todo}/>)}
            </ul>
        )
    }
}

ToDoList.propTypes = {
    visibleTodos: PropTypes.array
};

const mapStateToProps = (state, {match}) => {
    const visibleTodos = getVisibleTodos(state, match.params.filter);
    return {
        visibleTodos
    }
};

export default withRouter(connect(mapStateToProps)(ToDoList))