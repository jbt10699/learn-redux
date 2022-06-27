import counterReducer from "./counter";
import loadedReducer from "./isLoaded";
import albumReducer from "./albumResults";
import textReducer from "./textResults";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    counter: counterReducer,
    isLoaded: loadedReducer,
    text: textReducer,
    albums: albumReducer
});
export default allReducers;