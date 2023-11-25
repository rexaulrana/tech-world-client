import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic/useAxiosPublic";
import SectionTitle from "../../../shared/SectionTitle";
import Feature from "./Feature";

const FeaturedProducts = () => {
  const axiosPublic = useAxiosPublic();
  const {
    isPending,
    error,
    data: features,
  } = useQuery({
    queryKey: ["features"],
    queryFn: async () => {
      const result = await axiosPublic.get("/features");
      return result.data;
    },
  });
  // console.log(features);
  if (isPending) {
    return <h1>LOADING............</h1>;
  }
  if (error) {
    return <h1>ERRRROOORRR</h1>;
  }
  return (
    <div>
      <SectionTitle title1={"Featured"}></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {features?.map((feature) => (
          <Feature key={feature?._id} feature={feature}></Feature>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
