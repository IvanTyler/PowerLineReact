import carReducer from "../reducers/carReducers";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    car: carReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))