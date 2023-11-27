// import Navbar from "./Navbar";

import Banner from "./Banner";
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts";
import Trending from "./Trendings/Trending";
import Navbar from "../Home/Navbar";
const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <FeaturedProducts></FeaturedProducts>
      <Trending></Trending>
    </div>
  );
};

export default Home;
