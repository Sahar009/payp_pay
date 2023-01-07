import React, {useState} from 'react';
import {PayPalScriptProvider, PayPalButtons} from "@paypal/react-paypal-js";



const CheckoutButton = (props) => {
   
        const {product} = props;
    
        const [paidFor, setPaidFor] = useState(false);
        const [error, setError] = useState(null);
    
        const handleApprove = (orderId) => {
            setPaidFor(true);
        }
    
        if(paidFor){
            alert("Thank You for purchasing from Eazy2Code");
        }
    
        if(error){
            alert(error);
        }
  return (
    <PayPalScriptProvider>
    <PayPalButtons 
       
    />
</PayPalScriptProvider>
  )
}

export default CheckoutButton