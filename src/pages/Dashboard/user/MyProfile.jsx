import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import Payment from "./payment/Payment";
import useMoney from "../../../hooks/useMoney";

const MyProfile = () => {
  const [money] = useMoney();
  // console.log(money);
  const { user } = useContext(AuthContext);
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={user?.photoURL}
          alt={user?.displayName}
          className="rounded-xl w-[200px]"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{user?.displayName}</h2>
        <p> {user?.email}</p>
        <div className="border-2 py-5 px-5">
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <h1 className="text-2xl"> ${money}</h1>
          <h1>Membership Subscription</h1>
          <button
            className="btn bg-green-400 mt-4 w-40 hover:bg-green-500"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            Member Subscription
          </button>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
              <Payment></Payment>
              {/* payment */}
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
