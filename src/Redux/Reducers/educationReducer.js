import initialState from "./intialstate.json";
import * as actionsCodes from "../../actions/actionTypes";
import update from "immutability-helper";
export default function educationReducer(
  state = initialState.educationSection,
  action
) {
  switch (action.type) {
    case actionsCodes.ADD_EDUCATION:
      return update(state, { $set: action.educationSection });
    case actionsCodes.UPDATE_EDUCATION:
      return update(state, { $merge: action.educationSection });
    default:
      return state;
  }
}
