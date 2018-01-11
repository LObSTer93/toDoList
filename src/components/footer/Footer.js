import React from "react";

import VisibilityFilterLink from "./VisibilityFilterLink";

export default () => {
    return (
        <p>
            Show:{' '}
            <VisibilityFilterLink displayedFilter={"ALL"} text={"All "}/>
            <VisibilityFilterLink displayedFilter={"COMPLETED"} text={"Completed "}/>
            <VisibilityFilterLink displayedFilter={"ACTIVE"} text={"Active "}/>
        </p>
    )
}