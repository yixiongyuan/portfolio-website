import React from "react";
import { useState, useEffect, useRef } from "react";
import Post from "../models/Post";

function PostCreate() {
  const [httpError, setHttpError] = useState(null);

  //message endpoint state
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [img, setImg] = useState(null);

  const fileInputRef = useRef();
  //display
  const [displayWarning, setDisplayWarning] = useState(false);
  const [displaySuccess, setDisplaySuccess] = useState(false);

  useEffect(() => {
    if (fileInputRef) {
      fileInputRef.current.value = null;
    }
  }, [img]);

  async function submitNewPost() {
    //const url = `${process.env.REACT_APP_API}/admin/secure/add/book`;

    const url = "http://localhost:3001/api/posts";

    if (title !== "" && location !== "" && date !== "") {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("date", date);
      formData.append("location", location);
      formData.append("image", img);

      const requestOptions = {
        method: "POST",
        body: formData,
      };

      const submitNewPostResponse = await fetch(url, requestOptions);

      //console.log(submitNewPostResponse);

      if (!submitNewPostResponse.ok) {
        throw new Error("Something went wrong");
      }

      setTitle("");
      setLocation("");
      setDate("");
      setImg(null);

      //   setDisplayWarning(false);
      //   setDisplaySuccess(true);
      // } else {
      //   setDisplayWarning(true);
      //   setDisplaySuccess(false);
      // }

      window.location.href = "/";
    }
  }

  return (
    <div
      name="postcreate"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-6xl font-bold inline border-b-4 border-gray-500">
            Post Create
          </p>
          <p className="py-6 text-2xl">
            Submit the form to update new activity
          </p>
        </div>

        <div className=" flex justify-center items-center">
          <form method="POST" className=" flex flex-col w-full md:w-1/2">
            <input
              type="text"
              name="title"
              placeholder="Enter title"
              required
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />

            <input
              type="date"
              name="time"
              placeholder="Enter activity time"
              required
              onChange={(e) => setDate(e.target.value)}
              value={date}
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />

            <input
              type="text"
              name="location"
              placeholder="Enter location"
              required
              onChange={(e) => setLocation(e.target.value)}
              value={location}
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />

            <input
              type="file"
              name="img"
              placeholder="Enter your photo"
              onChange={(e) => setImg(e.target.files[0])}
              ref={fileInputRef}
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></input>

            <button
              type="button"
              className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
              onClick={submitNewPost}
            >
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PostCreate;
