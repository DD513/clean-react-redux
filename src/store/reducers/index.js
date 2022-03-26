// export default rootReducer;
// Imports: Dependencies
import { combineReducers } from "redux";
// Imports: Reducers
import counterReducer from "../counter/counterSlice";
// Redux: Root Reducer
const rootReducer = combineReducers({
  counter: counterReducer,
});
// Exports
export default rootReducer;
