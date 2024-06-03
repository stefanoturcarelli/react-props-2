import React from "react";

function Button(increment = (f) => f) {
  return <button onClick={increment}>Increment</button>;
}

export default Button;
