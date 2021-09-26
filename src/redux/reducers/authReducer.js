import isEmpty from "../../Utils/validation/isEmpty";
import { LOADED, LOADING, SET_CURRENT_USER } from "../Types";

const initialState = {
  isAuthenticated: false,
  user: {},
  loading: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case LOADED:
      return {
        ...state,
        loading: false,
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default authReducer;
