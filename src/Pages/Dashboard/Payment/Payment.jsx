import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../../Components/ScetionTitle/SectionTitle";
import CheckoutForm from "../../../Components/ChechoutForm/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";

const Payment = () => {
  const stripePromise = loadStripe(import.meta.env.VITE_Payment_API);
  return (
    <div>
      <SectionTitle
        heading="Payment"
        subheading="Pay first to eat"
      ></SectionTitle>

      <div className="mt-10">
        <Elements stripe={stripePromise}>
          <CheckoutForm></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
