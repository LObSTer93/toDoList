export function addTodo(id, text){
    return {
        type: "addTodo",
        id,
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