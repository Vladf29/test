import React, { Component } from "react";
import PropTypes from "prop-types";

import Input from "../Input";
import InputGroup from "../InputGroup";

export default class UserEditForm extends Component {
  static propTypes = {
    // prop: PropTypes
    user: PropTypes.shape({
      id: PropTypes.number.isRequired,
      email: PropTypes.string.isRequired,
      first_name: PropTypes.string.isRequired,
      last_name: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      gender: PropTypes.string.isRequired
    }).isRequired
  };

  state = {
    data: {
      email: "",
      first_name: "",
      last_name: "",
      username: "",
      gender: ""
    },
    loading: false,
    errors: {}
  };

  componentDidMount() {
    const { data } = this.state;
    for (const key in this.props.user) {
      if (key in data) data[key] = this.props.user[key];
    }
    this.setState({ data });
  }

  submit = e => {
    e.preventDefault();
  };

  changeHandler = e => {
    const { value, name } = e.target;
    this.setState({ data: { ...this.state.data, [name]: value } });
  };

  render() {
    const { data } = this.state;
    return (
      <form onSubmit={this.submit}>
        <InputGroup>
          <label htmlFor={"email"}>Email: </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={data.email}
            placeholer="exmple@email.com"
            onChange={this.changeHandler}
          />
        </InputGroup>
        <InputGroup>
          <label htmlFor={"first_name"}>First name: </label>
          <Input
            id="first_name"
            name="first_name"
            value={data.first_name}
            placeholer="First name"
            onChange={this.changeHandler}
          />
        </InputGroup>
        <InputGroup>
          <label htmlFor={"last_name"}>Last name: </label>
          <Input
            id="last_name"
            name="last_name"
            value={data.last_name}
            placeholer="Last name"
            onChange={this.changeHandler}
          />
        </InputGroup>
        <InputGroup>
          <label htmlFor={"username"}>Username: </label>
          <Input
            id="username"
            name="username"
            value={data.username}
            placeholer="Username"
            onChange={this.changeHandler}
          />
        </InputGroup>
        <InputGroup>
          <label htmlFor="gender">Gender</label>
          <select
            className="form-control"
            name="gender"
            id="gender"
            value={data.gender}
            onChange={this.changeHandler}
          >
            <option value="male">Male</option>
            <option value="Female">Female</option>
          </select>
        </InputGroup>
        <InputGroup>
          <button className="btn btn-primary">Update</button>
          <button className="btn btn-danger" ={>Reset</button>
        </InputGroup>
      </form>
    );
  }
}
