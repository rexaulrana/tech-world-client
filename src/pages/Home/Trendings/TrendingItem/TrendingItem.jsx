import { BiSolidUpvote } from "react-icons/bi";
import useAxiosPublic from "../../../../hooks/useAxiosPublic/useAxiosPublic";
import { useState } from "react";
import toast from "react-hot-toast";

const TrendingItem = ({ item }) => {
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
  const [upVote, setUpVote] = useState(up_vote + 1);
  const handleUpVote = (_id) => {
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
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className="card card-compact  h-[300px]  md:h-[300px] bg-base-100 shadow-xl ">
        <figure>
          <img src={image_url} alt={product_name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product_name}</h2>
          <p className="link link-primary">{tags}</p>
          <div className="card-actions justify-center">
            <div className="bg-[#0e588d] py-3 mt-3">
              <button
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