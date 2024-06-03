import React from "react";
import { useState } from "react";
import Button from "./Button";

function Counter() {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
  };
	
  return (
    <section>
      <h2>Passing functions as props</h2>
      <Button increment={handleCount} />
      <input type="text" value={count} readOnly />
    </section>
  );
}

export default Counter;
