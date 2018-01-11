import {createStore} from "redux";
import reducers from "./reducers/reducers";
import {loadState, saveState} from "./localStorage";
import throttle from "lodash/throttle";

export default () => {
    const persistedState = loadState();
    const store = createStore(reducers, persistedState);

    store.subscribe(throttle(() => saveState({
        todos: store.getState().todos
    }), 1000));

    return store;
}