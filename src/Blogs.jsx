import React, { useState } from "react";
import "./style.css";
export default function Blog() {
  const [title, newTitle] = useState();
  const [description, newDescription] = useState();
  const [image, setImage] = useState();
  const [date, newDate] = useState();
  const [blogs, setBlogs] = useState([]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setBlogs([{ title, description, image, date }, ...blogs]);
  };
  return (
    <>
      <form>
        <label for="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          onChange={(e) => newTitle(e.target.value)}
        ></input>
        <label for="description">Description:</label>
        <textarea
          rows="4"
          onChange={(e) => newDescription(e.target.value)}
          cols="50"
          type="textarea"
          id="description"
          name="description"
        ></textarea>
        <label for="image">Image Upload:</label>
        <input
          type="file"
          id="image"
          name="image"
          onChange={handleImageChange}
        ></input>
        <label for="date">Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          onChange={(e) => newDate(e.target.value)}
        ></input>
        <input type="submit" onClick={handleSubmit} value="Publish"></input>
      </form>
      <hr />
      {blogs.map((i) => (
        <div>
          <h1>{i.title}</h1>
          <h4>{i.description}</h4>
          <h2>{date}</h2>

          <img
            src={i.image}
            alt="Uploaded"
            style={{ width: "200px", height: "200px" }}
          />
        </div>
      ))}
    </>
  );
}
