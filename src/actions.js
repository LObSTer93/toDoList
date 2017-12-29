import {v4} from 'node-uuid';

export const addTodo = text => ({
    type: "addTodo",
    id: v4(),
    text
});

export const toggleTodo = id => ({
    type: "toggleTodo",
    id
});

export const setVisibilityFilter = filter => ({
    type: "setVisibilityFilter",
    filter
});