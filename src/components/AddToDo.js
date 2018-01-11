import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import * as actions from "../actions";

class AddToDo extends React.Component{

    constructor(props) {
        super(props);
        this.saveInput = this.saveInput.bind(this);
        this.addTodo = this.addTodo.bind(this);
    }

    addTodo(){
        const { addTodo } = this.props;
        addTodo(this.input.value);
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
            </div>
        )
    }
}

AddToDo.propTypes = {
    addTodo: PropTypes.func,
};

const mapDispatchToProps = dispatch => {
    return {
        addTodo: value => dispatch(actions.addTodo(value))
    }
};

export default connect(null, mapDispatchToProps)(AddToDo)