import { useState } from "react";

const ConditionalRendering = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  let text = null;
  if (isLoggedIn) {
    text = "Welcome user";
  } else {
    text = "Click to login button for logged in";
  }

  return (
    <div>
      <p>{text}</p>
      {!isLoggedIn ? (
        <button onClick={handleLogin}>Login</button>
      ) : (
        <button onClick={handleLogout}>Logout</button>
      )}
    </div>
  );
};

export default ConditionalRendering;
