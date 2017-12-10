import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import ToDoListApp from "./ToDoListApp"
import reducers from "./reducers/reducers"

const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <ToDoListApp/>
    </Provider>,
    document.getElementById('root')
);