import {createStore} from "redux";
import reducers from "./reducers/reducers";
import {loadState, saveState} from "./localStorage";
import throttle from "lodash/throttle";

const addLoggingToDispatch = store => {
    const rawDispatch = store.dispatch;
    return action => {
        console.group(action.type);
        console.log("prevState: " + store.getState());
        console.log("action: " + action);
        const returnValue = rawDispatch(action);
        console.log("nextState: " + store.getState());
        console.groupEnd(action.type);
        return returnValue;
    }
};

export default () => {
    const persistedState = loadState();
    const store = createStore(reducers, persistedState);
    store.dispatch = addLoggingToDispatch(store);

    store.subscribe(throttle(() => saveState({
        todos: store.getState().todos
    }), 1000));

    return store;
}