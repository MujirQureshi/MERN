import { useSearchParams } from "react-router-dom";

const PostList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filterValue = searchParams.get("filter");

  return (
    <div>
      <h2>{filterValue === "latest" ? "Latest post list" : "All post list"}</h2>
      <p>Post 1</p>
      <p>Post 2</p>
      <p>Post 3</p>
      <button onClick={() => setSearchParams({ filter: "latest" })}>
        Latest post
      </button>

      <button onClick={() => setSearchParams({})}>Reset</button>
    </div>
  );
};

export default PostList;
