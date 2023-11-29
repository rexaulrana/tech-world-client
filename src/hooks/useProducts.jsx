import { useEffect } from "react";
import useAxiosPublic from "./useAxiosPublic/useAxiosPublic";

const useProducts = (search) => {
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    axiosPublic(`/products?search=${search}`).then((data) => {
      console.log(data.data);
    });
  }, [axiosPublic, search]);
};

export default useProducts;
//  axiosPublic(`/products?search=${search}`)
