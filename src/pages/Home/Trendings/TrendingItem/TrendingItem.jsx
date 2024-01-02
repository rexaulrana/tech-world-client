import { BiSolidUpvote } from "react-icons/bi";
import useAxiosPublic from "../../../../hooks/useAxiosPublic/useAxiosPublic";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../provider/AuthProvider";

const TrendingItem = ({ item }) => {
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  // console.log(item);
  const {
    _id,
    // external_link,
    image_url,
    // product_details,
    up_vote,
    tags,
    // release_date,
    product_name,
  } = item;
  // useEffect(() => {
  //   if (!user) {
  //     setDisabled(true);
  //   }
  // }, [user]);
  const [upVote, setUpVote] = useState(up_vote + 1);

  const handleUpVote = (_id) => {
    if (!user) {
      setDisabled(true);
      return navigate("/login");
    }
    // console.log(upVote);
    setUpVote(upVote + 1);

    axiosPublic
      .patch(`/trending/${_id}`, { upVote })
      .then((res) => {
        console.log(res.data);
        // console.log("state", upVote);
        if (res.data.modifiedCount > 0) {
          // refetch();
          toast.success(" UpVote Successful!");
          setDisabled(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="card card-compact border-2 mt-5 h-[350px] w-full md:h-[400px]  bg-base-100 shadow-xl ">
        <figure>
          <img
            className="w-[400px] rounded-md h-screen"
            src={image_url}
            alt={product_name}
          />
        </figure>
        <div className="card-body text-center">
          <Link to={`/products`}>
            <h2 className="text-2xl font-semibold hover: hover:text-[#0e588d]">
              {product_name}
            </h2>
          </Link>
          <p className="link link-primary">{tags}</p>
          <div className="card-actions justify-center">
            <div className="bg-[#0e588d] py-3 mt-3">
              <button
                disabled={disabled}
                onClick={() => handleUpVote(_id)}
                title="UPVOTE"
                className="p-3"
              >
                <BiSolidUpvote className=" text-2xl hover:text-red-600" />
                <div></div>
              </button>
              <span className="text-black font-medium text-2xl border-l-4  border-green-500 p-4">
                {upVote}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingItem;
