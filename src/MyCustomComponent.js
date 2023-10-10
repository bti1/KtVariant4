import React, { useState } from "react";

function MyCustomComponent() {
  const [count, setCount] = useState(5);

  const myArrowFunction = (getter) => {
    for (let i = 0; i < 7; i++) {
      setCount((prevCount) => prevCount + 1);
      console.log(getter());
      if (getter() > 100) {
        break;
      }
    }
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => myArrowFunction(() => count)}>Increment</button>
    </div>
  );
}

export default MyCustomComponent;
