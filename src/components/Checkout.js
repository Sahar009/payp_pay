import React from 'react';
import "./style.css";
import CheckoutButton from './CheckoutButton';

function Checkout() {
    const product = {
        description: "Donate for fun ",
        price: 50,
    };
  return (
    <div className="checkout">
        <h1>PayPal Checkout</h1>
        <p className="checkout-title">
            Design and Code React PayPal Checkout Procedure
        </p>
        <p className="checkout-description">
                Donate for fun  
        </p>
        <h1 className="checkout-price">$50</h1>
        {/* <img className="product-image" src={ProductImage} alt="Product Image" /> */}
        <div className="separator"></div>
        <div className="paypal">
            <p className="checkout-title">PAY WITH PAYPAL</p>
            <div className="paypal-button-container">
                <CheckoutButton  product={product}/>
            </div>
        </div>
    </div>
  )
}

export default Checkout