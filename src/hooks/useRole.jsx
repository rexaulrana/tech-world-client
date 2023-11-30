import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../provider/AuthProvider";

const useRole = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const [role, setRole] = useState(null);
  useEffect(() => {
    axiosSecure.get(`/user/admin/${user?.email}`).then((result) => {
      console.log(result.data.role);
      setRole(result?.data?.role);
      //   setRole(result?.data[0]);
    });
  }, [axiosSecure, user]);
  return [role];
};

export default useRole;
