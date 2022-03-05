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
        </div >
    )

}

export default CheckoutForm;