import { Link } from "react-router-dom";

const Diff = () => {
  return (
    <div className="mt-20">
      <div
        className="bg-fixed hero min-h-screen"
        style={{
          backgroundImage: "url(https://i.ibb.co/rvWBTz4/grow.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              {" "}
              <p className="mb-5 border-2 py-10 px-10">
                Discover innovation to help you grow
              </p>
            </h1>
            {/*  */}

            <Link to={"/products"}>
              <button className=" border-2 py-3 px-7 rounded-full hover:bg-green-700 hover:bg-opacity-60">
                Explore More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diff;
