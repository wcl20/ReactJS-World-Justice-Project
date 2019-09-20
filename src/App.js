import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import configureStore from "./js/store";
import HomePage from "./js/views/HomePage";
import ProfilePage from "./js/views/ProfilePage";
import "./scss/main.scss";

const store = configureStore();

function App() {
  return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/profile/:id" component={ProfilePage}/>
                </Switch>
            </Router>
        </Provider>
  );
}

export default App;
