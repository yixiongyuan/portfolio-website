import { React, useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDot } from "react-icons/rx";
import Post from "../models/Post";

function PostDisplay() {
  const [posts, setPosts] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const [httpError, sethttpError] = useState(null);

  const [currentPage, setcurrentPage] = useState(1);

  const [booksPerPage] = useState(10);

  const [totalAmountOfBooks, settotalAmountOfBooks] = useState(0);

  const [totalPages, settotalPages] = useState(0);

  const [search, setSearch] = useState("");

  const [searchUrl, setSearchUrl] = useState("");

  const [categorySelection, setCategorySelection] = useState("Book category");

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const fetchPosts = async () => {
      // const baseUrl: string = `${process.env.REACT_APP_API}/books`;

      const baseUrl =
        "http://zachary-portfolio-env.eba-ts8rqyug.us-east-1.elasticbeanstalk.com/api/posts";
      //const baseUrl = "http://localhost:3001/api/posts";

      let url = "";

      if (searchUrl === "") {
        url = `${baseUrl}?page=${currentPage - 1}&size=${booksPerPage}`;
      } else {
        url = baseUrl + searchUrl;
      }

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const responseJson = await response.json();

      const responseData = responseJson.posts;

      // settotalAmountOfBooks(responseJson.page.totalElements);
      // settotalPages(responseJson.page.totalPages);

      const loadedPosts = [];

      for (const key in responseData) {
        const dateString = new Date(responseData[key].time);
        loadedPosts.push({
          title: responseData[key].title,
          date: dateString.toUTCString().split(":")[0].slice(0, -2),
          location: responseData[key].location,
          imagePath: responseData[key].imagePath,
        });
      }

      //console.log(loadedPosts);
      setPosts(loadedPosts);
      //console.log(posts);
      setIsLoading(false);
    };

    fetchPosts().catch((error) => {
      setIsLoading(false);
      sethttpError(error.message);
    });
    // 跳页时返回顶部
    //window.scrollTo(0, 0);
  }, []);

  // if (isLoading) {
  //   return <SpinnerLoading />;
  // }

  if (httpError) {
    return (
      <div className="container m-5">
        <p>{httpError}</p>
      </div>
    );
  }

  const searchHandleChange = () => {
    if (search === "") {
      setSearchUrl("");
    } else {
      setSearchUrl(
        `/search/findByTitleContaining?title=${search}&page=0&size=${booksPerPage}`
      );
    }
  };

  const categoryField = (value) => {
    if (
      value.toLowerCase() === "fe" ||
      value.toLowerCase() === "be" ||
      value.toLowerCase() === "data" ||
      value.toLowerCase() === "devops"
    ) {
      setCategorySelection(value);
      setSearchUrl(
        `/search/findByCategory?category=${value}&page=0&size=${booksPerPage}`
      );
    } else {
      setCategorySelection("All");
      setSearchUrl(`?page=0&size=${booksPerPage}`);
    }
  };

  const indexOfLastBook = currentPage * booksPerPage;

  const indexOfFirstBook = indexOfLastBook - booksPerPage;

  let lastItem =
    indexOfLastBook <= totalAmountOfBooks
      ? indexOfLastBook
      : totalAmountOfBooks;

  const paginate = (pageNumber) => {
    setcurrentPage(pageNumber);
  };

  const prevSlide = () => {
    const isFirst = index === 0;

    const newIndex = isFirst ? posts.length - 1 : index - 1;

    setIndex(newIndex);
  };

  const nextSlide = () => {
    const isLast = index === posts.length - 1;

    const newIndex = isLast ? 0 : index + 1;

    setIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setIndex(slideIndex);
  };

  return (
    <div
      name="Photo Album"
      className=" pt-20 bg-gradient-to-b from-gray-900 to-gray-800 w-full h-screen text-white md:h-screen"
    >
      <div className="flex flex-col justify-center max-w-screen-lg mx-auto h-full p-4">
        <div className="md:pb-2 text-center md:text-left">
          <p className="text-6xl font-bold inline border-b-4 border-gray-500">
            Photo Album
          </p>
          <p className="pt-6 text-2xl">Display the snapshots of daily life</p>
        </div>

        {isLoading || posts.length === 0 ? (
          <></>
        ) : (
          <div className=" w-full h-full m-auto pt-2 md:py-4 px-0 md:mb-5 group relative">
            <div
              style={{ backgroundImage: `url(${posts[index].imagePath})` }}
              className="mt-0 w-full h-full rounded-2xl bg-center bg-contain md:bg-cover bg-no-repeat z-0 relative"
            >
              <div
                class="hidden group-hover:block absolute bottom-0 px-4 md:py-3 
              rounded-b-2xl bg-gray-500/60 w-full text-xl md:text-3xl"
              >
                <h1 class="text-white font-semibold text-2xl md:text-4xl mb-1 md:mb-2 mt-0 capitalize">
                  {posts[index].title}
                </h1>
                <p class="text-gray-200 italic capitalize">
                  {posts[index].location}
                </p>
                <p class="text-gray-200 italic">
                  <time pubdate>{posts[index].date}</time>
                </p>
              </div>
              {/*<div className="absolute bottom-0 translate-y-[100%] right-1/2 translate-x-[50%] content-center justify-center text-white text-3xl ">
                 <p></p>
                <p></p>
                <p>{posts[index].date}</p> 
              </div>*/}
            </div>

            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-1 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
              <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>

            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-1 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
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
        )}
      </div>
    </div>
  );
}

export default PostDisplay;
