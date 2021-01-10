import {createStore, combineReducers, applyMiddleware} from "redux";
import {postReducer}                                   from "./reducers/post.js";
import thunk                                           from 'redux-thunk'

const rootReducer = combineReducers({
   post: postReducer
})


export default createStore(rootReducer, applyMiddleware(thunk))
