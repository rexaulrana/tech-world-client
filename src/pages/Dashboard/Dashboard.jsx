import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import {
  FaAddressCard,
  FaComment,
  FaContao,
  FaDiscord,
  FaHome,
  FaProductHunt,
  FaSatelliteDish,
  FaUser,
  FaUserCircle,
} from "react-icons/fa";
import useRole from "../../hooks/useRole";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [role] = useRole();
  // console.log(role);
  // if (role === "admin") {
  //   console.log("admin coming");
  // }
  return (
    <div className="flex ">
      <div className="w-64 h-screen bg-[#6ad34c] px-5">
        <h2 className="text-3xl font-medium py-5">Tech World</h2>
        <ul className="py-5">
          {/* admin nav start */}
          {role === "admin" && (
            <>
              <li className="">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-lg flex justify-start items-center w-40 bg-white rounded-md py-1 px-3"
                      : "text-lg flex justify-start items-center"
                  }
                  to={"dashboard/statistics"}
                >
                  <span className="mr-2">
                    <FaSatelliteDish></FaSatelliteDish>
                  </span>
                  Statistics
                </NavLink>
              </li>

              <li className="">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-lg flex justify-start items-center w-52 bg-white rounded-md py-1 px-3"
                      : "text-lg flex justify-start items-center"
                  }
                  to={"dashboard/manageUsers"}
                >
                  <span className="mr-2">
                    <FaUserCircle></FaUserCircle>
                  </span>
                  Manage Users
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-lg flex justify-start items-center w-52 bg-white rounded-md py-1 px-3"
                      : "text-lg flex justify-start items-center"
                  }
                  to={"dashboard/manageCoupons"}
                >
                  <span className="mr-2">
                    <FaDiscord></FaDiscord>
                  </span>
                  Manage Coupons
                </NavLink>
              </li>
            </>
          )}

          {/* moderator nav  start*/}

          {role === "moderator" && (
            <>
              <li className="">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-lg flex justify-start items-center w-52 bg-white rounded-md py-1 px-3"
                      : "text-lg flex justify-start items-center"
                  }
                  to={"dashboard/reportedContents"}
                >
                  <span className="mr-2">
                    <FaContao></FaContao>
                  </span>
                  Reported Contents
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-lg flex justify-start items-center w-52 bg-white rounded-md py-1 px-3"
                      : "text-lg flex justify-start items-center"
                  }
                  to={"dashboard/productReview"}
                >
                  <span className="mr-2">
                    <FaComment></FaComment>
                  </span>
                  Product Review
                </NavLink>
              </li>
            </>
          )}

          {/* user nav start */}

          {role !== "moderator" && role !== "admin" && (
            <>
              <li className="">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-lg flex justify-start items-center w-40 bg-white rounded-md py-1 px-3"
                      : "text-lg flex justify-start items-center"
                  }
                  to={"dashboard/myProfile"}
                >
                  <span className="mr-2">
                    <FaUser></FaUser>
                  </span>
                  My Profile
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-lg flex justify-start items-center bg-white w-40 rounded-md py-1 px-3"
                      : "text-lg flex justify-start items-center"
                  }
                  to={"dashboard/addProduct"}
                >
                  <span className="mr-2">
                    <FaAddressCard></FaAddressCard>
                  </span>
                  Add Product
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-lg flex justify-start items-center w-40 bg-white rounded-md py-1 px-3"
                      : "text-lg flex justify-start items-center"
                  }
                  to={"dashboard/myProducts"}
                >
                  <span className="mr-2">
                    <FaProductHunt></FaProductHunt>
                  </span>
                  My Product
                </NavLink>
              </li>
            </>
          )}
        </ul>

        <div className="divider mt-40"></div>
        <ul className=" py-5">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-lg flex justify-start items-center bg-white rounded-md py-1 px-3"
                  : "text-lg flex justify-start items-center"
              }
              to={"/"}
            >
              <span className="mr-2">
                <FaHome></FaHome>
              </span>
              Home
            </NavLink>
          </li>
        </ul>
      </div>
      <div className=" lg:flex-1 px-5">
        <h2 className="text-xl  py-5">
          Welcome{" "}
          {user?.displayName ? (
            <span className="font-medium">{user?.displayName}</span>
          ) : (
            "back"
          )}
        </h2>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
