
import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CheckoutForm } from "./CheckoutForm";

const PUBLIC_KEY = "pk_test_51NA9MXBZVegoYbBI727iuBWPmRmDvZr8tOIFPZQYoaNxCkQWrWMIcySYo0iEhywLtwcebK1kDyq4rquhjxkoKDeK00Auyk3CR4";

const stripeTestPromise = loadStripe(PUBLIC_KEY);


const Stripe = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <CheckoutForm />
    </Elements>
   ) ;
};

export default Stripe;