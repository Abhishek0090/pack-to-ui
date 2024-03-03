import { useState } from "react";

const useCounter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count + 1);
  };

  return { count, increment, decrement };
};
export { useCounter }; // export like this for multiple files

// Example

const { count, increment, decrement } = useCounter(); // Destructure it like this
