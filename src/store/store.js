import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import reducers from '../reducers/index';

// logger
const store = createStore(reducers, applyMiddleware(thunk));


export default store;