import React, { useEffect, useState } from "react";
import BlogCart from "../Blog/BlogCart";
import './Blog.css'

const Blog = () => {
  const [blogs, setBlog] = useState([]);
  console.log(blogs);

  useEffect(() => {
    fetch("https://vast-hamlet-26858.herokuapp.com/event")
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, [blogs._id]);

  return (
    <div className=" col-s-12 col-s-6 blog-style">
      {blogs.map((blog) => (
        <BlogCart blog={blog}></BlogCart>
      ))}
    </div>
  );
};

export default Blog;
