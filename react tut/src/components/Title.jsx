import { memo } from "react";

const Title = () => {
  console.log("Rendering title");
  return (
    <div>
      <h2>This is title component</h2>
    </div>
  );
};

export default memo(Title);
