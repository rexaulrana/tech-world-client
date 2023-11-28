// import React from "react";

import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");
  const { signIn, handleGoogle } = useContext(AuthContext);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleGoogleLog = () => {
    handleGoogle()
      .then(() => {
        // console.log(result);
        toast.success("user login successfully");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const onSubmit = (data) => {
    // console.log(data.email);
    const email = data?.email;
    const password = data?.password;

    signIn(email, password)
      .then(() => {
        // console.log(result.user);
        toast.success("user login successfully");
        navigate(from, { replace: true });
        reset();
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  return (
    <div>
      {/* <Navbar></Navbar> */}
      <div className="lg:flex justify-center items-center gap-10">
        <div>
          <h2 className="text-4xl font-semibold text-center mb-4 mt-20">
            Login Now
          </h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control  w-96">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                {...register("email", { required: true })}
                placeholder="Type here..."
                className="input input-bordered   lg:w-96"
              />
              {errors.email && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
            <div className=" form-control w-96">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="relative">
                <input
                  {...register("password", { required: true })}
                  name="password"
                  // type="text"
                  type={showPass ? "text" : "password"}
                  placeholder="Enter Your Password "
                  className=" input input-bordered w-full lg:w-96"
                />
                {errors.password && (
                  <span className="text-red-600">This field is required</span>
                )}
                <div className="text-center text-red-600 mt-2 mb-2">
                  {error && <h1>{error}</h1>}
                </div>

                <div
                  onClick={() => setShowPass(!showPass)}
                  className="absolute top-3 right-5"
                >
                  {showPass ? <NavLink>Hide</NavLink> : <NavLink>Show</NavLink>}
                </div>
              </div>
            </div>

            {/* {error && (
              <p className="w-96 text-lg text-red-700 text-center">{error}</p>
            )} */}

            {/* <input type="btn " className="btn btn-accent mt-2  w-full " /> */}
            <button className="btn btn-accent mt-2  w-full ">Submit</button>
          </form>
          <div className="divider divider-primary">OR</div>
          <div className="flex justify-center mt-1 mb-1">
            {" "}
            <button
              onClick={handleGoogleLog}
              className="btn btn-outline flex justify-center items-center gap-2"
            >
              {" "}
              <span>
                <FaGoogle></FaGoogle>
              </span>{" "}
              Continue with google
            </button>
          </div>
          <p className="text-center mt-1 mb-2">
            New here? Please{" "}
            <Link className="text-blue-600 font-medium " to={"/registration"}>
              Registration
            </Link>{" "}
            now.
          </p>
        </div>
        <div>
          {/* <img
            className="hidden lg:block w-[650px] h-[450px]"
            src={log}
            alt=""
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
