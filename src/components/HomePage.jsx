import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div>
      <h1>HomePage</h1>
      <Link to="/products">List of POSTS!</Link>
      <Link to="/create-post">Create a POST</Link>
    </div>
  );
};
