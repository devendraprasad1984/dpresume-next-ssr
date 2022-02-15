import {combineReducers, createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import TestUpDown from "./reducers/testUpDown";
import ToDo from "./reducers/todo";

const initStore = {}
const rootReducer = combineReducers({
    TestUpDown,
    ToDo
})
const sayHi = param => next => action => {
    console.log('hi its dispatch',param)
    next(action)
}
const _thunk = applyMiddleware(thunk)
const _compose = compose(_thunk,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const store = createStore(rootReducer, initStore, _compose)
export default store