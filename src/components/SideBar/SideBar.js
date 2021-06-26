import React, { useContext } from "react";
import { UserContext } from "../../App";
import './SideBar.css'
import {Link} from "react-router-dom"
const SideBar = () => {

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  

  console.log(loggedInUser)

  return (
    <div>
      <div>
        <div className="sidebar">
          <Link className="active" to="/home">
            Home
          </Link>
          <Link to="/login">login</Link>
          {loggedInUser.email && <div>
          <Link to="/addEvent">Upload Blog</Link>
          <Link to="/manageBlog">Manage Blog</Link>
          <Link type="button" className="btn btn-outline-info" onClick={()=>setLoggedInUser({})}>LogOut</Link>
          </div>}
          

        </div>
      </div>
    </div>
  );
};

export default SideBar;
