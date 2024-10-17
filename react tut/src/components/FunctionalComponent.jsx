import React from "react";

const FunctionalComponent = () => {
  const [data, setData] = React.useState("react");

  const handleClick = (course, price) => {
    console.log(price);
    setData(course);
  };

  return (
    <div>
      <p>This is functional component</p>
      <button type="button" onClick={() => handleClick("angular", 80)}>
        Click me
      </button>
      <p>State: {data}</p>
    </div>
  );
};

export default FunctionalComponent;
