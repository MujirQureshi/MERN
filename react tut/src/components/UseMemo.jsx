import { useState, useMemo } from "react";

const UseMemo = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  useMemo(() => {
    slowFunction(counter1);
  }, [counter1]);

  const handleClick1 = () => {
    setCounter1((counter) => counter + 1);
  };

  const handleClick2 = () => {
    setCounter2((counter) => counter + 2);
  };

  return (
    <div>
      <p>Counter1: {counter1}</p>
      <button onClick={handleClick1}>Click counter1</button>

      <hr />

      <p>Counter2: {counter2}</p>
      <button onClick={handleClick2}>Click counter2</button>
    </div>
  );
};

const slowFunction = (number) => {
  for (let i = 0; i < 1000000000; i++) {}

  return number * 2;
};

export default UseMemo;
