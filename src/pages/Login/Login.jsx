// import React from "react";

import { useState } from "react";
import Navbar from "../Home/Navbar";
import { useForm } from "react-hook-form";
import { Link, NavLink } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  // const [error, setError] = useState("");
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <Navbar></Navbar>
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
                  name="password"
                  // type="text"
                  type={showPass ? "text" : "password"}
                  placeholder="Enter Your Password "
                  className=" input input-bordered w-full lg:w-96"
                />
                <div className="text-center mt-2 mb-2">
                  <h1>error</h1>
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
            <button className="btn btn-outline flex justify-center items-center gap-2">
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
