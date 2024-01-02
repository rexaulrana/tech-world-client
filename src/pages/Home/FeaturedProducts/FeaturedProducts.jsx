import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic/useAxiosPublic";
import SectionTitle from "../../../shared/SectionTitle";
import Feature from "./Feature";
import { useState } from "react";
import Loader from "../../../components/Loader";

const FeaturedProducts = () => {
  const [latest, setLatest] = useState(true);
  // console.log(latest);
  const axiosPublic = useAxiosPublic();
  const {
    isPending,
    data: features,
    refetch,
  } = useQuery({
    queryKey: ["features", "lat", "old"],
    queryFn: async () => {
      const result = await axiosPublic.get("/features");
      return result.data;
    },
  });
  // console.log(features);
  if (isPending) {
    return <Loader />;
  }
  // if (error) {
  //   return <h1>ERRRROOORRR</h1>;
  // }

  return (
    <div>
      <SectionTitle title1={"Featured"}></SectionTitle>
      <div className="flex justify-center items-center text-3xl">
        <h1 className=" font-medium mr-2">Filter:</h1>
        <button
          onClick={() => setLatest(!latest)}
          className="btn btn-outline bg-[#56b342] text-white"
        >
          {latest ? "Latest Products" : "Oldest Products"}
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {features?.map((feature) => (
          <Feature
            key={feature?._id}
            refetch={refetch}
            feature={feature}
          ></Feature>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
