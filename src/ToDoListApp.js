import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import * as actions from "./actions"
import ToDoList from "./ToDoList";
import VisibilityFilterLink from "./VisibilityFilterLink";

class ToDoListApp extends React.Component{

    constructor(props) {
        super(props);
        this.id=0;
        this.saveInput = this.saveInput.bind(this);
        this.addTodo = this.addTodo.bind(this);
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
                    {"Add todo"}
                </button>
                <ToDoList/>
                <p>
                    Show:{' '}
                    <VisibilityFilterLink displayedFilter={"ALL"} text={"All "}/>
                    <VisibilityFilterLink displayedFilter={"COMPLETED"} text={"Completed "}/>
                    <VisibilityFilterLink displayedFilter={"ACTIVE"} text={"Active "}/>
                </p>
            </div>
        );
    }
}

ToDoListApp.propTypes = {
    addTodo: PropTypes.func,
};

const mapDispatchToProps = dispatch => {
    return {
        addTodo: (id, value) => {
            dispatch(actions.addTodo(id, value))
        }
    }
};

export default connect(null, mapDispatchToProps)(ToDoListApp)