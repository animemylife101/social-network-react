import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import reducers from '../reducers/index';
// import redirect from "./apply-middle-ware-items/redirect";

// redirect
// logger
const store = createStore(reducers, applyMiddleware(thunk));


export default store;