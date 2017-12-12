import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import * as actions from "../actions";

class VisibilityFilterLink extends React.Component{

    render(){
        const { setVisibilityFilter, isActive, text } = this.props;
        if(isActive){
            return (
                <span onClick={() => setVisibilityFilter()}>
                    {text}
                </span>
            )
        }
        return (
            <a href='#' onClick={() => setVisibilityFilter()}>
                {text}
            </a>
        )
    }
}

VisibilityFilterLink.propTypes = {
    setVisibilityFilter: PropTypes.func,
    isActive: PropTypes.bool,
    displayedFilter: PropTypes.string,
    text: PropTypes.string
};

const mapStateToProps = (state, ownProps) => {
    return {
        isActive: state.visibilityFilter === ownProps.displayedFilter
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setVisibilityFilter: () => {
            dispatch(actions.setVisibilityFilter(ownProps.displayedFilter))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(VisibilityFilterLink)