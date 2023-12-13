import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://tech-world-a12.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};
export default useAxiosPublic;
