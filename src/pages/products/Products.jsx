// import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic/useAxiosPublic";
import Navbar from "../Home/Navbar";
import ProductCard from "./ProductCard";
import Loader from "../../components/Loader";
import { useEffect, useState } from "react";

const Products = () => {
  const [search, setSearch] = useState("");
  // const all = useProducts(search);
  // console.log("all ", all);
  const axiosPublic = useAxiosPublic();
  // const [noProducts, setNoProducts] = useState("");
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setLoading(true);
    axiosPublic(`/products?search=${search}`).then((data) => {
      // console.log(data.data);
      // if (data?.data?.length === 0) {
      //   setLoading(true);

      //   return setNoProducts("No Products Found,Please search again ");
      // }
      // console.log(data.data);
      setProducts(data?.data);
      setLoading(false);
    });
  }, [axiosPublic, search]);
  // const {
  //   isPending,
  //   data: products,
  //   refetch,
  // } = useQuery({
  //   queryKey: ["features", "lat", "old"],
  //   queryFn: async () => {
  //     const result = await axiosPublic("/products");
  //     return result?.data;
  //   },
  // });
  // console.log(products);
  // search implement
  const handleSearch = (e) => {
    e.preventDefault();
    const text = e.target.searchText.value;

    // console.log("form", text);
    setSearch(text);
  };
  if (loading) {
    return <Loader />;
  }

  return (
    <div className="">
      <Navbar></Navbar>

      <form onSubmit={handleSearch} className="text-center py-32">
        <input
          type="text"
          name="searchText"
          placeholder="Search here...."
          className="border-2 rounded-md py-2 px-2 border-green-600"
          id=""
        />
        <input className="btn btn-outline ml-3" type="submit" value="Search" />
      </form>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        {products?.map((product) => (
          <ProductCard
            key={product._id}
            // refetch={refetch}
            product={product}
          ></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
