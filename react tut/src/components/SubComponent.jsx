const SubComponent = ({ children }) => {
  return (
    <div>
      <p>This is sub component</p>
      <span>{children}</span>
    </div>
  );
};

export default SubComponent;
