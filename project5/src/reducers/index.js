import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
const allReducers = combineReducers({
    loginReducer
  //them nhieu reducer vao day
});

export default allReducers;
