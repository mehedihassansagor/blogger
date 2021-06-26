import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import SideBar from "../SideBar/SideBar"

const ManageBlog = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const [blogs, setBlog] = useState([]);

  useEffect(() => {
    fetch("https://vast-hamlet-26858.herokuapp.com/event")
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, []);

  const deletePost = (id) => {
    fetch(`https://vast-hamlet-26858.herokuapp.com/deleteBlog/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          const newBlog = blogs.filter((blog) => blog._id !== id);
          setBlog(newBlog);
        console.log(newBlog);
        }
      })
      .catch((err) => {})
  };
  return (
    <div className="row">
        <div className= "col-md-2">
            <SideBar/>
        </div>
        <div className="container col-md-10">
      <table className="table">
        <thead>
          <tr>
            <th>name</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog) => (
            <tr>
              <td>{blog.name}</td>
              <td>
                <button onClick={() => deletePost(blog._id)}>DELETE</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default ManageBlog;
