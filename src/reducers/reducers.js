import { combineReducers } from "redux";

import todos, * as selectors from "./todos";

export default combineReducers({
    todos,
});

export const getVisibleTodos = (state, filter) => {
    return selectors.getVisibleTodos(state.todos, filter);
};