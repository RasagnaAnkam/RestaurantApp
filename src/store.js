import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import reducer from "./Reducers/combinereducer";

const middleware = [thunk];
const store = createStore(reducer, applyMiddleware(...middleware));

export default store;
