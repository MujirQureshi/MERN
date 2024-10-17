// React responsibilities
// ---------------------------------
//   1. Rander/Re-render JSX code
//   2. Manage states and props
//   3. Evaluating state/props change
//   4. React to events or input

// Side effect example in react
// ---------------------------------
//   1. Fetching data from API
//   2. Updating DOM
//   3. Setting any subscriptions or timer etc
import { useState, useEffect } from "react";

const UseEffectCom = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter((oldCounter) => oldCounter + 1);
  };

  useEffect(() => {
    console.log("Call this function in every render");
  });

  useEffect(() => {
    console.log("Call this function in initial render");
  }, []);

  useEffect(() => {
    console.log("Call the function when dependency changes");
  }, [counter]);

  return (
    <div>
      <p>UseEffect example</p>
      <button onClick={handleClick}>Click Counter</button>
      <p>Counter: {counter}</p>
    </div>
  );
};

export default UseEffectCom;
