import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./reducers/rootReduser";
import thunk from "redux-thunk";

export const store = createStore(rootReducer,applyMiddleware(thunk))