import { configureStore } from "@reduxjs/toolkit";
import { createStore, applyMiddleware } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import rootReducer from "./redux/reducers";
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = []

const middleware = [thunk]

const store = createStore(
    rootReducer,
    initialState,
    //applyMiddleware(...middleware)
    composeWithDevTools(applyMiddleware(...middleware)) // modo desarrollo
);

export default store