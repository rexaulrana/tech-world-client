import { useContext } from "react";
// import { AuthContext } from "../../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Loader from "../components/Loader";
import useRole from "../hooks/useRole";

const RoleRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [role, loader] = useRole();
  //   console.log(role, loader);
  //   const navigate = useNavigate();
  const location = useLocation();
  if (loading || loader) {
    return <Loader />;
  }
  if (user || role === "admin" || role === "moderator") {
    return children;
  }

  return <Navigate to={"/login"} state={{ from: location }} replace></Navigate>;
};

export default RoleRoute;
