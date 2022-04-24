import { combineReducers } from "redux";

import searchReducer from "./search";

const appReducer = combineReducers({
  search: searchReducer,
});

export default appReducer;
