import axios from "axios";
import { useState } from "react";

const AddImage = () => {
  const [image, setImage] = useState("");
  function handleAddImage(event) {
    event.preventDefault();
    const myFormData = new FormData();
    myFormData.append("file", image);
    myFormData.append("upload_preset", "IronhackWD");
    axios
      .post(
        "https://api.cloudinary.com/v1_1/dxurcuyga/image/upload",
        myFormData
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
  return (
    <form onSubmit={handleAddImage}>
      <input
        type="file"
        onChange={(e) => {
          setImage(e.target.files[0]);
        }}
      />
      <button>Submit</button>
    </form>
  );
};
export default AddImage;
