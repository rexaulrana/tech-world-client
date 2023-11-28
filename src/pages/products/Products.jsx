import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic/useAxiosPublic";
import Navbar from "../Home/Navbar";
import ProductCard from "./ProductCard";
import Loader from "../../components/Loader";

const Products = () => {
  const axiosPublic = useAxiosPublic();
  const {
    isPending,
    data: products,
    refetch,
  } = useQuery({
    queryKey: ["features", "lat", "old"],
    queryFn: async () => {
      const result = await axiosPublic("/products");
      return result?.data;
    },
  });
  // console.log(products);
  if (isPending) {
    return <Loader />;
  }
  return (
    <div className="">
      <Navbar></Navbar>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 py-20">
        {products?.map((product) => (
          <ProductCard
            key={product._id}
            refetch={refetch}
            product={product}
          ></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
