import React, { Component } from "react";
import axios from "axios";
import { Route, Link } from "react-router-dom";

import Spinner from "../Spinner";
import UsersList from "../UsersList";
import UserPreview from "../UserPreview";

export default class UsersPage extends Component {
  state = {
    users: null,
    loading: false
  };

  componentDidMount() {
    this.setState({ loading: true });
    axios
      .get("/api/users")
      .then(({ data }) => this.setState({ users: data, loading: false }));
  }

  render() {
    const { loading, users } = this.state;
    const { match } = this.props;
    return (
      <div className="row">
        <div className="col-md-3">
          {loading && <Spinner delay={2000} />}
          {users && (
            <div>
              <UsersList users={users} url={match.url} />
              <p>
              <Link to="/">{'<--'} Back</Link>
              </p>
            </div>
          )}
        </div>
        <div className="col-md-5 offset-md-4">
          <Route path={`${match.path}/:username`} component={UserPreview} />
        </div>
      </div>
    );
  }
}
