import React, { Component } from "react";
import { Route } from "react-router-dom";
import axios from "axios";

import Spinner from "../Spinner";
import Users from "../Users";
import User from "../User";

export default class UsersPage extends Component {
  state = {
    users: null
  };

  componentDidMount() {
    axios.get("/api/users").then(({ data }) => this.setState({ users: data }));
  }

  render() {
    const { match } = this.props;
    const { users } = this.state;

    return (
      <div className="row">
        <div className="col-md-5">
          <h2 className="text-center">Users username</h2>
          {!users ? (
            <Spinner delay={500} />
          ) : (
            <Users users={users} url={match.url} />
          )}
        </div>
        <div className="col-md-5 offset-md-2">
          <Route path={`${match.path}/:username`} component={User} />
        </div>
      </div>
    );
  }
}
