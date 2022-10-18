import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  const adjustCount = (amount) => {
    setCount((currentCount) => {
      return currentCount + amount;
    });
  };

  return (
    <>
      <button onClick={() => adjustCount(-1)}> - </button>
      <span>{count}</span>
      <button onClick={() => adjustCount(1)}> + </button>
    </>
  );
}
