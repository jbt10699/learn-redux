const loadedReducer = (state = false, action) => {
    switch (action.type) {
        case 'IS_LOADING':
            return true;
        case 'DONE_LOADING':
            return false;
        default:
            return state;
    }
}
export default loadedReducer;