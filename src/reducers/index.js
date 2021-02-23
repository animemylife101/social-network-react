import { combineReducers } from "redux";
import authReducer from "./auth";
import newsReducer from "./news";
import profileReducer from './profile';

const reducers = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    news: newsReducer
});

export default reducers;