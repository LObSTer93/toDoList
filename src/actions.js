let id = 0;

export const addTodo = text => ({
    type: "addTodo",
    id: id++,
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