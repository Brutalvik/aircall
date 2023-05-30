import { combineReducers } from "redux";
import allCallsReducer from "app/reducers/callsreducer";

const rootReducer = combineReducers({
  calls: allCallsReducer,
});

export default rootReducer;
