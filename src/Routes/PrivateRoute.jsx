import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  //   const navigate = useNavigate();
  const location = useLocation();
  if (loading) {
    return (
      <span className="py-30 px-20 loading loading-bars loading-lg"></span>
    );
  }
  if (user) {
    return children;
  }

  return <Navigate to={"/login"} state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
