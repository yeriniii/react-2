import { createStore } from "redux";
import { combineReducers } from "redux";
import data from "../modules/data";
import member from "../modules/member";

const rootReducer = combineReducers({
  data: data,
  member,
});
const store = createStore(rootReducer);

export default store;
