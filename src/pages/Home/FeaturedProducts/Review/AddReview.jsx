import { useContext } from "react";
import SectionTitle from "../../../../shared/SectionTitle";
import { AuthContext } from "../../../../provider/AuthProvider";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosPublic from "../../../../hooks/useAxiosPublic/useAxiosPublic";
import toast from "react-hot-toast";

const AddReview = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const { id } = useParams();
  const handleAddReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const rating = parseFloat(form.rating.value);
    const comment = form.comment.value;
    // console.log(reviewDate);
    const newReview = {
      name,
      rating,
      comment,
      userImg: user?.photoURL,
      itemId: id,
      userEmail: user?.email,
    };
    // console.log(newReview);

    axiosPublic
      .post("/reviews", newReview)
      .then((result) => {
        console.log(result.data);
        // if (result?.data?.message) {
        //   toast.error("Review already submitted");
        //   navigate("/products");
        // }

        if (result?.data?.insertedId) {
          toast.success("Your review has been  Submitted");
          form.reset();
          navigate("/products");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <SectionTitle title1={"Add Your Review"}></SectionTitle>

      <div>
        <form
          onSubmit={handleAddReview}
          className="flex flex-col justify-center items-center"
        >
          {/* name */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Your name</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              readOnly
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          {/* rating */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              type="number"
              name="rating"
              step="any"
              required
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          {/* comment */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Your Comment</span>
            </label>
            <textarea
              name="comment"
              className="textarea textarea-bordered"
              placeholder="write here"
              required
            ></textarea>
          </div>
          <button className="mt-1 btn  btn-outline btn-accent">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
