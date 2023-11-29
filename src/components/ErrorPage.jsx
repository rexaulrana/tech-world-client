// import { useNavigate } from "react-router-dom";
import img from "../assets/images/error.jpg";
const ErrorPage = () => {
  // const navigate = useNavigate();
  return (
    <div className="relative">
      <img className="h-screen" src={img} alt="" />
      {/* <span className="absolute sm:bottom-[230px] sm:left-[309px]">
        <button
          onClick={() => {
            navigate(-1);
          }}
          className="btn btn-warning"
        >
          Back
        </button>
      </span> */}
    </div>
  );
};

export default ErrorPage;
