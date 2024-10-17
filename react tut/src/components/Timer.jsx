import { useState, useEffect } from "react";

const Timer = () => {
  const [timer, setTimer] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(new Date());
    }, 1000);

    return () => {
      console.log("Cleanup function");
      clearInterval(interval);
    };
  }, []);
  return (
    <div>
      <p>Timer Example</p>
      <p>{timer.toLocaleTimeString()}</p>
    </div>
  );
};

export default Timer;
