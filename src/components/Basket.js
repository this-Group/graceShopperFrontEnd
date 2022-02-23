import React from 'react';

export default function Basket(props) {
    const {cartItems, onAdd, onRemove} = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
    
    const shippingPrice = 0;
    // const shippingPrice = itemsPrice > 2000 ? 0 : 50;
    const totalPrice = itemsPrice + shippingPrice
    return (
      <div>
        
      {/* <h2>Cart Items</h2> */}
      <div>
        {/* {cartItems.length === 0 && <div>Cart is empty</div>} */}
        {cartItems.map((item) => (
          <div key={item.id} className="row">

            
            {/* <img className="album-cover" src={item.picture} alt={item.title}></img> */}
            {/* <div className="col-2">{item.title} --- {item.artist}</div> */}

            
            <div className="col-2">*Member Price:* ${item.price} x Quantity:{item.qty}</div>


            <div className="col-2">
             
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div className="col-2 text-right">
              {/* {item.qty} x ${item.price.toFixed(2)} */}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Items Price</div>
              <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
            </div>
            
            <div className="row">
              <div className="col-2">Shipping Price</div>
              <div className="col-1 text-right">
                ${shippingPrice.toFixed(2)}
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            
          </>
        )}
      </div>
      </div>
   
  );
}