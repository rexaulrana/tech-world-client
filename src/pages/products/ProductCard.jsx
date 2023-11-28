import { useState } from "react";
import { BiSolidUpvote } from "react-icons/bi";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic/useAxiosPublic";
import toast from "react-hot-toast";

const ProductCard = ({ product, refetch }) => {
  const axiosPublic = useAxiosPublic();
  const [disabled, setDisabled] = useState(false);
  // console.log(feature);
  const { _id, up_vote, tags, product_name, image_url } = product;

  const [upVote, setUpVote] = useState(up_vote + 1);
  const handleUpVote = (id) => {
    // console.log(id);
    setUpVote(upVote + 1);

    axiosPublic
      .patch(`/product/${id}`, { upVote })
      .then((res) => {
        console.log(res?.data);
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
    <div className="card h-[400px]  shadow-[#56b342]  shadow-lg">
      <figure className="px-10 pt-10">
        <img
          src={image_url}
          alt={product_name}
          className="rounded-xl h-[400px]"
        />
      </figure>
      <div className="card-body items-center text-center">
        <Link to={`/productDetails/${_id}`}>
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
          </button>
          <span className="text-black font-medium text-2xl border-l-4  border-green-500 p-4">
            {upVote}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
