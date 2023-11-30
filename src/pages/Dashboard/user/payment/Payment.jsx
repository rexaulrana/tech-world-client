import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";

const Payment = () => {
  //   const [money] = useMoney();
  //   console.log(money);
  // pk needed
  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PAYMENT_PK);
  //   console.log(import.meta.env.VITE_stripe_payment_pk);
  return (
    <div>
      <Elements stripe={stripePromise}>
        <CheckOutForm></CheckOutForm>
      </Elements>
    </div>
  );
};

export default Payment;
