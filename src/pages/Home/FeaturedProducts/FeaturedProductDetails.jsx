import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import SectionTitle from "../../../shared/SectionTitle";
import Navbar from "../Navbar";
import Loader from "../../../components/Loader";

const FeaturedProductDetails = () => {
  const [product, setProduct] = useState([]);
  const [loader, setLoader] = useState(false);
  const loadedData = useLoaderData();
  const { id } = useParams();
  // console.log(loadedData);
  useEffect(() => {
    setLoader(true);
    const data = loadedData?.find((d) => d._id === id);
    setProduct(data);
    setLoader(false);
  }, [id, loadedData]);

  if (loader) {
    return <Loader />;
  }
  const {
    _id,
    up_vote,
    // tags,
    // release_date,
    // product_type,
    product_name,
    product_details,
    image_url,
    external_link,
  } = product;
  return (
    <div>
      <Navbar></Navbar>
      <div className=" bg-base-200">
        <div className="py-20 hero-content flex-col lg:flex-row">
          <img src={image_url} className="w-[500px] rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{product_name}</h1>
            {/* <p>{tags}</p> */}
            <p className="text-xl mt-3">Total Up Vote: {up_vote}</p>

            <p className="py-2 text-xl">{product_details}</p>

            <div>
              <h1 className="text-xl">For More Info</h1>
              <Link className="link link-hover">{external_link}</Link>
            </div>
            <div className="join join-vertical lg:join-horizontal mt-2">
              <Link
                to={`/addReview/${_id}`}
                className="btn  btn-outline join-item"
              >
                <button>Review</button>
              </Link>
              <Link to={"/report"} className="btn join-item btn-outline">
                <button>Report</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <SectionTitle title1={"All Reviews"}></SectionTitle>
      </div>
    </div>
  );
};

export default FeaturedProductDetails;
