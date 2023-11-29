import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import toast from "react-hot-toast";
import useAxiosPublic from "../../hooks/useAxiosPublic/useAxiosPublic";

const Registration = () => {
  // const[error,setError]=useState('')
  const { createUser, handleGoogle } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const [showPass, setShowPass] = useState(false);
  //   const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    createUser(data?.email, data?.password)
      .then((result) => {
        console.log(result.user);
        // update profile
        updateProfile(auth.currentUser, {
          displayName: data?.name,
          photoURL: data?.photo,
        })
          .then(() => {
            const userInfo = {
              name: data?.name,
              email: data?.email,
            };
            // console.log("profile updated");
            axiosPublic.post("/users", userInfo).then((result) => {
              console.log("user added", result);

              toast.success("Registration successful");
              navigate(from, { replace: true });
              reset();
            });
            // const userInfo = {
            //   name: data.name,
            //   email: data.email,
            // };
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((err) => {
        console.log(err);
        // error
      });
  };
  const handleGoogleLog = () => {
    handleGoogle()
      .then((result) => {
        // console.log(result);
        const userInfo = {
          name: result?.user?.displayName,
          email: result?.user?.email,
        };
        axiosPublic.post("/users", userInfo).then((result) => {
          console.log("user added", result);

          toast.success("user login successfully");
          navigate(from, { replace: true });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="lg:flex justify-center items-center gap-10">
      <div>
        <h2 className="text-4xl font-semibold text-center ">
          Registration Now
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control  w-96">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              {...register("name", { required: true })}
              placeholder="Type here..."
              className="input input-bordered   lg:w-96"
            />
            {errors.name && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>
          <div className="form-control w-96">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              {...register("photo", { required: true })}
              placeholder="Type here..."
              className="input input-bordered   lg:w-96"
            />
            {errors.photo && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>
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
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 8,
                  pattern: /[A-Z][!#$@^%&*]/,
                })}
                // type="text"
                type={showPass ? "text" : "password"}
                placeholder="Enter Your Password "
                className=" input input-bordered w-full lg:w-96"
              />
              <div>
                {" "}
                {errors?.password?.type === "required" && (
                  <span className="text-red-600">This field is required</span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-red-600">Password must be 6 digit</span>
                )}
                {errors.password?.type === "maxLength" && (
                  <span className="text-red-600">
                    Password must less than 8 digit
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-red-600 w-[200px] h-20">
                    Password must be one special character and one capital
                    letter{" "}
                  </span>
                )}
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
            Registration with google
          </button>
        </div>
        <p className="text-center mt-1 mb-2">
          Already have an account? Please{" "}
          <Link className="text-blue-600 font-medium " to={"/login"}>
            Login
          </Link>
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
  );
};

export default Registration;
