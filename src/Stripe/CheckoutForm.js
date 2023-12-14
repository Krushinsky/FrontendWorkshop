import React, { useState } from "react";
import { useSelector } from "react-redux";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { getTotalPrice } from "../redux/cartSlice";

export const CheckoutForm = ({onChange}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [messageSuccess, setMessageSaccess] = useState(false)
  
  const amount = useSelector(getTotalPrice)*100

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

        if (!error) {
        console.log("Stripe 23 | token generated!", paymentMethod);
        try {
          const { id } = paymentMethod;
          const response = await axios.post(
            "http://localhost:8080/stripe/charge",
            {
              amount,
              id: id,
            }
          );
  
          console.log("Stripe 35 | data", response.data.success);
          if (response.data.success) {
            console.log("CheckoutForm.js 25 | payment successful!");
            setMessageSaccess(true)
          }
        } catch (error) {
          console.log("CheckoutForm.js 28 | ", error);
        }
      } else {
        console.log(error.message);
      }
    };

    const id = `Cart`;

    const showPay = useSelector((state) => state.showPayment.value)
  
    return (
      <div id={id}>

    <div className="Payment" style={showPay}>
      {!messageSuccess ?
      <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
        <CardElement className="CardElement" />
        <button className="Pay">Pay</button>
      </form>
      :
      <div>
        <h2>Your payment was successful!</h2>
      </div>
      }
      
    </div>
    </div>
  );
};