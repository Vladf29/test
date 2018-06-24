import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Link } from "react-router-dom";

import Spinner from "./Spinner";

export default class UserPreview extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        username: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  };
  state = {
    user: null,
    loading: false,
    _unmount: false
  };
  componentDidMount() {
    const { username } = this.props.match.params;
    this.setState({ loading: true });
    axios
      .get(`/api/users/${username}`)
      .then(
        ({ data }) =>
          !this.state._unmount && this.setState({ loading: false, user: data })
      );
  }

  componentDidUpdate() {
    const { username } = this.props.match.params;
    const { user } = this.state;
    if (user) {
      if (username !== user.username) {
        if (!this.state.loading) this.setState({ loading: true });
        axios.get(`/api/users/${username}`).then(({ data }) => {
          const { username: _username } = this.props.match.params;
          if (!this.state._unmount && _username === username)
            this.setState({ user: data, loading: false });
        });
      }
    }
  }

  render() {
    const { user, loading } = this.state;
    return (
      <div>
        {loading && <Spinner delay={500} />}
        {user && (
          <div>
            <div>Email: {user.email}</div>
            <div>Username: {user.username}</div>
            <div>First name: {user.first_name}</div>
            <div>Last name: {user.last_name}</div>
            <div>Gender: {user.gender}</div>
            <div>
              <Link to={`/edit/users/${user.username}`}>Edit</Link>
            </div>
          </div>
        )}
      </div>
    );
  }
}
