import { combineReducers } from "redux";
import allCallsReducer from "app/reducers/callsreducer";

const rootReducer = combineReducers({
  allCalls: allCallsReducer,
});

export default rootReducer;
