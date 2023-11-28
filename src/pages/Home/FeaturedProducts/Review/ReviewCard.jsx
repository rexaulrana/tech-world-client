const ReviewCard = ({ review }) => {
  //   console.log(review);
  const { comment, userImg, rating, name } = review;
  return (
    <div className="card w-[350px] bg-base-100  border-4 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={userImg} alt={name} className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{rating}</p>
        <div className="card-actions">
          <h1>{comment}</h1>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
