import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../hooks/useAxiosPublic/useAxiosPublic";
import { useEffect, useState } from "react";
import Loader from "../../../../components/Loader";
import { useParams } from "react-router-dom";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const [review, setReview] = useState([]);
  // console.log(id);
  const axiosPublic = useAxiosPublic();
  const {
    isPending,
    data: reviews,
    // refetch,
  } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const result = await axiosPublic("/reviews");
      return result?.data;
    },
  });

  useEffect(() => {
    setLoading(true);
    const itemReview = reviews?.filter((review) => review?.itemId === id);
    setReview(itemReview);
    setLoading(false);
  }, [reviews, id]);

  console.log("hi", review);
  if (isPending || loading) {
    return <Loader />;
  }
  // useEffect(() => {
  //   fetch("http://localhost:5000/reviews")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  // }, [axiosPublic]);

  return (
    <div>
      {review?.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {review?.map((r) => (
            <ReviewCard key={r._id} review={r}></ReviewCard>
          ))}
        </div>
      ) : (
        <h1 className="text-center text-5xl py-7">NO REVIEW </h1>
      )}
    </div>
  );
};

export default Reviews;
