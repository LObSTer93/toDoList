import React from "react";

import VisibilityFilterLink from "./VisibilityFilterLink";
import {connect} from "react-redux";

class Footer extends React.Component{

    render(){
        return (
            <p>
                Show:{' '}
                <VisibilityFilterLink displayedFilter={"ALL"} text={"All "}/>
                <VisibilityFilterLink displayedFilter={"COMPLETED"} text={"Completed "}/>
                <VisibilityFilterLink displayedFilter={"ACTIVE"} text={"Active "}/>
            </p>
        )
    }
}

export default connect()(Footer)