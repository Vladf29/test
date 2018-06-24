import React, { Component } from "react";
import axios from "axios";

import UserEditForm from "../Forms/UserEditForm";

export default class UserEditPage extends Component {
  state = {
    user: null
  };

  componentDidMount() {
    const { username } = this.props.match.params;
    axios
      .get(`/api/users/${username}`)
      .then(({ data }) => this.setState({ user: data }));
  }

  render() {
    const { user } = this.state;
    return (
      <div className="col-md-6 offset-md-3">
        {user && <UserEditForm user={user} />}
      </div>
    );
  }
}
