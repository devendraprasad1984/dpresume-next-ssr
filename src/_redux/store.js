import {combineReducers, createStore} from "redux";
import TestUpDown from "./reducers/testUpDown";

const initStore = {}
const rootReducer = combineReducers({
    TestUpDown
})

const store = createStore(rootReducer, initStore, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store