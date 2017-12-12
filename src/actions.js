let id = 0;

export function addTodo(text){
    return {
        type: "addTodo",
        id: id++,
        text
    }
}

export function toggleTodo(id){
    return {
        type: "toggleTodo",
        id
    }
}

export function setVisibilityFilter(filter){
    return {
        type: "setVisibilityFilter",
        filter
    }
}