import React from "react";
import PropTypes from "prop-types";

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired,
  email: PropTypes.string,
  func: PropTypes.func,
};

// Props default values
function User({
  name = "John Doe",
  age = 30,
  email = "john@doe.com",
  func = (f) => f, // This is how you can pass a function as a prop
}) {
  return (
    <section>
      <div>
        <h1>From User</h1>
      </div>
      <div>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Email: {email}</p>
      </div>
    </section>
  );
}

export default User;
