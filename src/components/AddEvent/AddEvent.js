import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import './AddEvent.css'
import SideBar from "../SideBar/SideBar";

const AddEvent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [imageURL, setImageURL] = useState(null);

  const onSubmit = (data) => {
    const eventData = {
      name: data.name,
      description: data.description,
      imageURL: imageURL,
    };

    const url = `https://vast-hamlet-26858.herokuapp.com/addEvent`;
    console.log(eventData);
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(eventData),
    }).then((res) => console.log("database Connected", res));
  };

  const handleImageUpload = (e) => {
    console.log(e.target.files[0]);

    const imageData = new FormData();
    imageData.set("key", "798767f30df3dcdc7763cb42cb4936d6");
    imageData.append("image", e.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
        console.log(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="row">
      <div className="col-md-2 ">
        <SideBar />
      </div>

      <div className="col-md-8">
        <form align="center" onSubmit={handleSubmit(onSubmit)}>
          <h1>Upload blog</h1>
          <input  className = "input-style"
            placeholder="name of Tour"
            name="name"
            {...register("name")}
          />
          <br />
          <br />
          <textarea
            name="description" className="text-area"
            placeholder="description"
            {...register("description")}
          />
          <br />
          <br />
          <input className = "input-style" type="file" onChange={handleImageUpload} />

          {errors.exampleRequired && <span>This field is required</span>}
          <br />
          <br />
          {/* <input   type="submit" /> */}
          <button type="submit" class="btn btn-primary">
            SUBMIT
          </button>
        </form>
      </div>
      <div className="col-md-2">

      </div>
    </div>
  );
};

export default AddEvent;