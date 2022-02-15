import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// import { createCartItem, registerGuest, createOrder } from "./api/apiCalls";

const GuestCart = ({
  guestCart,
  subtotal,
  setSubtotal,
  totalItemNumber,
  setTotalItemNumber,
}) => {
  let subtotalTracker = 0;
  let itemNumberTracker = 0;

  const [qty, setqty] = useState(0);
  const [isEdited, setIsEdited] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  useEffect(() => {
    setIsEdited(false);
    setIsDeleted(false);
  }, [isEdited, isDeleted]);

  const deleteHandler = async (event) => {
    event.preventDefault();
    console.log("delete button clicked");
    const index = event.target.value;
    guestCart.splice(index, 1);
    setIsDeleted(true);
  };

  return (
    <div className="cart">
      <h1>Guest Cart</h1>
      <Link to="/products">
        <button>Back To Products</button>
      </Link>
      <p>Items ({totalItemNumber})</p>

      {guestCart &&
        guestCart.map((item, index) => {
          const updateHandler = async (event) => {
            event.preventDefault();
            console.log("update button clicked");
            item.qty = qty;
            setIsEdited(true);
          };

          // const {id, name, picture, itemqty, size, price} = item

          subtotalTracker = subtotalTracker + item.qty * item.price;
          setSubtotal(subtotalTracker);

          itemNumberTracker = itemNumberTracker + item.qty;
          setTotalItemNumber(itemNumberTracker);

          return (
            <div key={item.id} className="item">
              <div className="item_left">
                <img className="teeImg" src={item.picture} alt={item.artist} />

                <div>
                  <p>name: {item.artist}</p>
                  <form>
                    <label>qty:</label>
                    <input
                      className="qtyInput"
                      type="number"
                      min="1"
                      defaultValue={item.qty}
                      onChange={(event) => {
                        setqty(parseInt(event.target.value));
                        console.log(qty);
                      }}
                    />

                    <button onClick={updateHandler}>Update</button>

                    <button value={index} onClick={deleteHandler}>
                      Delete
                    </button>
                  </form>
                </div>
              </div>

              <div className="item_right">
                <p>price: {item.price * item.qty}</p>
              </div>
            </div>
          );
        })}
      <br></br>
      <div className="subtotalLine">
        <p>Subtotal: $ {subtotal}</p>
      </div>

      <Link to="/checkout/guest">
        <button>Checkout</button>
      </Link>
    </div>
  );
};

export default GuestCart;
