import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navLinks = (
    <>
      <li>
        <NavLink className="text-lg font-medium" to={"/"}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="text-lg font-medium" to={"/products"}>
          products
        </NavLink>
      </li>

      {!user?.email && (
        <li>
          <NavLink className="text-lg font-medium" to={"/login"}>
            Login
          </NavLink>
        </li>
      )}
    </>
  );

  const handleLogOut = () => {
    logOut()
      .then(() => {
        // console.log(result);
        toast.success("User logout successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="navbar   bg-[#56b342] fixed max-w-6xl mx-auto  z-20 bg-opacity-80 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          Tech World
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className=" ">
            {user && (
              <img
                title="Setting"
                className="w-10 rounded-full"
                src={user?.photoURL}
                alt=""
              />
            )}
          </div>
          <ul className="dropdown-content z-[2] menu p-4 shadow bg-base-100 rounded-box w-52">
            <li className="font-medium text-center">{user?.displayName}</li>
            <li>
              <NavLink className="text-lg font-medium" to={"/dashboard"}>
                Dashboard
              </NavLink>
            </li>
            {user && (
              <li>
                <button onClick={handleLogOut} className="text-lg font-medium">
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
