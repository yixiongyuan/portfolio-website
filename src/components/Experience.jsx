import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nodejs from "../assets/node.png";
import graphql from "../assets/graphql.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import docker from "../assets/docker.png";
import springboot from "../assets/springboot.png";
import linux from "../assets/linx.png";
import mysql from "../assets/mysql.png";
import angular from "../assets/angular.png";
import aws from "../assets/aws.png";

function Experience() {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 3,
      src: angular,
      title: "Angular",
      style: "shadow-red-500",
    },
    {
      id: 4,
      src: springboot,
      title: "SpringBoot",
      style: "shadow-green-500",
    },
    {
      id: 5,
      src: reactImage,
      title: "React",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: nodejs,
      title: "Node JS",
      style: "shadow-green-300",
    },
    {
      id: 7,
      src: linux,
      title: "Linux",
      style: "shadow-yellow-400",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 9,
      src: docker,
      title: "Docker",
      style: "shadow-sky-400",
    },
  ];
  return (
    <div>
      <div
        name="experience"
        className=" bg-gradient-to-b from-gray-800 to-gray-900 w-full h-full "
      >
        <div className="top-0 max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
          <div className="text-center md:text-left">
            <p className="text-6xl font-bold border-b-4 border-gray-500 p-2 inline">
              Experience
            </p>
            <p className="py-6 text-2xl">
              Technologies and tools I've worked with
            </p>
          </div>

          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
            {techs.map(({ id, src, title, style }) => (
              <div
                key={id}
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              >
                <img src={src} alt="" className="w-20 mx-auto h-[250]" />
                <p className="mt-4">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
