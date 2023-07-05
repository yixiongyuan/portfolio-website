import { React, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDot } from "react-icons/rx";

function Slider() {
  const sliders = [
    {
      id: 1,
      src: "/daily/birdland_theater.jpg",
      title: "HTML",
      text: "Birdland Theather : Jazz Show",
    },
    {
      id: 2,
      src: "/daily/washington_DC.jpg",
      title: "HTML",
      text: "Washington DC Sakura",
    },
    {
      id: 3,
      src: "/daily/dragon_boat_festival.jpg",
      title: "HTML",
      text: "Rice Dumpling",
    },
    {
      id: 4,
      src: "/daily/moma.jpg",
      title: "HTML",
      text: "Museum of Modern Art",
    },
    {
      id: 5,
      src: "/daily/sixflag.jpg",
      title: "HTML",
      text: "Six Flag : Happy Children's Day",
    },
  ];

  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    const isFirst = index === 0;

    const newIndex = isFirst ? sliders.length - 1 : index - 1;

    setIndex(newIndex);
  };

  const nextSlide = () => {
    const isLast = index === sliders.length - 1;

    const newIndex = isLast ? 0 : index + 1;

    setIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setIndex(slideIndex);
  };

  return (
    <div
      name="dailyAlbum"
      className="bg-gradient-to-b from-black to-gray-800 w-full h-full text-white md:h-screen"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-4">
          <p className="text-6xl font-bold inline border-b-4 border-gray-500">
            Daily Album
          </p>
          <p className="py-6 text-2xl">
            Check out some snapshots from daily life activites
          </p>
        </div>

        <div className=" w-full h-screen m-auto py-4 px-0 relative group">
          <div
            style={{ backgroundImage: `url(${sliders[index].src})` }}
            className="w-full h-full rounded-2xl bg-center bg-contain bg-no-repeat transition-all duration-500 relative"
          >
            <div className="absolute bottom-0 translate-y-[100%] right-1/2 translate-x-[50%] content-center justify-center text-white text-3xl ">
              <p>{sliders[index].text}</p>
            </div>
          </div>

          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-10 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>

          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-10 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>

          {/* <div className='flex top-4 justify-center py-2'>
            {sliders.map((slide,slideIndex) => (
                <div 
                    key={slideIndex} 
                    className='text-2xl cursor-pointer'
                    onClick={() => goToSlide(slideIndex)}
                > 
                    <RxDot/>
                </div>
            ))}
        </div> */}
        </div>
      </div>
    </div>
  );
}

export default Slider;
