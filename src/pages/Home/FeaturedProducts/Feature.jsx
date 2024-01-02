import { useContext, useState } from "react";
import { BiSolidUpvote } from "react-icons/bi";
import useAxiosPublic from "../../../hooks/useAxiosPublic/useAxiosPublic";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";

const Feature = ({ feature, refetch }) => {
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(false);
  // console.log(feature);
  const { _id, up_vote, tags, product_name, image_url } = feature;
  // useEffect(() => {
  //   if (!user) {
  //     setDisabled(true);
  //   }
  // }, [user]);
  const [upVote, setUpVote] = useState(up_vote + 1);
  const handleUpVote = (_id) => {
    // console.log(upVote);
    if (!user) {
      setDisabled(true);
      return navigate("/login");
    }
    setUpVote(upVote + 1);

    axiosPublic
      .patch(`/features/${_id}`, { upVote })
      .then((res) => {
        // console.log(res.data);
        // console.log("state", upVote);
        if (res.data.modifiedCount > 0) {
          refetch();
          toast.success(" UpVote Successful!");
          setDisabled(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="card  shadow-[#56b342]  shadow-lg">
      <figure className=" pt-10">
        <img
          src={image_url}
          alt={product_name}
          className="rounded-xl h-[300px]"
        />
      </figure>
      <div className="card-body items-center text-center">
        <Link to={`/featuredProduct/${_id}`}>
          <h2 className="card-title hover:font-bold hover:text-[#0e588d]">
            {product_name}
          </h2>
        </Link>
        <p className="link link-primary">{tags}</p>
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
  );
};

export default Feature;
