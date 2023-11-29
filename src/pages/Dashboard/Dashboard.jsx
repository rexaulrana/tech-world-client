import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import {
  FaAddressCard,
  FaHome,
  FaProductHunt,
  FaUserAlt,
} from "react-icons/fa";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="flex ">
      <div className="w-64 h-screen bg-[#6ad34c] px-5">
        <h2 className="text-3xl font-medium py-5">Tech World</h2>
        <ul className="py-5">
          {/* user nav */}
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
                <FaUserAlt></FaUserAlt>
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
