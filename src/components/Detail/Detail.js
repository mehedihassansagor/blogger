import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SideBar from "../SideBar/SideBar"

const Detail = () => {

    const [blogs, setBlog] = useState([]);
  console.log(blogs);

  useEffect(() => {
    fetch("https://vast-hamlet-26858.herokuapp.com/event")
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, [blogs._id]);

    const {_id} = useParams()
   const blog = blogs.find(b => b._id === _id)
    return (
        <div className="row">
            <div className="col-md-2">
                <SideBar />
            </div>
            <div className="col-md-10 ">
                    <div className="mt-3">
                    <h1 className="text-center fw-light">{blog?.name}</h1>
                    <img className="img-fluid mt-2" src={blog?.imageURL} alt="" />

                    <div className="bg-light border border-info p-3 mt-2">
                    <p>{blog?.description}</p>
                    </div>
                    </div>
            </div>
        </div>
    );
};

export default Detail;