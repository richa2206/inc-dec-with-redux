import { combineReducers } from "redux";
import { counter } from "../Reducer/counterReducer"

export const reducers = combineReducers(
  counter()
);