// import Navbar from "./Navbar";

import Banner from "./Banner";
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts";
import Trending from "./Trendings/Trending";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <FeaturedProducts></FeaturedProducts>
      <Trending></Trending>
    </div>
  );
};

export default Home;
