import { Suspense, lazy, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Welcome from "./Welcome/Welcome";
import MainPage from "./mainPage/mainpage";
import SharePage from "./Share/Share";
import HomePage from "./HomePage/HomePage";
import PrivateRoute from "./routing/PrivateRoute";
import Alert from "./UI/Alert/Alert";

//Redux
import { Provider } from "react-redux";
import store from "./store";
import { LoadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
function App() {
  useEffect(() => {
    store.dispatch(LoadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Alert />
        <Switch>
          <Suspense>
            <Route path="/" component={HomePage} exact />
            <Route path="/login" component={Welcome} exact />
            <PrivateRoute path="/main" component={MainPage} exact />
            <PrivateRoute path="/main/share" component={SharePage} exact />
          </Suspense>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
