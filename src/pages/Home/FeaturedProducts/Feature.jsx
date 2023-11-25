import { BiSolidUpvote } from "react-icons/bi";

const Feature = ({ feature }) => {
  console.log(feature);
  const { up_vote, tags, product_name, image_url } = feature;
  return (
    <div className="card   shadow-2xl">
      <figure className="px-10 pt-10">
        <img src={image_url} alt={product_name} className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{product_name}</h2>
        <p className="link link-primary">{tags}</p>
        <div className="bg-[#0e588d] py-3 mt-3">
          <button title="UPVOTE" className="p-4">
            <BiSolidUpvote />
            <div></div>
          </button>
          <span className="text-black font-medium text-2xl border-l-4  border-green-500 p-4">
            {up_vote}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Feature;
