import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import * as actions from "../actions";

class VisibilityFilterLink extends React.Component{

    render(){
        const { setVisibilityFilter, chosenFilter, displayedFilter, text } = this.props;
        if(chosenFilter === displayedFilter){
            return (
                <span onClick={() => setVisibilityFilter(displayedFilter)}>
                    {text}
                </span>
            )
        }
        return (
            <a href='#' onClick={() => setVisibilityFilter(displayedFilter)}>
                {text}
            </a>
        )
    }
}

VisibilityFilterLink.propTypes = {
    setVisibilityFilter: PropTypes.func,
    chosenFilter: PropTypes.string,
    displayedFilter: PropTypes.string,
    text: PropTypes.string
};

const mapStateToProps = state => {
    return {
        chosenFilter: state.visibilityFilter
    }
};

const mapDispatchToProps = dispatch => {
    return {
        setVisibilityFilter: filter => {
            dispatch(actions.setVisibilityFilter(filter))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(VisibilityFilterLink)