import React, { useState } from "react";
import "./style.css"


export default function Blog() {
  const [formData, setformData] = useState({title:"",description:"",date:""});
const [blogs, setBlogs] = useState([]);

  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];
  //   setformData(URL.createObjectURL(file));
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    setBlogs([{ title: formData.title, description: formData.description, date: formData.date }, ...blogs]);

  };
  return (
    <>
      <form>
        <label for="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          onChange={(e) => setformData({title: e.target.value, description: formData.description, date: formData.date })}
        ></input>
        <label for="description">Description:</label>
        <textarea
          rows="4"
          onChange={(e) => setformData({title: formData.title, description: e.target.value, date: formData.date})}
          cols="50"
          type="textarea"
          id="description"
          name="description"
        ></textarea>
        <label for="image">Image Upload:</label>
        {/* <input
          type="file"
          id="image"
          name="image"
          onChange={handleImageChange}
        ></input> */}
        <label for="date">Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          onChange={(e) => setformData({title: formData.title, description: formData.description, date: e.target.value})}
        ></input>
        <input type="submit" onClick={handleSubmit} value="Publish"></input>
      </form>
      <hr />
      {blogs.map((i) => (
        <div>
          <h1>{i.title}</h1>
          <h4>{i.description}</h4>
          <h2>{i.date}</h2>

          <img
            // src={i.formData.image}
            alt="Uploaded"
            style={{ width: "200px", height: "200px" }}
          />
        </div>
      ))}
    </>
  );
}
