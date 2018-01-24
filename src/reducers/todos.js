import {combineReducers} from "redux";

import todo from "./todo";

const byId = (state = {}, action) => {
    switch(action.type){
        case "addTodo":
        case "toggleTodo":{
            return {
                ...state,
                [action.id]: todo(state[action.id], action)
            }
        }
        case "clearList":{
            return {};
        }
        default:
            return state;
    }
};

const allIds = (state=[], action) => {
    switch(action.type){
        case "addTodo":{
            return [
                ...state,
                action.id
            ]
        }
        case "clearList":{
            return [];
        }
        default:
            return state
    }
};

export default combineReducers({
    byId,
    allIds
});

export const getVisibleTodos = (state, filter) => {
    const todos = state.allIds.map(id => state.byId[id]);
    switch(filter || "all"){
        case "all":{
            return todos;
        }
        case "completed":{
            return todos.filter(todo => todo.completed);
        }
        case "active":{
            return todos.filter(todo => !todo.completed);
        }
        default:
            throw new Error("Unknown filter " + filter + ".");
    }
};