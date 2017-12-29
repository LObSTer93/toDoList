import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import ToDoListApp from "./ToDoListApp"
import reducers from "./reducers/reducers"
import {loadState, saveState} from "./localStorage";

const persistedState = loadState();
const store = createStore(reducers, persistedState);

store.subscribe(() => saveState({
    todos: store.getState().todos
}));

ReactDOM.render(
    <Provider store={store}>
        <ToDoListApp/>
    </Provider>,
    document.getElementById('root')
);