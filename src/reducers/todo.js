export default (state, action) => {
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
                return state;
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