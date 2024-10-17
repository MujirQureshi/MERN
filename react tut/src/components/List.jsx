const List = () => {
  const items = ["React", "Vue", "Angular", "Svelte"];

  return (
    <div>
      <p>Popular course name</p>

      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
