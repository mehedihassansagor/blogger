import React from "react";
import {Link} from "react-router-dom"

const BlogCart = ({ blog }) => {
  console.log(blog.name);
  const {_id} = blog;
  return (
    <Link to={`/detail/${_id}`} style={{textDecoration:"none", color:"black"}}>
    <div  className="mt-5 ">
      <div className="card border border-warning" style={{ width: "18rem" }}>
        <img src={blog.imageURL} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{blog.name}</h5>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default BlogCart;
