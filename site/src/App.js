import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import HomePage from "./components/Pages/HomePage";
import UsersPage from "./components/Pages/UsersPage";
import UserEditPage from "./components/Pages/UserEditPage";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/users" component={UsersPage} />
          <Route path="/edit/users/:username" component={UserEditPage} />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </div>
    );
  }
}

export default App;
