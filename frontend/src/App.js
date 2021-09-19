import { Suspense, lazy, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Welcome from "./Welcome/Welcome";
import MainPage from "./mainPage/mainpage";
import HomePage from "./HomePage/HomePage";
import LoadingSpinner from "./UI/LoadingSpinner/LoadingSpinner";
import Alert from "./UI/Alert/Alert";
//Redux
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Alert />
        <Switch>
          <Suspense
            fallback={
              <div style={{ textAlign: "center" }}>
                <LoadingSpinner />
              </div>
            }
          >
            <Route path="/" component={HomePage} exact />
            <Route path="/login" component={Welcome} exact />
            <Route path="/main" component={MainPage} exact />
          </Suspense>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
