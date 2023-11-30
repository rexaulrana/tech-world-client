import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../provider/AuthProvider";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useMoney from "../../../../hooks/useMoney";

const CheckOutForm = () => {
  const { user } = useContext(AuthContext);
  const [transactionId, setTransactionId] = useState("");
  const axiosSecure = useAxiosSecure();
  const stripe = useStripe();
  const [error, setError] = useState("");
  const elements = useElements();
  const [money] = useMoney();
  const [clientSecret, SetClientSecret] = useState("");

  //   console.log(totalPrice);
  useEffect(() => {
    axiosSecure
      .post("/create-payment-intent", { price: money })
      .then((result) => {
        // console.log(result.data);
        SetClientSecret(result.data.clientSecret);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [axiosSecure, money]);
  //   console.log(clientSecret);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("payment error", error);

      setError(error.message);
    } else {
      console.log("paymentMethod", paymentMethod);
      setError("");
    }
    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "anonymous",
            email: user?.email || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log("confirm error", confirmError);
    } else {
      console.log("paymentIntent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        setTransactionId(paymentIntent.id);
      }
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      ></CardElement>
      <button className="btn btn-sm btn-outline mt-5" type="submit">
        Pay
      </button>
      <p className="text-center text-red-600 font-medium text-xl">{error}</p>
      {transactionId && (
        <p className="text-center text-green-600 font-medium text-xl">
          Your transactionId is [ {transactionId} ]
        </p>
      )}
    </form>
  );
};

export default CheckOutForm;
