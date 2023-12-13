// import Navbar from "./Navbar";

import Banner from "./Banner";
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts";
import Trending from "./Trendings/Trending";
import Navbar from "../Home/Navbar";
import Footer from "./Footer";
import Diff from "./Diff";
const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Diff></Diff>
      <FeaturedProducts></FeaturedProducts>
      <Trending></Trending>
      <Footer></Footer>
    </div>
  );
};

export default Home;
