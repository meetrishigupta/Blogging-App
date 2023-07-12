import React, { useState } from "react";
import "./style.css";

export default function Blog() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: null,
    date: "",
  });
  const [blogs, setBlogs] = useState([]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBlogs([
      {
        title: formData.title,
        description: formData.description,
        image: formData.image,
        date: formData.date,
      },
      ...blogs,
    ]);
    setFormData({
      title: "",
      description: "",
      image: null,
      date: "",
    });
  };
const readMore = ()=>{
  if(formData.description>=)
}
  return (
    <>
      <form>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={(e) =>
            setFormData({
              ...formData,
              title: e.target.value,
            })
          }
        />
        <label htmlFor="description">Description:</label>
        <textarea
          rows="4"
          cols="50"
          type="textarea"
          id="description"
          name="description"
          value={formData.description}
          onChange={(e) =>
            setFormData({
              ...formData,
              description: e.target.value,
            })
          }
        />
        <label htmlFor="image">Image Upload:</label>
        <input
          type="file"
          id="image"
          name="image"
          onChange={handleImageChange}
        />
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={(e) =>
            setFormData({
              ...formData,
              date: e.target.value,
            })
          }
        />
        <input type="submit" onClick={handleSubmit} value="Publish" />
      </form>
      <h1 className="latesth1">
        Latest Posts
      </h1>
      {blogs.map((i, index) => (
        <div className="wrapper" key={index}>
          <div className="image-wrapper">
            <img
            src={URL.createObjectURL(i.image)}
            alt="Uploaded"
          />
            <div className="datewrapper">
              <p>
                <h2>{i.date}</h2>
              </p>
            </div>
            </div>
            <div className="content-wrapper">
              <h2>{i.title}</h2>
              <p>{i.description}</p>
              <p>Read More</p>
              <div className="delelteimage">
                <img src="./images/delete.svg"></img>
              </div>
            </div>
        </div>
      ))} 

    </>
  );
}