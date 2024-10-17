import { useState } from "react";
// import "../assets/css/style.css";
import classes from "../assets/css/test.module.css";
console.log(classes);

const CssStyle = () => {
  const [color, setColor] = useState(false);

  const handleClick = () => {
    setColor(!color);
  };
  return (
    // css stylesheet
    // <div className="container">
    //   <p>Css Styling</p>
    // </div>

    // inline
    // <div style={{ border: "5px solid black", backgroundColor: "red" }}>
    //   <p style={{ fontSize: "30px", color: "red", backgroundColor: "yellow" }}>
    //     Css styling
    //   </p>
    // </div>

    // css module
    <div className={color ? classes.container : classes.container1}>
      <p className={color ? classes.text : classes.text1}>Css styling</p>
      <button onClick={handleClick}>Change color</button>
    </div>
  );
};

export default CssStyle;
