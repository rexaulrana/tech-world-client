import { NavLink } from "react-router-dom";
import useRole from "../../hooks/useRole";
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
import { TiThMenu } from "react-icons/ti";

const SmallNav = () => {
  const [role] = useRole();
  return (
    <div className="navbar fixed z-10  ">
      <div className="drawer drawer-end">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer" className="btn bg-green-600 drawer-button">
            <span className="text-2xl text-white">
              <TiThMenu></TiThMenu>
            </span>
          </label>
        </div>
        <div className="drawer-side overflow-auto  scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300 overflow-y-scroll ">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu  w-52 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}

            <h2 className="text-xl font-medium mt-5 px-5">Tech World</h2>
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
                      to={"statistics"}
                    >
                      <span className="">
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
                      to={"manageUsers"}
                    >
                      <span className="">
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
                      to={"manageCoupons"}
                    >
                      <span className="">
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
                      to={"reportedContents"}
                    >
                      <span className="">
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
                      to={"productReview"}
                    >
                      <span className="">
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
                      to={"myProfile"}
                    >
                      <span className="">
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
                      to={"addProduct"}
                    >
                      <span className="">
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
                      to={"myProducts"}
                    >
                      <span className="">
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
                  <span className="">
                    <FaHome></FaHome>
                  </span>
                  Home
                </NavLink>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SmallNav;
