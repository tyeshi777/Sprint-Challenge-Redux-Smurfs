/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  FETCH_SMURF,
  FETCH_SMURF_SUCCESS,
  FETCH_SMURF_FAILURE,
  ADD_SMURF
} from "../actions";
/*
 Your initial/default state for this project could *Although does not have to* look a lot like this */
const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURF:
      return {
        ...state,
        error: null,
        fetchingSmurfs: true
      };
    case FETCH_SMURF_SUCCESS:
      return {
        ...state,
        error: null,
        fetchingSmurfs: false,
        smurfs: action.payload
      };
    case FETCH_SMURF_FAILURE:
      return {
        ...state,
        error: "bam no smurf try again",
        fetchingSmurfs: false
      };
    case ADD_SMURF:
      return {
        ...state,
        error: null,
        addingSmurf: true
      };

    default:
      return state;
  }
};

export default reducer;
