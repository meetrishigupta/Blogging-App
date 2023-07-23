



import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import { db } from "../FirebaseInit";
import { collection, doc, setDoc, getDocs } from "firebase/firestore";

export default function Blog() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: null,
    date: "",
  });
  const [blogs, setBlogs] = useState([]);
  const Titleref = useRef(null);
  const [imagePreview, setImagePreview] = useState(""); // Separate state for image preview URL

  useEffect(() => {
    Titleref.current.focus();
    // Clean up the object URL when the component unmounts
    return () => {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);

  useEffect(() => {
    async function fetchData() {
      const snapshot = await getDocs(collection(db, "blogs"));
      const blogsData = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      // Set the fetched blogs to the state using useState
      setBlogs(blogsData);
      console.log(blogsData);
    }

    fetchData();
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });

    // Generate image preview URL
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    } else {
      setImagePreview("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setBlogs((prevBlogs) => [
      ...prevBlogs,
      {
        title: formData.title,
        description: formData.description,
        image: formData.image,
        date: formData.date,
      },
    ]);

    // Add a new document with a generated id.
    const docRef = doc(collection(db, "blogs"));
    await setDoc(docRef, {
      Title: formData.title,
      Description: formData.description,
      Date: formData.date,
      setdate: new Date(),
    });

    setFormData({
      title: "",
      description: "",
      image: null,
      date: "",
    });
  };

  const removeBlog = (i) => {
    setBlogs((prevBlogs) => prevBlogs.filter((blog, index) => index !== i));
  };

  return (
    <>
        <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          ref={Titleref}
          onChange={(e) =>
            setFormData({
              ...formData,
              title: e.target.value,
            })
          }
          required
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
          required
        />
        <label htmlFor="image">Image Upload:</label>
        <input
          type="file"
          id="image"
          name="image"
          onChange={handleImageChange}
          style={{
            backgroundColor: formData.image ? "green" : "red",
          }}
          required
        />
        <label className="fielddate" htmlFor="date">
          Date:
        </label>
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
          required
        />
        <button type="submit">Publish</button>
      </form>

      <h1 className="latesth1">Latest Posts</h1>
      {blogs.map((blog, i) => (
        <div className="wrapper" key={i}>
          <div className="image-wrapper">
            {blog.image && <img src={URL.createObjectURL(blog.image)} alt="Uploaded" />}
            <div className="datewrapper">
              <p>{blog.date}</p>
            </div>
          </div>
          <div className="content-wrapper">
            <h2>{blog.title}</h2>
            <p>{blog.description}</p>
            <a className="delelteimage" onClick={() => removeBlog(i)}>
              Delete
            </a>
          </div>
        </div>
      ))}
    </>
  );
}
