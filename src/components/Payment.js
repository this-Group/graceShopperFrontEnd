import React from "react";
import ReactDom from "react-dom";

import { useEffect, useState } from "react";

const Payment = (props) => {
    const {checkOut} = props
    const [cardNumber, setCardNumber] = useState('')
    const [cvv, setCvv] = useState('')
    const orderId = localStorage.getItem("oderId")

    return (
        <div className="paymentForm">
            {/* <form onSubmit={}> */}
            <form>
                <h2>Payment</h2>
                <br></br><br></br>
                <label>Credit Card</label><br></br>
                <input className="payment-creditcardnumber" type="text" placeholder="Enter credit card number" value={cardNumber} onChange={(event) => setCardNumber(event.target.value)}></input>
                <br></br>
                <div className="expirationDate">
                    <label> Expiration </label>
                    <br></br>
                    <div>
                        <select id="month" name="month">
                            <option value="1">01-January</option>
                            <option value="2">02-February</option>
                            <option value="3">03-March</option>
                            <option value="4">04-April</option>
                            <option value="5">05-May</option>
                            <option value="6">06-June</option>
                            <option value="7">07-July</option>
                            <option value="8">08-August</option>
                            <option value="9">09-September</option>
                            <option value="10">10-October</option>
                            <option value="11">11-November</option>
                            <option value="12">12-December</option>
                        </select>
                        <select id="year" name="year">
                            <option value="2022">2022</option>
                            <option value="2023">2023</option>
                            <option value="2024">2024</option>
                            <option value="2025">2025</option>
                            <option value="2026">2026</option>
                        </select>
                    </div>
                </div>
                <br></br>
                <label>CVV (on back) </label>
                <br></br>
                <input type="text" placeholder="---" value={cvv} onChange={(event) => setCvv(event.target.value)}></input>
                <br></br><br></br>
                <label>Billing Adress</label><br></br>
                <input className="payment-address" type="text" placeholder="Adress Line"></input>
                <br></br>
                <label>Adress Line 2</label>
                <br></br>
                <input className="payment-adress" type="text" placeholder="Apartment, suite, building etc."></input>
                <br></br>
                <label>ZIP Code</label>
                <br></br><br></br>
                <button type="submit"
                onClick={(event) => {
                    event.preventDefault();
                    checkOut(orderId, cardNumber, cvv);
                    setCardNumber("");
                    setCvv("")
                }}>Place Order</button>

            </form>
        </div>
    )
}

export default Payment;