import { useContext } from "react";
import SectionTitle from "../../../../shared/SectionTitle";
import { AuthContext } from "../../../../provider/AuthProvider";

const AddReview = () => {
  const { user } = useContext(AuthContext);
  const handleAddReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const rating = parseInt(form.rating.value);
    const comment = form.comment.value;

    // console.log(reviewDate);
    const newReview = {
      name,
      rating,
      comment,

      //   reviewItem,
    };
    console.log(newReview);

    //    axios
    //      .post("https://classic-hotel-server.vercel.app/reviews", newReview)
    //      .then((result) => {
    //        // console.log(result.data);
    //        if (result.data.acknowledged) {
    //          Swal.fire({
    //            position: "center",
    //            icon: "success",
    //            title: "Your review has been saved",
    //            showConfirmButton: true,
    //            timer: 1500,
    //          });
    //          form.reset();
    //          navigate("/myBookings");
    //        }
    //      })
    //      .catch((err) => {
    //        console.log(err);
    //      });
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
