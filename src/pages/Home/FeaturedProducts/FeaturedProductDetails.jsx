import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import SectionTitle from "../../../shared/SectionTitle";
import Navbar from "../Navbar";
import Loader from "../../../components/Loader";
import { AuthContext } from "../../../provider/AuthProvider";
import useAxiosPublic from "../../../hooks/useAxiosPublic/useAxiosPublic";
import Reviews from "./Review/Reviews";
import toast from "react-hot-toast";

const FeaturedProductDetails = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);
  const [product, setProduct] = useState([]);
  const [loader, setLoader] = useState(false);
  const loadedData = useLoaderData();
  const { id } = useParams();
  // console.log(loadedData);
  useEffect(() => {
    setLoader(true);
    const data = loadedData?.find((d) => d?._id === id);
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
  // console.log(id, _id);
  // handle report button
  const handleReport = () => {
    const reportedItem = {
      reportedId: _id,
      product_name,
      image_url,
      personEmail: user?.email,
      status: true,
    };
    // console.log("report", reportedItem);
    axiosPublic
      .post("/reports", reportedItem)
      .then((res) => {
        console.log(res.data);
        if (res?.data?.message) {
          toast.error("Already Reported");
        } else if (res?.data?.insertedId) {
          toast.success("Report submitted successfully");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
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

              <button
                onClick={() => handleReport(product)}
                className="btn join-item btn-outline"
              >
                Report
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <SectionTitle title1={"All Reviews"}></SectionTitle>

        <Reviews></Reviews>
      </div>
    </div>
  );
};

export default FeaturedProductDetails;
