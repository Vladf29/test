import React, { Component } from "react";
import PropTypes from "prop-types";

import "../styles/Spinner.css";

export default class Spinner extends Component {
  static defaultProps = {
    delay: 0
  };
  static propTypes = {
    delay: PropTypes.number
  };

  state = {
    visible: false,
    _mount: true
  };

  componentDidMount() {
    const { delay } = this.props;
    if (delay) {
      this.timerID = setTimeout(() => {
        if (this.state._mount) this.setState({ visible: true });
      }, delay);
    } else {
      this.setState({ visible: true });
    }
  }

  componentWillMount() {
    if (this.timerID) clearTimeout(this.timerID);
    this.setState({ _mount: false });
  }

  render() {
    const { visible } = this.state;
    return visible ? <div className="spinner" /> : null;
  }
}
