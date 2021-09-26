import { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";
import PrivateRoute from "./components/common/ProtectedRoute";
import Spinner from "./components/common/Spinner2/Spinner";
import ForgotPassword from "./pages/Auth/ForgotPassword/ForgotPassword";
import Login from "./pages/Auth/Login/Login";
import Register from "./pages/Auth/Register/Register";
import Container from "./pages/Container/Container";
import { setCurrentUser } from "./redux/actions/authActions";
import store from "./redux/store";
import setAuthToken from "./Utils/setAuthToken";

// check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const token = localStorage.jwtToken;
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(token));
}

const App = () => {
  return (
    <div>
      <Suspense fallback={<Spinner />}>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/forgotpassword" component={ForgotPassword} />
        <Switch>
          <PrivateRoute path="/" component={Container} />
          {/* <Container /> */}
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
