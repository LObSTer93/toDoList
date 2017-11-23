export default (state = [], action) => {
    switch(action.type){
        case "addTodo":{
            return [
                ...state,
                todo(undefined, action)
            ]
        }
        case "toggleTodo":{
            return state.map(t => todo(t, action))
        }
        default:
            return state;
    }
};

const todo = (state, action) => {
    switch(action.type){
        case "addTodo":{
            return {
                id: action.id,
                text: action.text,
                completed: false
            }
        }
        case "toggleTodo":{
            if(state.id !== action.id){
                return;
            }
            return {
                ...state,
                completed: !state.completed
            }
        }
        default:
            return state

    }
};