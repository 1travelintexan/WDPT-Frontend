import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ProductDetail = () => {
  const [post, setPost] = useState({});
  const [errorState, setErrorState] = useState(null);
  const { postId } = useParams();

  useEffect(() => {
    async function getOnePost() {
      try {
        const { data } = await axios.get(
          `https://dummyjson.com/posts/${postId}`
        );
        setPost(data);
        console.log(data);
      } catch (error) {
        console.log(error);
        setErrorState("something went wrong");
      }
    }
    getOnePost();
  }, [postId]);

  return (
    <div>
      {errorState ? (
        <p>Error: {errorState}</p>
      ) : (
        <>
          <h2>Title: {post.title}</h2>
          <h6>Body: {post.body}</h6>
          <h6>Views: {post.views}</h6>
        </>
      )}
    </div>
  );
};
