import axios from "axios";

// Attatch token to Authorization Header
const setAuthToken = (token) => {
  if (token) {
    // apply to every request
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    //   Delete the auth header
    delete axios.defaults.headers.common["Authorization"];
  }
};

export default setAuthToken;
