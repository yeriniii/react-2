import { createStore } from "redux";
import { combineReducers } from "redux";
import data from "../modules/data";

const rootReducer = combineReducers({
  data: data,
});
const store = createStore(rootReducer);

export default store;
