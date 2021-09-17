import { Suspense, lazy, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import Welcome from "./Welcome/Welcome";
import MainPage from "./mainPage/mainpage";
import HomePage from "./HomePage/HomePage";
import LoadingSpinner from './UI/LoadingSpinner/LoadingSpinner';

function App() {
  return (
    <Switch>
        <Suspense fallback={<div style={{ textAlign: "center" }}><LoadingSpinner /></div>}>
          <Route path='/' component={HomePage} exact />
          <Route path='/login' component={Welcome} exact />
          <Route path='/main' component={MainPage} exact />
        </Suspense>
    </Switch>
  );
}

export default App;
