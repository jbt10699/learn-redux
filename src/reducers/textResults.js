const textReducer = (state = "Search for albums by artist", action) => {
    switch (action.type) {
        case 'SEARCH_SUCCESS':
            return "Found " + action.payload[1] +" results for "+ action.payload[0];
        default:
            return state;
        //Having no default gives you an error
    }
}
export default textReducer;