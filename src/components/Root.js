import React from "react";
import { Provider } from "react-redux";

import ToDoListApp from "./ToDoListApp"
import configureStore from "../configureStore";

export default () => {
    return (
        <Provider store={configureStore()}>
            <ToDoListApp/>
        </Provider>
    )
}