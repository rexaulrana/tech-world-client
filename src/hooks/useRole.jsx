import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../provider/AuthProvider";

const useRole = () => {
  const { user } = useContext(AuthContext);
  const [loader, setLoader] = useState(false);
  const axiosSecure = useAxiosSecure();
  const [role, setRole] = useState(null);
  useEffect(() => {
    setLoader(true);
    axiosSecure.get(`/user/admin/${user?.email}`).then((result) => {
      //   console.log(result.data.role);
      setRole(result?.data?.role);
      setLoader(false);
      //   setRole(result?.data[0]);
    });
  }, [axiosSecure, user]);
  return [role, loader];
};

export default useRole;
