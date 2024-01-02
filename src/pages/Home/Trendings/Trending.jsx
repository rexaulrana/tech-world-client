import { useEffect, useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic/useAxiosPublic";
import SectionTitle from "../../../shared/SectionTitle";
import TrendingItem from "./TrendingItem/TrendingItem";
import Marquee from "react-fast-marquee";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loader from "../../../components/Loader";

// import "./trending.css";
const Trending = () => {
  const axiosPublic = useAxiosPublic();
  const [largest, setLargest] = useState(true);
  const [trending, setTrending] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    axiosPublic.get("/trending").then((res) => {
      // console.log(res?.data);
      setTrending(res?.data);
      setLoader(false);
    });
  }, [largest, axiosPublic]);
  if (loader) {
    return <Loader></Loader>;
  }
  // console.log(trending);
  // let settings = {
  //   dots: true,
  //   infinite: true,
  //   // className: "center",
  //   slidesToShow: 2,
  //   slidesToScroll: 1,
  //   // arrows: true,

  //   autoPlay: true,
  //   autoplaySpeed: 500,

  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         initialSlide: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };
  return (
    <div>
      <SectionTitle title1={"Trending"}></SectionTitle>
      <div>
        <div className="flex justify-center items-center text-3xl">
          <h1 className=" font-medium mr-2">Filter:</h1>
          <button
            onClick={() => setLargest(!largest)}
            className="btn btn-outline bg-[#56b342] text-white"
          >
            {largest ? "Largest Voted" : "short voted"}
          </button>
        </div>
      </div>
      <div className="gap-5">
        {/* <Slider className="mt-5" {...settings}> */}
        <Marquee className="gap-5" pauseOnHover={true}>
          {trending?.map((trendingItem) => (
            <TrendingItem
              key={trendingItem._id}
              item={trendingItem}
            ></TrendingItem>
          ))}
        </Marquee>
        {/* </Slider> */}
      </div>
    </div>
  );
};

export default Trending;
