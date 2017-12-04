export default (state='ALL', action) => {
    switch(action.type){
        case "setVisibilityFilter":{
            return action.filter;
        }
        default:
            return state;
    }
};