import { useState, useCallback } from "react";
import ShowCounter from "./ShowCounter";
import Button from "./Button";
import Title from "./Title";

const UseCallBack = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const handleIncrementByOne = useCallback(() => {
    setCounter1((oldCounter) => oldCounter + 1);
  }, []);

  const handleIncrementByFive = useCallback(() => {
    setCounter2((oldCounter) => oldCounter + 5);
  }, []);

  return (
    <div>
      <Title />
      <ShowCounter counter={counter1} title="Counter 1" />
      <Button handleClick={handleIncrementByOne}>Increment by one</Button>

      <hr />
      <ShowCounter counter={counter2} title="Counter 2" />
      <Button handleClick={handleIncrementByFive}>Increment by five</Button>
    </div>
  );
};

export default UseCallBack;
