import React from "react";
import HeroImage from "../assets/heroImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Portfolio from "./Portfolio";
import { Link } from "react-scroll";

function Home() {
  return (
    <div
      name="home"
      className="h-full w-full bg-gradient-to-b from-black to-gray-950 "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center px-4 md:flex-row">
        <div className="flex flex-col justify-center pt-20 md:pt-0">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            This is Yixiong Yuan
          </h2>

          <p className="text-gray-400 py-4 max-w-md text-xl">
            I'm graduated from NYU Tandon with a master's degree in computer
            engineering pursuing a full-time software engineer position.
            <br />
            <br />
            Welcome to my website and explore more details below!
          </p>

          <div className="flex md:justify-start justify-center items-center">
            <Link to="portfolio" smooth duration={500}>
              <button
                className="group text-white w-fit px-6 py-3 mt-2 flex rounded-md bg-gradient-to-r
                            from-cyan-500 to-blue-500"
              >
                Portfolio
                <span className="md:ml-1 group-hover:rotate-90 duration-300">
                  <MdOutlineKeyboardArrowRight size={25} />
                </span>
              </button>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="Zachary Yuan"
            className="rounded-2xl mt-10 md:mt-0 mx-auto w-2/3 md:w-full md:scale-50 z-0"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
