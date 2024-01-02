import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import SmallNav from "./SmallNav";

const Dashboard = () => {
  // console.log(role);
  // if (role === "admin") {
  //   console.log("admin coming");
  // }
  const { user } = useContext(AuthContext);

  return (
    <div className="flex ">
      <div className="hidden lg:block">
        <Sidebar></Sidebar>
      </div>

      <div className="block lg:hidden">
        <SmallNav></SmallNav>
      </div>
      <div className=" lg:flex-1 px-5">
        <h2 className="text-xl mt-10  py-5">
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
