import axios from "axios";
import setAuthToken from "../../Utils/setAuthToken";
import { GET_ERRORS, LOADED, LOADING, SET_CURRENT_USER } from "../Types";

// Register user
export const registerUser = (userData, history) => (dispatch) => {
  dispatch(userLoading());
  axios
    .post("https://reqres.in/api/register", userData)
    .then((res) => history.push("/login"))
    .catch((err) => {
      dispatch(userLoaded());
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};

// Login user and get token
export const loginUser = (userData, history) => (dispatch) => {
  dispatch(userLoading());
  axios
    .post("https://reqres.in/api/login", userData)
    .then((res) => {
      // save to local storage
      const { token } = res.data;
      // Set Token to local storage
      localStorage.setItem("jwtToken", token);
      // Set Token to Auth Header
      setAuthToken(token);

      // decode toke to get user data from it
      // const decoded = jwt_decode(token);
      // set current user
      dispatch(setCurrentUser(token));
    })
    .catch((err) => {
      console.log(err);
      dispatch(userLoaded());
      // dispatch({ type: "GET_ERRORS", payload: err.response.data });
    });
};

// Set logged in user

export const setCurrentUser = (token) => {
  return {
    type: SET_CURRENT_USER,
    payload: token,
  };
};

// user loading
export const userLoading = () => {
  return {
    type: LOADING,
  };
};

// user loading
export const userLoaded = () => {
  return {
    type: LOADED,
  };
};

// Logout user
export const logoutUser = () => (dispatch) => {
  // Remove token from local storage
  localStorage.removeItem("jwtToken");
  // Remove Auth Header from future requests
  setAuthToken(false);
  // set current user to an empty object
  // which will set isAuthenticated to false
  // we pass in an empty user remember which sets isAuthenticated to false
  dispatch(setCurrentUser({}));
};
