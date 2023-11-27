import { useEffect, useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic/useAxiosPublic";
import SectionTitle from "../../../shared/SectionTitle";
import TrendingItem from "./TrendingItem/TrendingItem";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Trending = () => {
  const axiosPublic = useAxiosPublic();
  const [largest, setLargest] = useState(true);
  const [trending, setTrending] = useState([]);
  useEffect(() => {
    axiosPublic(`/trending?sort=${largest ? "largest" : "short"}`).then(
      (res) => {
        // console.log(res?.data);
        setTrending(res?.data);
      }
    );
  }, [largest, axiosPublic]);

  // console.log(trending);
  const settings = {
    dots: true,
    infinite: true,
    // className: "center",
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    autoPlay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <SectionTitle title1={"Trending"}></SectionTitle>
      <div>
        <div className="flex justify-start items-center">
          <h1 className=" font-medium mr-2">Filter:</h1>
          <button
            onClick={() => setLargest(!largest)}
            className="btn btn-outline bg-[#56b342] text-white"
          >
            {largest ? "Largest Voted" : "short voted"}
          </button>
        </div>
      </div>
      <div className="">
        <Slider className="mr-8 mt-5" {...settings}>
          {trending?.map((trendingItem) => (
            <TrendingItem
              key={trendingItem._id}
              item={trendingItem}
            ></TrendingItem>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Trending;
