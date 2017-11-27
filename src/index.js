import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import ToDoList from "./ToDoList"
import reducers from "./reducers/reducers"

const store = createStore(reducers);
const render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <ToDoList/>
        </Provider>,
        document.getElementById('root')
    );
};
render();
store.subscribe(render);
