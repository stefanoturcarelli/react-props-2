import React from "react";

// Button is getting the 'increment' function as a prop
function Button({ increment = (f) => f }) {
  return <button onClick={increment}>Increment</button>;
}

export default Button;
