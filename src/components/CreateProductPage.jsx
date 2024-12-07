import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const CreateProductPage = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [views, setViews] = useState(0);

  //on any page to get the global data
  const { currentUser } = useContext(AuthContext);
  console.log("current user", currentUser);
  function handleAddPost(e) {
    //first always stop the form from refreshing
    e.preventDefault();
    //second construct your object that you want to send
    const postToCreate = {
      title,
      body,
      views,
      userId: 5,
    };
    console.log("Adding a post", postToCreate);

    // //sending a POST request with fetch
    // fetch("https://dummyjson.com/posts/add", {
    //   method: "POST", //the other types would be (GET, PUT, PATCH, DELETE)
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(postToCreate),
    // })
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((err) => console.log(err));

    //Axios post request
    axios
      .post("https://dummyjson.com/posts/add", postToCreate)
      .then(({ data }) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <h1>Create a Post</h1>
      <form onSubmit={handleAddPost}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </label>
        <label>
          Body:
          <input
            type="text"
            value={body}
            onChange={(event) => {
              setBody(event.target.value);
            }}
          />
        </label>
        <label>
          Views:
          <input
            type="number"
            value={views}
            onChange={(event) => {
              setViews(event.target.value);
            }}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};
