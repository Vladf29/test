import React from "react";
import PropTypes from "prop-types";

const Input = ({ id, name, value, type, onChange, placeholder }) => {
  return (
    <input
      id={id}
      className="form-control"
      name={name}
      value={value}
      type={type}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string
};

Input.defaultProps = {
  placeholder: "",
  type: "text",
  id: ""
};

export default Input;
