import React from 'react';

function CheckoutForm(props) {
    const {checkout} = props

    return (
        <div>
            <button>Checkout</button>
            {/* form for name address and card info */}
            <button>Submit Order</button>
            {/* on click will start checkout method
                -verify card lengths
                /update curent order to PROCESSING
                /create new order and save orderId */}
        </div>
    )

}

export default  CheckoutForm;