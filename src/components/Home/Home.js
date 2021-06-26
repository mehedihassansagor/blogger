import React from "react";
import SideBar from "../SideBar/SideBar";
import Blog from "../Blog/Blog";

const Home = () => {
  return (
    <div className="row">
      <div className="col-md-2">
        <SideBar />
      </div>
      
      <div className="col-md-10">
      <Blog />
      </div>
    </div>
  );
};

export default Home;
