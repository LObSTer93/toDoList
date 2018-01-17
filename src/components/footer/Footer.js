import React from "react";

import VisibilityFilterLink from "./VisibilityFilterLink";

export default () => {
    return (
        <p>
            Show:{' '}
            <VisibilityFilterLink filter={"all"}>
                All
            </VisibilityFilterLink>
            {', '}
            <VisibilityFilterLink filter={"completed"}>
                Completed
            </VisibilityFilterLink>
            {', '}
            <VisibilityFilterLink filter={"active"}>
                Active
            </VisibilityFilterLink>
        </p>
    )
}