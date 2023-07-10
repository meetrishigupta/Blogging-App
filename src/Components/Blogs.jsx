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
      <hr />
      {blogs.map((i, index) => (
        <div key={index}>
          <h1>{i.title}</h1>
          <h4>{i.description}</h4>
          <h2>{i.date}</h2>
          <img
            src={URL.createObjectURL(i.image)}
            alt="Uploaded"
            style={{ width: "200px", height: "200px" }}
          />
        </div>
      ))}
    </>
  );
}
