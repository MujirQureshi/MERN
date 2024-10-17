import { useState, useRef, useEffect } from "react";

const UseRef = () => {
  const [input, setInput] = useState({ name: "", email: "", password: "" });
  const inputRef = useRef(null);

  useEffect(() => {
    console.log(inputRef.current);
    inputRef.current.focus();
    inputRef.current.style.border = "5px solid red";
  }, []);

  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <div>
      <p>This is useRef example</p>
      <input
        ref={inputRef}
        type="text"
        name="name"
        value={input.name}
        onChange={handleChange}
      />
      <br />

      <input
        type="email"
        name="email"
        value={input.email}
        onChange={handleChange}
      />
      <br />

      <input
        type="password"
        name="password"
        value={input.password}
        onChange={handleChange}
      />
    </div>
  );
};

export default UseRef;
