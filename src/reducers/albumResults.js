
const albumsReducer = (state = [], action) => {
    switch (action.type) {
        case 'LOAD':
            return action.payload;

        default:
            return state;
        //Having no default gives you an error
    }
}
export default albumsReducer;