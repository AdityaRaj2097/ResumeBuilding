import { combineReducers } from "redux";
import documentReducer from "./documentReducer";
import contactReducer from "./contactReducer";
import educationReducer from "./educationReducer";
const RootReducer = combineReducers({
  document: documentReducer,
  contactSection: contactReducer,
  educationSection: educationReducer,
});
export default RootReducer;
