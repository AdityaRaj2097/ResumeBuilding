import { createStore } from "redux";
import RootReducer from "./Reducers/RootReducer";
let store = createStore(RootReducer);
export default store;
