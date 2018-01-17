import React from "react";
import { Provider } from "react-redux";
import {BrowserRouter, Route} from "react-router-dom"

import ToDoListApp from "./ToDoListApp"
import configureStore from "../configureStore";

export default () => {
    return (
        <Provider store={configureStore()}>
            <BrowserRouter>
                <Route path={"/:filter?"} component={ToDoListApp}/>
            </BrowserRouter>
        </Provider>
    )
}