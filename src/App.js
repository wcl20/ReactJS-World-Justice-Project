import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import configureStore from "./js/store";
import ProfilePage from "./js/views/ProfilePage";
import "./scss/main.scss";

const store = configureStore();

function App() {
  return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact path="/profile" component={ProfilePage}/>
                </Switch>
            </Router>
        </Provider>
  );
}

export default App;
