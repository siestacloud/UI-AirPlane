import { combineReducers } from "@reduxjs/toolkit";
import { flightReduser } from "./flightReducer";

export const rootReducer =  combineReducers({
  flight: flightReduser,
})


export type rootState = ReturnType<typeof rootReducer>