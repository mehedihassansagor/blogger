import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../../App";
import SideBar from "../../SideBar/SideBar"

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  console.log(loggedInUser)

  const [admins, setAdmins] = useState({});

  const [error, setError] = useState("none");
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  useEffect(() => {
    fetch("https://vast-hamlet-26858.herokuapp.com/adminDetails")
      .then((res) => res.json())
      .then((data) => setAdmins(data));
  }, []);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data, event) => {
    admins.forEach((admin) => {
      if (data.email === admin.email && data.password === admin.password) {
        const signedInUser = {
          isSignedIn: true,
          displayName: admin.name,
          email: admin.email,
          password: admin.password,
        };
        setLoggedInUser(signedInUser);
        setError("none");
        history.replace(from);
      } else {
        setError("block");
      }
    });
  };
  return (
    <div className="row">
        <div className="col-md-2 ">
       <SideBar />
        </div>
        <div className="container pt-5 mt-5 col-md-6">
      <div className="row">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group pb-3">
            <label htmlFor="email" className="pb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="e.g example@example.com"
              aria-invalid={errors.email ? "true" : "false"}
              {...register("email", { required: true })}
              id="email"
              className="form-control"
              autoComplete="off"
            />
            {errors.email && (
              <span role="alert" className="text-danger">
                {" "}
                Email required{" "}
              </span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="password" className="pb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="e.g At least 8 character"
              aria-invalid={errors.password ? "true" : "false"}
              {...register("password", { required: true, minLength: 8 })}
              id="password"
              className="form-control"
              autoComplete="off"
            />
            {errors.password && (
              <span role="alert" className="text-danger">
                {" "}
                Password required & must contain at least 8 character{" "}
              </span>
            )}
          </div>

          <br />

          <div className="form-group pb-3 text-center" style={{display:error}}>
            <span style={{ color: "red" }}>Email or Password In-Correct</span>
          </div>

          <div className="form-group pb-3">
            <input
              type="submit"
              name="submitLogin"
              className="btn btn-primary form-control"
            />
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Login;
