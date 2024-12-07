import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const ProductListPage = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [inputState, setInputState] = useState("");
  function getAllPosts() {
    axios
      .get("https://dummyjson.com/posts")
      .then((res) => {
        // the information that you want is always in the .data key with axios
        console.log(res.data.posts);
        setPosts(res.data.posts);
      })
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    getAllPosts();
  }, []);

  //functions
  function handleSearch(e) {
    e.preventDefault();
    setSearchTerm(inputState);
  }
  return (
    <div>
      <h1>Posts:</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="search"
          value={inputState}
          onChange={(e) => setInputState(e.target.value)}
        />
        <button>Search</button>
      </form>

      {posts
        //this is if you want on each character typed in the input
        .filter((post) => {
          if (post.title.toLowerCase().includes(searchTerm.toLowerCase())) {
            return true;
          }
        })
        .map((onePost) => {
          return (
            <div className="post-card" key={onePost.id}>
              <Link to={`/posts/details/${onePost.id}`}>
                <h3>Title: {onePost.title}</h3>
              </Link>
              <h3>Body: {onePost.body}</h3>
            </div>
          );
        })}
    </div>
  );
};
