import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UsersList = ({ users, url }) => {
  return (
    <div>
      {users.map(({ username }) => (
        <div key={username}>
          <Link to={`${url}/${username}`}>
            {username}
          </Link>
        </div>
      ))}
    </div>
  );
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  url: PropTypes.string.isRequired
};

export default UsersList;
