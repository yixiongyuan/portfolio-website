import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function About() {
  const links = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/yixiong-yuan-750187233/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/yixiongyuan",
    },
    {
      id: 3,
      child: (
        <>
          <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:yy3454@nyu.edu",
    },
    {
      id: 4,
      child: (
        <>
          <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/yixiong_resume_2023.pdf",
      style: "rounded-tr-md",
      download: true,
    },
  ];
  return (
    <div
      name="about"
      className="w-full h-1/3  mt-0 bg-gradient-to-b from-gray-950 to-black text-white"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full">
        <p className="text-6xl text-center font-bold inline mb-5">About</p>
        <div className="border-b-4 border-gray-500"></div>

        <p className="text-2xl  mt-5 w-full text-center">
          This website is a full-stack web application.
          <br />
          <br />
          Component: React.js + Node.js + MongoDB + AWS deployment
          <Link to="/create">.</Link>
        </p>
      </div>

      <ul class=" w-full pb-20 mt-12 flex justify-center gap-6 md:gap-8 ">
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className="transition  hover:-translate-y-2 duration-200"
          >
            <a href={href} rel="noreferrer" target="_blank" download={download}>
              {child}
            </a>
          </li>
        ))}
      </ul>

      <div className="w-full text-center pb-5">
        {" "}
        Copyright © Zachary Website
      </div>
    </div>
  );
}

export default About;
