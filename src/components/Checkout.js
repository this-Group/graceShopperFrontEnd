import { React, useState, useEffect } from 'react';
import Payment from "./Payment"

function CheckoutForm(props) {
    const { checkout } = props
    const [toggle, setToggle] = useState(false)

    return (
        <div>
            <button
                onClick={(event) => {
                    event.preventDefault();
                    if (toggle === false) {
                        setToggle(true);
                    } else {
                        setToggle(false);
                    };
                }}> Checkout</button>
            {/* form for name address and card info */}
            {toggle ?
                <Payment checkout={checkout} />
                : ''}

            
            {/* <button>Submit Order</button> */}
            {/* on click will start checkout method
                -verify card lengths
                /update curent order to PROCESSING
                /create new order and save orderId */}
        </div >
    )

}

export default CheckoutForm;