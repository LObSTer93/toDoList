import React from "react";
import {connect} from "react-redux";
import * as actions from "./actions";
import PropTypes from "prop-types";

class ClearCash extends React.Component{

    clearList(){
        localStorage.clear();
        this.props.clearList();
    }

    render(){
        return (
            <button onClick={this.clearList.bind(this)}>
                Clear list
            </button>
        )
    }
}

ClearCash.propTypes = {
    clearList: PropTypes.func,
};

const mapDispatchToProps = dispatch => {
    return {
        clearList: () => dispatch(actions.clearList())
    }
};

export default connect(null, mapDispatchToProps)(ClearCash)